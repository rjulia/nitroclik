import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header, Home, Footer,  AboutUs, Services, Blog, BlogDetail, ContactUS, NotFound } from "../scenes/index.scenes";

const AppRouter = () => (
  
  <BrowserRouter>
    <div className='container-fluid'>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/aboutus" component={AboutUs} /> */}
            {/* <Route path="/services" component={Services} />
            <Route path="/Blog" component={Blog} />
            <Route path="/Blog/:Id" component={BlogDetail} />
            <Route path="/contactus" component={ContactUS} />                
            <Route component={NotFound} /> */}
        </Switch>
        <Footer/>
    </div>
  </BrowserRouter>
  
)


export default AppRouter;