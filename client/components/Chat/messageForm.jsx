// Libs
import React from 'react';
import classnames from 'classnames/bind';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const MessageForm = React.createClass({
  displayName: 'MessageForm',

  render() {
    return (
      <div className={ cx('chat-message-form') }>
        <textarea className={ cx('chat-message-form-input') } rows="4" cols="40" name="chat-message-input" placeholder="Digite aqui sua mensagem..." />
      </div>
    );
  }
});

export default MessageForm;