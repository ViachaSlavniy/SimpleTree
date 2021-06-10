import React, {useState} from 'react';
import {closedFolderIcon, fileIcon, minusBlock, openedFolderIcon, plusBlock} from "../assets/img";

const Child = ({child, drawOne}) => {
    const [isOpenedFolder, setIsOpenedFolder] = useState(false);
    const openHandler = () => {
        setIsOpenedFolder(!isOpenedFolder);
    }

    const childTypeIsFolder = child.type === 'FOLDER';
    return (
        <div key={child.id}>
            <div onClick={childTypeIsFolder ? openHandler : null}
                 className='li_wrapper'>
                {childTypeIsFolder
                    ? isOpenedFolder
                        ? (
                            <>
                                <div className='plus_minus__wrapper'>
                                    {!isOpenedFolder ? plusBlock() : minusBlock()}
                                </div>
                                {openedFolderIcon()}
                            </>
                        )
                        : (
                            <>
                                <div className='plus_minus__wrapper'>
                                    {!isOpenedFolder ? plusBlock() : minusBlock()}
                                </div>
                                {closedFolderIcon()}
                            </>
                        )
                    : fileIcon()}
                <li className='item'>{child.name}</li>
            </div>
            <ul style={{display: isOpenedFolder ? 'block' : 'none'}}>{drawOne(child)}</ul>
        </div>
    )
};

export default Child;