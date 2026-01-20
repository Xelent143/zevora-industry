<?php
/**
 * Theme Functions
 */

// 1. Enqueue Scripts & Styles
function react_theme_enqueue_scripts() {
    // Load the React Build's JS and CSS
    // We scan the 'assets' folder to dynamically find the hashed filenames
    $dir = get_template_directory() . '/assets';
    $files = scandir($dir);
    
    foreach ($files as $file) {
        if (pathinfo($file, PATHINFO_EXTENSION) === 'css') {
            wp_enqueue_style('react-theme-style', get_template_directory_uri() . '/assets/' . $file);
        }
        if (pathinfo($file, PATHINFO_EXTENSION) === 'js') {
            wp_enqueue_script('react-theme-app', get_template_directory_uri() . '/assets/' . $file, array(), null, true);
        }
    }
}
add_action('wp_enqueue_scripts', 'react_theme_enqueue_scripts');

// 2. Fix 404 Errors (Route all traffic to index.php)
function react_theme_rewrites() {
    // Ensure that all requests that don't match a static file are handled by index.php
    add_rewrite_rule('^/(.+)/?', 'index.php', 'top');
}
add_action('init', 'react_theme_rewrites');

// 3. Support Menu / Title Tag (Optional but good for WP)
function react_theme_setup() {
    add_theme_support('title-tag');
    add_theme_support('post-thumbnails');
    add_theme_support('custom-logo', array(
        'height'      => 250,
        'width'       => 250,
        'flex-height' => true,
        'flex-width'  => true,
    ));
}
add_action('after_setup_theme', 'react_theme_setup');

/**
 * 4. Request to Quote API Endpoint & Storage
 * Handles requests from the React frontend 'Request a Quote' form.
 */

// Register Custom Post Type for Inquiries
add_action('init', function() {
    register_post_type('wholesale_inquiry', array(
        'labels' => array(
            'name' => 'Inquiries',
            'singular_name' => 'Inquiry',
            'menu_name' => 'Quote Requests',
        ),
        'public' => false,
        'show_ui' => true,
        'show_in_menu' => true,
        'supports' => array('title', 'editor', 'custom-fields'),
        'menu_icon' => 'dashicons-email',
    ));
});
 
// Register the REST API endpoint
add_action('rest_api_init', function () {
    register_rest_route('elite-leather/v1', '/inquiry', array(
        'methods' => 'POST',
        'callback' => 'handle_wholesale_inquiry',
        'permission_callback' => '__return_true', // Public endpoint
    ));
});
 
/**
 * Handle the wholesale inquiry POST request
 */
function handle_wholesale_inquiry($request) {
    $params = $request->get_json_params();
 
    // Sanitize input
    $first_name = sanitize_text_field($params['firstName'] ?? '');
    $last_name = sanitize_text_field($params['lastName'] ?? '');
    $company = sanitize_text_field($params['companyName'] ?? '');
    $email = sanitize_email($params['email'] ?? '');
    $phone = sanitize_text_field($params['phone'] ?? '');
    $quantity = sanitize_text_field($params['quantity'] ?? '');
    $details = sanitize_textarea_field($params['projectDetails'] ?? '');
 
    // Basic Validation
    if (empty($first_name) || empty($email)) {
        return new WP_Error('missing_fields', 'Name and Email are required', array('status' => 400));
    }

    // 1. SAVE TO DATABASE (Reliable Backup)
    $post_id = wp_insert_post(array(
        'post_title'   => $company . ' - ' . $first_name . ' ' . $last_name,
        'post_content' => $details,
        'post_type'    => 'wholesale_inquiry',
        'post_status'  => 'publish',
        'meta_input'   => array(
            'inquiry_email' => $email,
            'inquiry_phone' => $phone,
            'inquiry_quantity' => $quantity,
        ),
    ));
 
    // 2. SEND EMAIL
    $to = get_option('admin_email');
    $subject = 'New Wholesale Inquiry from ' . $company;
    
    $message = "You have received a new wholesale inquiry:\n\n";
    $message .= "Name: $first_name $last_name\n";
    $message .= "Company: $company\n";
    $message .= "Email: $email\n";
    $message .= "Phone: $phone\n";
    $message .= "Estimated Quantity: $quantity\n";
    $message .= "Project Details:\n$details\n";
    
    $headers = array('Content-Type: text/plain; charset=UTF-8');
    if ($email) {
        $headers[] = 'Reply-To: ' . $first_name . ' <' . $email . '>';
    }
 
    $sent = wp_mail($to, $subject, $message, $headers);
 
    // Return success if SAVED, even if email failed (we don't want to show error to user if we have their data)
    if ($post_id) {
        return new WP_REST_Response(array(
            'success' => true, 
            'message' => 'Inquiry received successfully.',
            'email_sent' => $sent
        ), 200);
    } else {
        return new WP_Error('save_failed', 'Failed to save inquiry.', array('status' => 500));
    }
}
?>
