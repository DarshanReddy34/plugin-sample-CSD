import React, { Component } from 'react';
import Moment from 'moment';

import MessageList from '../MessageListComponent/MessageList';

import './ConversationItem.scss';
import TwAuthUtil from '../../utils/TwAuthUtil';

class ConversationItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: [],
            collapsed: true
          };
    }

    fetchMessages = () => {
        const requestOptions = {
            method: 'GET',
            mode: 'cors',
            headers: {
              'Content-Type': 'application/json',
              Authorization: TwAuthUtil.getAuthorizationKeyword(), 
            }
        };
        fetch(this.props.conversation.links.messages, requestOptions)
        .then(res => res.json())
        .then(
          (result) => {
              this.setState({
                  messages: result.messages
              });
          },
          (error) => {
            // DO something
          }
        )
    }

    toggleMessageInfo = () => {
        this.fetchMessages();
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
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