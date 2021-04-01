import React from 'react';
import './App.css';
import Banner from './components/Banner';
import NavBar from './components/NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Trending from './components/Trending';
import MovieDetails from './components/MovieDetails';
import endpoints from './endpoints';
import TopRated from './components/TopRated';
import Action from './components/Action';
import Comedy from './components/Comedy';
import Romance from './components/Romance';
import Series from './components/Series';


function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path='/'>
            <NavBar />
            <Banner />
            <Trending fetchUrl={endpoints.fetchTrending}/>
            <TopRated fetchUrl={endpoints.fetchTopRated}/>
            <Action fetchUrl={endpoints.fetchAction}/>
            <Comedy fetchUrl={endpoints.fetchComedy}/>
            <Romance fetchUrl={endpoints.fetchRomance}/>
            <Series fetchUrl={endpoints.fetchSeries}/>
          </Route>
          <Route path={`${endpoints.fetchTrending}/:id`}>
            <MovieDetails singleUrl={endpoints.fetchTrending}/>
          </Route>
          <Route path={`${endpoints.fetchTopRated}/:id`}>
            <MovieDetails singleUrl={endpoints.fetchTopRated}/>
          </Route>
          <Route path={`${endpoints.fetchAction}/:id`}>
            <MovieDetails singleUrl={endpoints.fetchAction}/>
          </Route>
          <Route path={`${endpoints.fetchComedy}/:id`}>
            <MovieDetails singleUrl={endpoints.fetchComedy}/>
          </Route>
          <Route path={`${endpoints.fetchRomance}/:id`}>
            <MovieDetails singleUrl={endpoints.fetchRomance}/>
          </Route>
          <Route path={`${endpoints.fetchSeries}/:id`}>
            <MovieDetails singleUrl={endpoints.fetchSeries}/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
