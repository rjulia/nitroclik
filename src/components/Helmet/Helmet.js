import React, { Fragment, Component } from 'react';
import Helmet from 'react-helmet';

const canonical = window.location.href;  // this don't work, says ReferenceError: window is not defined

const Layout = (WrappedComponnet, props) => {
  return class Layout extends Component {
    render() {
      console.log(props)
      return (
        <Fragment>

          <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.content} />
            <link rel="canonical" href={canonical} />
          </Helmet>
          <WrappedComponnet />

        </Fragment>
      )
    }
  }
}

export default Layout
