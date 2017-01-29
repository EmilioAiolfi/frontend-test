// Libs
import React from 'react';
import classnames from 'classnames/bind';

import Icon from '../IconsSVG';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

const Toolbar = React.createClass({
  displayName: 'Toolbar',

  render() {
    const toolBarIconColor = '#80AED2';
    return (
      <div className={ cx('chat-toolbar') }>
        <span className={ cx('chat-toolbar-title') }>{ 'Vaga: desenvolvedor Front-end' }</span>
        <div className={ cx('chat-toolbar-actions') }>
          <Icon glyph="icon-close" className={ cx('chat-toolbar-icon') } width={ 15 } height={ 20 } fill={ toolBarIconColor } />
          <Icon glyph="icon-minimize" className={ cx('chat-toolbar-icon') } width={ 15 } height={ 20 } fill={ toolBarIconColor } />
          <Icon glyph="icon-restore" className={ cx('chat-toolbar-icon') } width={ 15 } height={ 20 } fill={ toolBarIconColor } />
        </div>
      </div>
    );
  }
});

export default Toolbar;