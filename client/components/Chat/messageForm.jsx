// Libs
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const KEYBOARDS = {
  ENTER_KEY: 13,
};

const MessageForm = React.createClass({
  displayName: 'MessageForm',

  propTypes: {
    setNewMessage: PropTypes.func.isRequired
  },

  _objMessage(message) {
    return ({
      id: new Date().getTime(),
      user: {
        id: 9483484,
        perfilId: 1,
        name: 'Nome do Candidato'
      },
      message: {
        time: new Date().getTime(),
        alreadyRead: false,
        message: message
      }
    });
  },

  handlekeypress(event) {
    const component = event.target;
    const value = component.value;
    const message = this._objMessage(value);

    if (event.which === KEYBOARDS.ENTER_KEY && !event.shiftKey) {
      event.preventDefault();
      this.props.setNewMessage(message);
      component.value = '';
    }
  },


  render() {
    return (
      <div className={ cx('chat-message-form') }>
        <textarea
          className={ cx('chat-message-form-input') }
          placeholder={ 'Digite aqui sua mensagem...' }
          rows={ '4' } cols={ '40' } name={ 'chat-message-input' }
          onKeyPress={ this.handlekeypress } />
      </div>
    );
  }
});

export default MessageForm;