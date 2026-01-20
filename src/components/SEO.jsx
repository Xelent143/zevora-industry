import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonical, image, type = 'website' }) => {
    const siteTitle = 'Zevora - Premium Leather Glove Manufacturer';
    const finalTitle = title ? `${title} | Zevora` : siteTitle;
    const finalDescription = description || 'Zevora Industry: Defining the standards of leather glove manufacturing since 1984. Quality, durability, and craftsmanship.';
    const siteUrl = 'https://zevoraindustry.com'; // New base URL
    const finalUrl = canonical || siteUrl;
    const finalImage = image || `${siteUrl}/og-image.jpg`; // Placeholder

    // Structured Data (JSON-LD) for Organization
    const schemaData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Zevora Leather Industry",
        "url": siteUrl,
        "logo": `${siteUrl}/logo.png`,
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+92-317-735-0946",
            "contactType": "Sales",
            "areaServed": "Global"
        },
        "sameAs": [
            "https://www.facebook.com/zevoraindustry",
            "https://www.instagram.com/zevora_industry",
            "https://www.linkedin.com/company/zevora"
        ]
    };

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{finalTitle}</title>
            <meta name="description" content={finalDescription} />
            <meta name="keywords" content={keywords || 'leather gloves, wholesale gloves, glove manufacturer, industrial gloves, fashion gloves, safety gloves'} />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:image" content={finalImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />

            {/* Structured Data */}
            <script type='application/ld+json'>
                {JSON.stringify(schemaData)}
            </script>
        </Helmet>
    );
};

export default SEO;
