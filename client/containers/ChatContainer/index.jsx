// Libs
import React from 'react';

import Chat from '../../components/Chat';

const ChatContainer = React.createClass({
  displayName: 'ChatContainer',

  render() {
    return (
      <div>
        <h1>{ 'Chat Container' } </h1>
        <Chat />
      </div>
    );
  }
});

export default ChatContainer;
