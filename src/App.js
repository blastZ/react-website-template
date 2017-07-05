import React, { Component } from 'react'
import './css/App.css'
import TopBar from './TopBar.js'
import Home from './Home.js'
import About from './About.js'
import SegmentBar from './SegmentBar.js'
import Product from './Product.js'
import Contact from './Contact.js'
import DescriptionBar from './DescriptionBar.js'
import BottomBar from './BottomBar.js'
import Demo from './demo/Demo.js'
import { Route } from 'react-router-dom'
import './css/w3.css'

class App extends Component {
    render() {
        return (
            <div className="full-height">
                <Route exact path='/' render={() => (
                    <div className="full-height">
                        <TopBar mode="scroll-mode"/>
                        <Home/>
                        <About/>
                        <DescriptionBar/>
                        <SegmentBar bgimg="bgimg-2" text="PRODUCT"/>
                        <Product/>
                        <SegmentBar bgimg="bgimg-3" text="CONTACT"/>
                        <Contact/>
                        <BottomBar/>
                    </div>
                )}/>
                <Route exact path='/demo' render={() => (
                    <div className="full-height">
                        <TopBar mode="normal-mode"/>
                        <Demo/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default App;
