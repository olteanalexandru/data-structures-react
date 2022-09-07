import { Routes, Route, Outlet, Link } from "react-router-dom";

export function Footer() {
    return (
  
      
  
  <div className="container text-center bg-grey border-colorat" style={{paddingBottom:" 4rem"}}>
<nav id="navbar" className="navbar">
       
   
         <Link to="/">Home</Link>
         - -
         <Link to="/Queue">Queue</Link>
         - -
         <Link to="/Stack">Stack</Link>
         - -
         <Link to="/P-Queue">P-Queue</Link>
         - -
         <Link to="/LinkedList">LinkedList</Link>
         - -
         <Link to="/Hash">Hash</Link>
         - -
         <Link to="/Tree">Tree</Link>
         - -
         <Link to="/Graph">Graph</Link>
     
       <i className="bi bi-list mobile-nav-toggle"></i>
     </nav>

    <div className="row text-center">
     
  </div>
  </div>
  
  
  )
  }