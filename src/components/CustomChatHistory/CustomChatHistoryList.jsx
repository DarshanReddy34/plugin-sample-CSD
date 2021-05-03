import React from 'react'
import PropTypes from 'prop-types'
import ConversationsList from '../ConversationsList/ConversationsList'

const CustomChatHistoryList = (props) => {

    const { conversations } = props;

    const converastionsListStyle = {
        display: 'flex',
        felx: '1'
    }
    
    return (
        <ConversationsList style={converastionsListStyle} conversations={conversations} />
    )
}

CustomChatHistoryList.propTypes = {
    conversations: PropTypes.array,
}

export default CustomChatHistoryList
