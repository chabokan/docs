import React from 'react';
import DocItem from '@theme-original/DocItem';
import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

export default function DocItemWrapper(props) {
    const {siteConfig} = useDocusaurusContext();
    const metadata = props.content.metadata;

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: metadata?.title ?? 'مستندات چابکان',
        image: [
            "/img/chabokan-logo.jpg"
        ],
        author: [{
            "@type": "Organization",
            "name": siteConfig.organizationName,
            "url": "https://chabokan.net"
        }]
    }
    return (
        <>
            <Head>
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            </Head>
            <DocItem {...props} />
        </>
    );
}
