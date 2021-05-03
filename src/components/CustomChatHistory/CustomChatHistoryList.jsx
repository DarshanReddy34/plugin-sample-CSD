import React, { Component } from 'react'
import ConversationsList from '../ConversationsList/ConversationsList'

class CustomChatHistoryList extends React.Component {
    constructor(props) {
      super(props);

      this.converastionsListStyle = {
        display: 'flex',
        felx: '1'
        }
      this.state = {
        conversations: [],
        error: null,
        isLoaded: false,
        items: []
      };
    }
  
    componentDidMount() {
      const requestOptions = {
          method: 'GET',
          mode: 'cors',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Basic QUMzODc1NjFjNGI4OWUzNGY4ZWFjM2NjODVlNzlmOTIyMzpmMmE3MzQzZDYyNDM3NDY1NTQ1ZWU0YWMzNzM0MTRiOA==`, 
          }
      };
      fetch(`https://conversations.twilio.com/v1/Services/IS1593227395fb41cbb594755ec12cbb04/Conversations`, requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
                conversations: result.conversations
            });
            console.log(this.state.conversations);
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      return (
          this.state.conversations.length > 0 ? (
              <ConversationsList style={this.converastionsListStyle} conversations={this.state.conversations} />
          ): (
              <div>Loading....</div>
              )
        );
    }
  }

export default CustomChatHistoryList
