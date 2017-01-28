// Libs
import React, { PropTypes } from 'react';
import Icon from '../IconsSVG';

// Style
import styles from './style.scss';

import { FlatButton } from '../Buttons';

const Header = React.createClass({
  displayName: 'Header',

  propTypes: {
    brandName : PropTypes.string.isRequired
  },

  getDefaultProps() {
    return {
      brandName : ''
    };
  },
  
  getInitialState() {
    return { sidebarOpen: false };
  },

  render() {
    const rippleOn = true;

    return (
      <header className={ styles['header'] }>

        <h1 className={ styles['brand'] }>
          <a className={ styles['logo'] }>
            <Icon glyph="icon-catho-logo" width={ 100 } height={ 45 }  />
            <span className={ styles['text'] }>{ this.props.brandName }</span>
          </a>
        </h1>

        <div className={ styles['settings'] }>
          <FlatButton color="default" ripple={ rippleOn } title={ 'Login' }>{ 'Login' }</FlatButton>
        </div>

      </header>
    );
  }
});

export default Header;
