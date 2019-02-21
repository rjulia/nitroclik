import React from 'react';
import { createBrowserHistory } from 'history'
import { Router , Route, Switch } from 'react-router';
import { Header, Home, Footer,  AboutUs, Services, Blog, BlogDetail, ContactUS, NotFound } from "../Scenes/index.scenes";
import ReactGA from 'react-ga';

ReactGA.initialize('UA-20771746-1');
ReactGA.pageview('/');
      
const history = createBrowserHistory({
  basename: '/'
});
history.listen(location => {
  // history.push('/super/url');
  console.log(location)
  ReactGA.pageview(location.pathname)

});
const AppRouter = () => (
  <Router history={history}>
    <div className='container-fluid'>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutus" component={AboutUs} />
            <Route path="/services" component={Services} />
            <Route path="/blog/:Id" component={BlogDetail} />
            <Route path="/blog" component={Blog} />
            <Route path="/contactus" component={ContactUS} />                
            <Route component={NotFound} />
        </Switch>
        <Footer/>
    </div>
  </Router>
)


export default AppRouter;