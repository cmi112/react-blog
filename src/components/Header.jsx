import React, { Component } from 'react'
import Home from "./Navbar-items/Home"
import About from "./Navbar-items/About"
import Blog from "../components/Blog"
import Logo from "./Navbar-items/Logo"
import Projects from "./Navbar-items/Projects"



import {BrowserRouter,Link,Route } from "react-router-dom"



export default class Navbar extends Component {
    state={
        page:"home"
    }
    render() {
        return (
            <BrowserRouter>
           
            <div>  
                <ul>
                <Logo/>
                    <li onClick={()=>this.setState({page:"home"})}><Link to="/">Home</Link></li>
                    <li onClick={()=>this.setState({page:"about"})}><Link to="/about">About</Link></li>
                    <li onClick={()=>this.setState({page:"projects"})}><Link to="/projects">Projects</Link></li>
                    <li onClick={()=>this.setState({page:"blog"})}><Link to="/blog">Blog</Link></li>
                </ul>
               <Route exact path="/" component={Home}/>
               <Route path="/about" component={About}/>
               <Route path="/projects" component={Projects}/>
               <Route path="/blog" component={Blog}/>
             
            </div>
          
            </BrowserRouter>
        )
    }
}
