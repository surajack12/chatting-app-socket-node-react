import React from 'react';

import './Message.css';
import ReactEmoji from 'react-emoji';
const Messages =({message:{user,text}, name}) => {
        let isSentByCurrentUser = false;
        const trinmmedName = name.trim().toLowerCase();
        if(user === trinmmedName){
            isSentByCurrentUser = true;
        }
        return(
            isSentByCurrentUser
            ? 
            (
            <div className="messageContainer justifyEnd">
                <p className="sentText pr-10">{trinmmedName}</p>
                <div className="messageBox backgroundBlue">
                    <p className="messgeText colorWhite">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
            )
            :(
            <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundLight">
                        <p className="messgeText colorDark">{ReactEmoji.emojify(text)}</p>
                    </div>
                    <p className="sentText pl-10">{user}</p>

                </div>
            )
        )
}

export default Messages;
