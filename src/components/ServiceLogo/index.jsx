import React from 'react';
import {flatGlobalLogos, globalLogos} from "@site/src/data/logo/index.js";

export default function ServiceLogo({id, category, linkMode, alt, galleryMode, logoData}) {
    if (galleryMode)
        return <Gallery category={category} linkMode={linkMode}/>;
    else if (logoData)
        return <Element id={id} logoData={logoData} linkMode={linkMode}/>;

    logoData = prepareLogoData(category, id, alt);

    return <Element id={id} logoData={logoData} linkMode={linkMode}/>;
}

function Gallery({category, linkMode}) {
    const logos = globalLogos[category];
    if (!logos) {
        console.error(`gallery ${category} is not found`)
    }
    return Object.entries(logos)
        .map(([id, logoData]) => {
            return <ServiceLogo key={id} id={id} logoData={logoData} linkMode={linkMode}/>
        })
}

function Element({id, logoData, linkMode}) {
    const {alt, label, logo} = logoData;
    let content = <Content url={logo} alt={alt} title={label}/>
    if (linkMode) {
        return <Link logoData={logoData} linkMode={linkMode}>
            {content}
        </Link>
    }
    return (
        <div key={id} className="platform-icon">
            {content}
        </div>
    )
}

function Content({url, alt, title}) {
    title = <><br/><span>{title}</span></>;
    return (
        <>
            <img src={url} alt={alt} loading="lazy"/>
            {title}
        </>
    )
}


function Link({logoData, linkMode, children}) {
    let url;
    if (linkMode === true || linkMode === 'true')
        url = logoData.deployUrl;
    else if (linkMode === 'index')
        url = logoData.indexUrl;
    else if (linkMode === 'nginx')
        url = logoData.indexUrl + 'nginx-config';
    else if (linkMode === 'shared')
        url = logoData.indexUrl + 'shared-setup';
    else url = linkMode;

    return (
        <a href={url} className="platform-icon">
            {children}
        </a>
    );
}

function prepareLogoData(category, id, alt) {
    let logos = flatGlobalLogos;
    if (category)
        logos = globalLogos[category];


    let logoData = logos[id];
    if (!logoData) {
        console.error(`logo ${id} not found in category ${category}`)
    }

    if (alt) {
        logoData = {
            ...logoData,
            alt: alt
        };
    }
    return logoData;
}



