import React from 'react';
import { createBrowserHistory } from 'history';
import ScrollToTop from './scroolToTop'
import { Router, Route, Switch } from 'react-router';
import { Header, Home, Footer, AboutUs, Services, ContactUS, NotFound, Porfolio } from "../Scenes/index.scenes";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-20771746-1');
ReactGA.pageview('/');

const history = createBrowserHistory({
  basename: '/'
});

history.listen(location => {
  ReactGA.pageview(location.pathname)
});

const AppRouter = () => (
  <Router history={history}>
    <ScrollToTop>
      <div className='container-fluid'>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/porfolio" component={Porfolio} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/aboutus" component={AboutUs} />
          <Route exact path="/contactus" component={ContactUS} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </ScrollToTop>
  </Router>
)


export default AppRouter;