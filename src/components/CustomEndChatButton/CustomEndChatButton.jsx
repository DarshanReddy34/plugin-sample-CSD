import React from 'react';

const onButtonClick = () => {
    alert('chat is end, please rate your feedback')
}

const CustomEndChatButton = (props) => (
    <button type="button" onClick={onButtonClick}>Custom End</button>
);

export default CustomEndChatButton;