import React, { Component } from 'react'
import './css/w3.css'
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
import En from './languages/en.json'
import Zh_cn from './languages/zh_cn.json'

class App extends Component {
    state = {
        language: 'zh-cn'
    }

    changeLanguage = () => {
        this.state.language === 'zh-cn' ? this.setState({language: 'en'}) : this.setState({language: 'zh-cn'})
    }

    render() {
        const content = this.state.language === 'zh-cn' ? Zh_cn : En
        return (
            <div className="full-height">
                <Route exact path='/' render={() => (
                    <div className="full-height">
                        <TopBar onChangeLanguage={this.changeLanguage} content={content.toolBar} mode="scroll-mode"/>
                        <Home content={content.home}/>
                        <About/>
                        <SegmentBar bgimg="bgimg-2" text="PRODUCT"/>
                        <DescriptionBar/>
                        <Product/>
                        <SegmentBar bgimg="bgimg-3" text="CONTACT"/>
                        <Contact/>
                        <BottomBar/>
                    </div>
                )}/>
                <Route exact path='/demo' render={() => (
                    <div className="full-height">
                        <TopBar onChangeLanguage={this.changeLanguage} content={content.toolBar} mode="normal-mode"/>
                        <Demo/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default App;
