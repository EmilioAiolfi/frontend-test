// Libs
import React from 'react';
import classnames from 'classnames/bind';

import Message from './Message';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const MessageList = React.createClass({
  displayName: 'MessageList',

  render() {
    return (
      <div className={ cx('chat-messages-list') }>
        <Message />
      </div>
    );
  }
});

export default MessageList;