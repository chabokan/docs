import React from 'react';
import Category from '@theme-original/DocSidebarItem/Category';
import setIcon from "../../../plugins/chabokan-docusaurus-icon-plugin/setIcon";

export default function CategoryWrapper(props) {
    setIcon(props.item);
    return (<Category {...props}/>);
}
