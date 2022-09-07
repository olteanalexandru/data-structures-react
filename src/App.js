import logo from './logo.svg';
import './App.css';
import *  as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import {Graph} from './Pagini/Graph';
import {Stack} from './Pagini/Stack';
import {PQueue} from './Pagini/P-Queue';
import {LinkedList} from './Pagini/Linked-List';
import {Queue} from './Pagini/Queue';
import {Hash} from './Pagini/Hash';
import {Tree} from './Pagini/Tree';
import {Footer} from './Footer';

export default function App() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <Routes>
      <Route path="/" element={<Layout />}>
          <Route path="Queue" element={<Queue />} />
          <Route path="Stack" element={<Stack />} />
          <Route path="P-Queue" element={<PQueue />} />
          <Route path="LinkedList" element={<LinkedList />} />
          <Route path="Hash" element={<Hash />} />
          <Route path="Tree" element={<Tree />} />
          <Route path="Graph" element={<Graph />} />
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

export function Layout() {
  return (
    <div style={{'backgroundColor': 'ghostwhite'}}>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}



          
          <header id="header">
 

    <div className="container d-flex align-items-center justify-content-between">
   
      <h1 className="logo"><Link to="/">Home</Link></h1>

      <nav id="navbar" className="navbar">
       
        <ul>
          <li className="nav-link scrollto active" ><Link to="/">Home</Link></li>
          <li className="nav-link scrollto" ><Link to="/Queue">Queue</Link></li>
          <li className="nav-link scrollto"><Link to="/Stack">Stack</Link></li>
          <li className="nav-link scrollto"><Link to="/P-Queue">P-Queue</Link></li>
          <li className="nav-link scrollto" ><Link to="/LinkedList">LinkedList</Link></li>
          <li className="nav-link scrollto"><Link to="/Hash">Hash</Link></li>
          <li className="nav-link scrollto"><Link to="/Tree">Tree</Link></li>
          <li className="nav-link scrollto"><Link to="/Graph">Graph</Link></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>

      <hr />





      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />




 <Footer />



     
    </div>
  );
}




function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
