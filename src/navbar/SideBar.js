/**
 * @Description:
 * @author Haoyu Huang
 * @date 2023/4/25
*/

import React, {Component} from 'react';

function SideBar({backgroundColor, position}) {
    console.log(position)
    return (
        <div>
            <ul style={{background: backgroundColor, width: '200px'}}>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
                <li>111</li>
            </ul>
        </div>
    )
}

SideBar.defaultProps = {
    
}

export default SideBar;