<?php
/**
 * Plugin Name: Elite Leather Custom API
 * Description: Custom REST API endpoints for Elite Leather website.
 * Version: 1.0
 * Author: Zevora
 */
 
// Prevent direct access
if (!defined('ABSPATH')) {
    exit;
}
 
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
    $email = sanitize_email($params['email'] ?? ''); // Added email field
    $phone = sanitize_text_field($params['phone'] ?? ''); // Added phone field
    $quantity = sanitize_text_field($params['quantity'] ?? '');
    $details = sanitize_textarea_field($params['projectDetails'] ?? '');
 
    // Basic Validation
    if (empty($first_name) || empty($email)) {
        return new WP_Error('missing_fields', 'Name and Email are required', array('status' => 400));
    }
 
    // Prepare Email
    $to = get_option('admin_email'); // Sends to site admin
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
 
    // Send Email
    $sent = wp_mail($to, $subject, $message, $headers);
 
    if ($sent) {
        return new WP_REST_Response(array(
            'success' => true, 
            'message' => 'Inquiry sent successfully.'
        ), 200);
    } else {
        return new WP_Error('email_failed', 'Failed to send email.', array('status' => 500));
    }
}
