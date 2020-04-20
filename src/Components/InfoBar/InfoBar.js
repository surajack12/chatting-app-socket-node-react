import React from 'react';
import onIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import './InfoBar.css';


const InfoBar = ({room}) => (
<div className="infoBar" >
        <div className="leftInnerContainer">
            <img  className="onlineIcon" src={onIcon} alt="User is online" />
            <h3>{room}</h3>
        </div>
 
        <div className="rightInnerContainer">
            <a href="/"><img src={closeIcon} alt="close"/></a>
        </div>
        
    </div>


)
export default InfoBar;