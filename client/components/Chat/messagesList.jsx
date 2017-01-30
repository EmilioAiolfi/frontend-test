// Libs
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

import CONFIG from '../../config';

// Components
import Message from './Message';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const MessageList = React.createClass({
  displayName: 'MessageList',

  propTypes: {
    data:     PropTypes.array.isRequired,
    loading:  PropTypes.bool.isRequired,
  },

  getDefaultProps() {
    return {
      data: [],
      loading: true,
    };
  },

  componentDidUpdate() {
    this._scrollToBottom();
  },

  _scrollToBottom() {
    const scrollHeight = this.messageList.scrollHeight;
    const height = this.messageList.clientHeight;
    const maxScrollTop = scrollHeight - height;
    this.messageList.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0;
  },

  render() {
    const { loading, data } = this.props;

    let component;
    const isLoading = loading;

    const messages = data.map((item, index, all) => {
      const prevItem = all[index - 1];
      let isContinuousMessage = false;

      if (prevItem) {
        isContinuousMessage = prevItem.user.perfilId === item.user.perfilId;
      }

      return (
        <Message
          key={ index }
          id={ item.id }
          userID={ item.user.id }
          perfilID={ item.user.perfilId }
          userName={ item.user.name }
          companyName={ item.company ? item.company.name : '' }
          text={ item.message.message }
          time={ item.message.time }
          statusReading={ item.message.alreadyRead }
          continuousMessage={ isContinuousMessage }
          userPicture={ `${CONFIG.API.USER_IMAGE_PATH}/${item.user.id}.jpg` } />
      );
    });

    if (isLoading) {
      component = <span>{' Carregando mensagens anteriores'}</span>;
    } else {
      component = messages;
    }

    return (
      <div className={ cx('chat-messages-list') }
        ref={(div) => {
          this.messageList = div;
        }}>
        { component }
      </div>
    );
  }
});

export default MessageList;


