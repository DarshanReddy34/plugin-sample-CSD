import React, { Component } from 'react';
import Moment from 'moment';

import MessageList from '../MessageListComponent/MessageList';

import './ConversationItem.scss';

class ConversationItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            collapsed: true
          };
    }

    // fetchMessages = () => {
    //     const requestOptions = {
    //         method: 'GET',
    //         mode: 'cors',
    //         headers: {
    //           'Content-Type': 'application/json',
    //           Authorization: `Basic QUMzODc1NjFjNGI4OWUzNGY4ZWFjM2NjODVlNzlmOTIyMzpmMmE3MzQzZDYyNDM3NDY1NTQ1ZWU0YWMzNzM0MTRiOA==`, 
    //         }
    //     };
    //     fetch(this.props.conversation.links.messages, requestOptions)
    //     .then(res => res.json())
    //     .then(
    //       (result) => {
    //           this.setState({
    //               messages: result.messages
    //           });
    //           console.log(this.state.messages);
    //       },
    //       // Note: it's important to handle errors here
    //       // instead of a catch() block so that we don't swallow
    //       // exceptions from actual bugs in components.
    //       (error) => {
    //         this.setState({
    //           isLoaded: true,
    //           error
    //         });
    //       }
    //     )
    // }

    toggleMessageInfo = () => {
        // this.fetchMessages();
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        console.log(this.props);
        return (
            <div className="conversation">
                <div className="header" onClick={(e) => this.toggleMessageInfo()}>
                    <div className={`title ${(this.state.collapsed ? 'collapsed' : 'expanded')}`}>
                        {this.props.conversation.friendly_name}
                    </div>
                    <div className="msgCount">
                        {Moment(this.props.conversation.date_created).format('DD-MM-YYYY')}
                    </div>
                </div>
                {!this.state.collapsed && (
                    (this.state.messages.length > 0 ? (
                        <MessageList key={this.props.conversation.sid} messages={this.state.messages}/>
                    ) : 'Loading...')
                )}
            </div>
        )
    }
}

export default ConversationItem;