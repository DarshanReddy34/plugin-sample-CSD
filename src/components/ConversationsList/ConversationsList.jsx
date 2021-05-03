import { flexStoreEnhancer } from '@twilio/flex-ui';
import React from 'react';

import ConversationItem from '../ConversationItem/ConversationItem';

const ConversationsList = (props) => {

    const styles = {
        content: {
            display: 'flex',
            flexDirection: 'column',
            flex: '1'
        }
    };

    const { conversations } = props;

    return (
        <div style={styles.content}>
            {conversations.map(conversation => (
                <ConversationItem key={conversation.sid} conversation={conversation}  />
            ))}
        </div>
    )
}

export default ConversationsList;