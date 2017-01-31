// Libs
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';
import update from 'immutability-helper';

import Toolbar from './Toolbar';
import MessagesList from './MessagesList';
import MessageForm from './MessageForm';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const Chat = React.createClass({
  displayName: 'Chat',

  propTypes: {
    endPoint: PropTypes.string.isRequired
  },

  getInitialState() {
    return {
      data: [],
      loading: true,
      setActionMaximized: true,
      setActionClose: true,
      timer: null
    };
  },

  componentDidMount(){
    const timer = setTimeout( () => {
      this.dataFetch(this.props.endPoint);
    }, 2000 );

    this.setTimer(timer);
  },

  componentWillUnmount(){
    clearTimeout(this.state.timer);
  },

  dataFetch(url) {
    fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      this.setState({
        data: response.talkMessages,
        loading: false,
      });
    }.bind(this))
    .catch(function(error) {
      console.error(error);
    });
  },

  setTimer(timer) {
    this.setState({timer});
  },

  _setNewMessage(obj) {
    let newObj = update(this.state.data, { $push: [obj] });
    this.setState({
      data: newObj
    });
  },

  _setActions(action) {
    console.log('action', action);

    if (action.hasOwnProperty('isMaximized'))
      this.setState({
        setActionMaximized: action.isMaximized,
      });
    else {
      this.setState({
        setActionClose: action.close
      });
    }

  },

  render() {
    const { data, loading, setActionMaximized, setActionClose } = this.state;
    const isMaximized = setActionMaximized;
    const isMinimized = !setActionMaximized;
    const isOpen = setActionClose;
    const isClose = !setActionClose;

    const chatToogleClass = {
      ['set-action-open']: isOpen,
      ['set-action-close']: isClose
    };

    const chatBodyClass = {
      ['set-action-maximize']: isMaximized,
      ['set-action-minimize']: isMinimized
    };


    return (
      <div className={ cx('chat', chatToogleClass) }>
        <Toolbar setActions={ this._setActions } />
        <div className={ cx('chat-body', chatBodyClass) }>
          <MessagesList data={ data } loading={ loading } />
          <MessageForm setNewMessage={ this._setNewMessage } />
        </div>
      </div>
    );
  }
});

export default Chat;