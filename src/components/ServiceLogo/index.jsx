import React from 'react';
import {flatGlobalLogos, globalLogos} from "@site/src/data/logo/index.js";

export default function ServiceLogo({id, category, linkMode, alt, galleryMode, iconData}) {
    if (galleryMode)
        return <Gallery category={category} linkMode={linkMode}/>;
    else if (iconData)
        return <Element id={id} iconData={iconData} linkMode={linkMode}/>;

    iconData = prepareIconData(category, iconData, id, alt);

    return <Element id={id} iconData={iconData} linkMode={linkMode}/>;
}

function Gallery({category, linkMode}) {
    const icons = globalLogos[category];
    if (!icons) {
        console.error(`gallery ${category} is not found`)
    }
    return Object.entries(icons)
        .map(([id, iconData]) => {
            return <ServiceLogo key={id} id={id} iconData={iconData} linkMode={linkMode}/>
        })
}

function Element({id, iconData, linkMode}) {
    const {alt, label, logo, url} = iconData;
    let content = <Content url={logo} alt={alt} title={label}/>
    if (linkMode) {
        return <Link key={id} url={url}>
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


function Link({url, children}) {
    return (
        <a href={url} className="platform-icon">
            {children}
        </a>
    );
}

function prepareIconData(category, iconData, id, alt) {
    let icons = flatGlobalLogos;
    if (category)
        icons = globalLogos[category];


    iconData = icons[id];
    if (!iconData) {
        console.error(`icon ${id} not found in category ${category}`)
    }

    if (alt) {
        iconData = {
            ...iconData,
            alt: alt
        };
    }
    return iconData;
}



