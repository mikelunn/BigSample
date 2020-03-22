import React, { Suspense } from 'react';
import { Route, Router, Switch } from 'react-router';
import Loading from './Loading';

export const RouterOutlet = () => {
    
    const Home = React.lazy(() => import('./Home'));
    const About = React.lazy(() => import('./About'));
    const Contact = React.lazy(() => import('./Contact'));
    const NotFound = React.lazy(() => import('./NotFound'));
    return (
        <>
            <Suspense fallback={<Loading />}>
            <Switch>
            <Route exact path="/"  component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path='*' component={NotFound} />
            </Switch>
            </Suspense>
        </>

    );
}