// Libs
import React, { PropTypes } from 'react';
import classnames from 'classnames/bind';

// Global style
import './global-catho.scss';

// Styles
import styles from './style.scss';
let cx = classnames.bind(styles);

// Components
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Layout = React.createClass({
  displayName: 'Layout',
  
  propTypes: {
    children: PropTypes.node
  },
  
  render() {
    return (
      <div className={ cx('app', 'fixed') }>
        <div className={ cx('app-container') }>
          <div className={ cx('app-header') }>
            <div className={ cx('app-header-wrapper') }>
              <Header brandName={ 'Catho' } />
            </div>
          </div>

          <div className={ cx('app-content') }>
            <div className={ cx('app-content-wrapper') }>
              <main className={ styles.main }>
                { this.props.children }
              </main>
            </div>
          </div>
        </div>
        <div className={ cx('app-footer') }>
          <div className={ cx('app-footer-wrapper') }>
            <Footer />
          </div>
        </div>
        
      </div>
    );
  }
});

export default Layout;
