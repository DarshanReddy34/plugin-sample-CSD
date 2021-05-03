import React, { useState } from 'react';

import './ConversationItem.scss';

const ConversationItem = (props) => {
    
    const [isCollapsed, setCollapsed] = useState(true);

    const { 
        friendly_name: friendlyName,
        date_created: createdDate,
        messages_count: msgCount
    } = props.conversation;


    const toggleConversation = e => {
        e.preventDefault();
        console.log('collapsing');
        setCollapsed(!isCollapsed);
    }

    return (
        <div className="conversation">
            <div className="header" onClick={toggleConversation}>
                <div className={`title ${ isCollapsed ? 'collapsed' : 'expanded'}`}>
                    {friendlyName}
                </div>
                <div className="msgCount">
                    {msgCount || 0}
                </div>
            </div>
        </div>
    )
}

export default ConversationItem;