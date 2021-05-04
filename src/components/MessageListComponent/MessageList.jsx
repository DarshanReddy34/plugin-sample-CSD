import React, { Component } from 'react';
import Moment from 'moment';

class MessageList extends Component {

    constructor(props) {
        super(props);
        this.styles = {
            messageItemView: {
                padding: '1.5rem',
            },
            authorStyle: {
                name: {
                    fontSize: '10px',
                    fontWeight: 'bold'
                },
                time: {
                    paddingLeft: '0.5rem',
                    float: 'right',
                    fontSize: '10px'
                }
            },
            messageFromOthers: {
                messageItem: {
                    display: 'flex',
                    marginBottom: '1rem',
                    flexDirection: 'row',
                },
                messageText: {
                    padding: '0.5rem 1rem',
                    background: 'rgb(236, 237, 241)',
                    borderRadius: '4px',
                    maxWidth: '80%'
                }
            },
            messageFromMe: {
                messageItem: {
                    display: 'flex',
                    marginBottom: '1rem',
                    flexDirection: 'row-reverse',
                    color: 'white'
                },
                messageText: {
                    padding: '0.5rem 1rem',
                    background: 'rgb(5, 125, 158)',
                    borderRadius: '4px',
                    maxWidth: '80%'
                }
            }
        };
    }

    render() {
        return (
            <div style={this.styles.messageItemView}>
                {this.props.messages.map((msg, index) => (
                    <div key={index} style={msg.isFromMe ? this.styles.messageFromMe.messageItem : this.styles.messageFromOthers.messageItem}>
                        <div style={msg.isFromMe ? this.styles.messageFromMe.messageText : this.styles.messageFromOthers.messageText}>
                            <p style={{marginBottom: '0.5rem'}}>
                                <span style={this.styles.authorStyle.name}>{msg.author}</span>
                                {/* <span style={this.styles.authorStyle.time}>{Moment(msg.date_created).format('DD-MM-YYYY')}</span> */}
                            </p>
                            <p style={{marginBottom: '0.5rem'}}>{msg.body}</p>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default MessageList;