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
          userName={ item.user.name }
          userPicture={ `${CONFIG.API.USER_IMAGE_PATH}/${item.user.id}.jpg` }
          perfilID={ item.user.perfilId }
          companyName={ item.company ? item.company.name : '' }
          statusReading={ item.message.alreadyRead }
          text={ item.message.message }
          time={ item.message.time }
          continuousMessage={ isContinuousMessage } />
      );
    });
    
    if (isLoading) {
      component = <span>{' Carregando mensagens anteriores'}</span>;
    } else {
      component = messages;
    }
    
    return (
      <div className={ cx('chat-messages-list') }>
        { component }
      </div>
    );
  }
});

export default MessageList;


