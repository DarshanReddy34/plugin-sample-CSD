import React from 'react';

const CustomChatHistoryList = (props) => {
    const msgResponse = [
        {
            name: 'Anonymous',
            time: '9.30 AM',
            isFromMe: false,
            source: {
                state: {
                    body: 'Hello',
                    index: 0,
                    type: 'text'
                }
            },
            groupWithNext: false,
            groupWithPrevious: false,
            index: 0
        },
        {
            name: 'Mahesh Mohan',
            time: '9.30 AM',
            isFromMe: true,
            source: {
              state: {
                body: 'Hi there, How can I help you',
                index: 0,
                type: 'text'
              }
            },
            groupWithNext: false,
            groupWithPrevious: false,
            index: 0
        },
        {
            name: 'Anonymous',
            time: '9.31 AM',
            isFromMe: false,
            source: {
              state: {
                body: 'I need assistamce with implementation od twilio-flex web chat',
                index: 0,
                type: 'text'
              }
            },
            groupWithNext: false,
            groupWithPrevious: false,
            index: 0
        },
        {
            name: 'Mahesh Mohan',
            time: '9.31 AM',
            isFromMe: true,
            source: {
              state: {
                body: 'Sure, let me see how can I help you. Here is a documnet to integrate your webchat. Please go through it',
                index: 0,
                type: 'text'
              }
            },
            groupWithNext: false,
            groupWithPrevious: false,
            index: 0
        },
        {
            name: 'Anonymous',
            time: '9.32 AM',
            isFromMe: false,
            source: {
              state: {
                body: 'Okay',
                index: 0,
                type: 'text'
              }
            },
            groupWithNext: false,
            groupWithPrevious: false,
            index: 0
        },
        {
            name: 'Mahesh Mohan',
            time: '9.34 AM',
            isFromMe: true,
            source: {
              state: {
                body: 'Let me know if there you are unable to integrate by following the docs, I am be happy to help',
                index: 0,
                type: 'text'
              }
            },
            groupWithNext: false,
            groupWithPrevious: false,
            index: 0
        },
        {
            name: 'Anonymous',
            time: '9.35 AM',
            isFromMe: false,
            source: {
              state: {
                body: 'Sure, Thanks',
                index: 0,
                type: 'text'
              }
            },
            groupWithNext: false,
            groupWithPrevious: false,
            index: 0
        }
    ];

    const styles = {
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
        },
    };

    return (
        <div style={styles.messageItemView}>
        {msgResponse.map((msg, index) => (
            <div style={msg.isFromMe ? styles.messageFromMe.messageItem : styles.messageFromOthers.messageItem}>
                <div style={msg.isFromMe ? styles.messageFromMe.messageText : styles.messageFromOthers.messageText}>
                    <p>
                        <span style={styles.authorStyle.name}>{msg.name}</span>
                        <span style={styles.authorStyle.time}>{msg.time}</span>
                    </p>
                    <p>{msg.source.state.body}</p>
                </div>
            </div>
        ))}
        </div>
    );
}

export default CustomChatHistoryList;