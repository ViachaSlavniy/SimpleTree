import React, {useState} from 'react';
import Child from "./Folder";
import {closedFolderIcon, minusBlock, openedFolderIcon, plusBlock} from "../assets/img";

const SimpleTree = ({root}) => {
    const [isOpenedFolder, setOpenedFolder] = useState(false);
    const openHandler = () => {
        setOpenedFolder(!isOpenedFolder);
    }

    const drawOne = (elem) => {
        return elem.children?.map(child => <Child key={child.id} child={child} drawOne={drawOne}/>)
    }
    const drawSimpleTree = () => {
        return (
            <ul>
                <div onClick={openHandler} className='li_wrapper'>
                    <div className='plus_minus__wrapper'>
                        {isOpenedFolder ? plusBlock() : minusBlock()}
                    </div>
                    {isOpenedFolder ? closedFolderIcon() : openedFolderIcon()}
                    <li className='item'>{root.name}</li>
                </div>
                <ul style={{display: !isOpenedFolder ? 'block' : 'none'}}>
                    {drawOne(root)}
                </ul>
            </ul>
        )
    }

    return (
        <div>
            <div className="tree__header">
                <span>Simple Tree</span>
            </div>
            {drawSimpleTree()}
        </div>
    );
};

export default SimpleTree;