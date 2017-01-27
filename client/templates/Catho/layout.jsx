// Libs
import React, { PropTypes } from 'react';

const Layout = React.createClass({
  displayName: 'Layout',
  
  propTypes: {
    children: PropTypes.node
  },
  
  render() {
    let childrenWithProps = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {
        addItemToCart: this.addItemToCart
      });
    }.bind(this));
    
    return (
      <div className={'app'}>
        <header>
          header
        </header>
        <main>
          {childrenWithProps}
        </main>
      </div>
    );
  }
});

export default Layout;
