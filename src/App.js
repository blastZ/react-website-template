import React, { Component } from 'react';
import './css/w3.css';
import TopBar from './TopBar';
import Recruitment from './recruitment/Recruitment';
import Home from './Home';
import About from './About';
import SegmentBar from './SegmentBar';
import Product from './Product';
import Contact from './Contact';
import DescriptionBar from './DescriptionBar';
import BottomBar from './BottomBar';
import { Route } from 'react-router-dom';
import En from './languages/en.json';
import Zh_cn from './languages/zh_cn.json';

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
                        <SegmentBar bgimg="bgimg-2" text="案例展示"/>
                        <DescriptionBar/>
                        <Product/>
                        <BottomBar/>
                    </div>
                )}/>
                <Route exact path="/contact" render={() => (
                    <div className="full-height bgimg-3 w3-text-white" style={{paddingTop: '10px'}}>
                        <TopBar onChangeLanguage={this.changeLanguage} content={content.toolBar} mode="scroll-mode"/>
                        <div style={{marginTop: '45px'}}></div>
                        <Contact content={content.contact}/>
                        <BottomBar/>
                    </div>
                )}/>
                <Route exact path="/recruitment" render={() => (
                    <div className="full-height">
                        <TopBar onChangeLanguage={this.changeLanguage} content={content.toolBar} mode="scroll-mode"/>
                        <Recruitment/>
                        <BottomBar/>
                    </div>
                )}/>
            </div>
        );
    }
}

export default App;
