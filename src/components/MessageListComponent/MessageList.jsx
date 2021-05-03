import React, { Component } from 'react';

class MessageList extends Component {

    constructor(props) {
        super(props);
        this.styles = {
            messageItemView: {
                padding: '1.5rem',
                width: '100%',
                height: 'inherit',
                overflowY: 'scroll'
            },
            authorStyle: {
                name: {
                    fontSize: '10px',
                    fontWeight: 'bold'
                },
                time: {
                    paddingLeft: '0.5rem',
                    float: 'right',
                    fontSize: '10px',
                    position: 'relative',
                    top: '2px'
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
            <div key={index}>{msg}</div>
        ))}
        </div>
        );
    }
}

export default MessageList;