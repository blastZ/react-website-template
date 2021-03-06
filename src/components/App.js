import React, { Component } from 'react';
import '../css/w3.css';
import TopBar from './TopBar';
import Recruitment from './Recruitment';
import Home from './Home';
import About from './About';
import SegmentBar from './SegmentBar';
import Product from './Product';
import Contact from './Contact';
import DescriptionBar from './DescriptionBar';
import BottomBar from './BottomBar';
import { Route } from 'react-router-dom';
import En from '../languages/en.json';
import Zh_cn from '../languages/zh_cn.json';
import VTChoose from './VTChoose';
import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
`;

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
            <Container>
                <Route exact path='/' render={() => (
                    <Container>
                        <TopBar onChangeLanguage={this.changeLanguage} content={content.toolBar} mode="scroll-mode"/>
                        <Home content={content.home}/>
                        <About/>
                        <SegmentBar bgimg="bgimg-2" text="核心技术展示"/>
                        <Product/>
                        <BottomBar/>
                    </Container>
                )}/>
                <Route exact path="/video" render={() => (
                    <Container>
                        <TopBar onChangeLanguage={this.changeLanguage} content={content.toolBar} mode="normal-mode"/>
                        <VTChoose/>
                    </Container>
                )}/>
                <Route exact path="/contact" render={() => (
                    <div className="bgimg-3 w3-text-white" style={{paddingTop: '10px'}}>
                        <TopBar onChangeLanguage={this.changeLanguage} content={content.toolBar} mode="scroll-mode"/>
                        <div style={{marginTop: '45px'}}></div>
                        <Contact content={content.contact}/>
                        <BottomBar/>
                    </div>
                )}/>
                <Route exact path="/recruitment" render={() => (
                    <Container>
                        <TopBar onChangeLanguage={this.changeLanguage} content={content.toolBar} mode="scroll-mode"/>
                        <Recruitment/>
                        <BottomBar/>
                    </Container>
                )}/>
            </Container>
        );
    }
}

export default App;
