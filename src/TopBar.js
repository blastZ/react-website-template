import React, { Component } from 'react'
import './css/font-awesome.min.css'
import { Link } from 'react-router-dom'

class TopBar extends Component {
    state = {
        showWhiteTopBar: false,
        showSmallNavBar: false
    }

    scrollListener = () => {
        if(document.body.scrollTop >= 400) {
            this.setState({showWhiteTopBar: true});
        } else {
            this.setState({showWhiteTopBar: false});
        }
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.scrollListener);
    }

    componentDidMount() {
        document.addEventListener('scroll', this.scrollListener);
    }

    toggleNavBar = () => {
        this.setState({showSmallNavBar: !this.state.showSmallNavBar});
    }

    moveToTop = () => {
        document.body.scrollTop = 0;
    }

    render() {
        const content = this.props.content
        return (
            <div className="w3-top" style={{maxWidth: '100vw'}}>
                <div className={`
                        ${this.props.mode === 'scroll-mode' ?
                            (this.state.showWhiteTopBar ? 'w3-bar w3-white w3-card w3-animate-top' : 'w3-bar w3-text-white')
                            : 'w3-bar w3-white w3-card w3-animate-top'}`
                     } id="navBar">
                    <a className="w3-bar-item w3-hide-medium w3-hide-large w3-button w3-right" onClick={this.toggleNavBar}><i className="fa fa-bars"></i></a>
                    <Link onClick={this.moveToTop} to="/" className="w3-bar-item w3-button w3-hover-light-grey"><i className="fa fa-home" aria-hidden="true"></i> {content.home}</Link>
                    <a href="http://demo.codvision.com:16802/demo" className="w3-bar-item w3-button w3-hover-light-grey w3-hide-small"><i className="fa fa-th" aria-hidden="true"></i> {content.demo}</a>
                    <Link onClick={this.moveToTop} to="/recruitment" className="w3-bar-item w3-button w3-hover-light-grey w3-hide-small"><i className="fa fa-user" aria-hidden="true"></i> {content.recruitment}</Link>
                    <Link onClick={this.moveToTop} to="contact" className="w3-bar-item w3-button w3-hover-light-grey w3-hide-small"><i className="fa fa-envelope" aria-hidden="true"></i> {content.contact}</Link>
                    <a href="http://demo.codvision.com:18038" className="w3-bar-item w3-button w3-right w3-hover-light-grey w3-hide-small"><i className="fa fa-sign-in" aria-hidden="true"></i> {content.login}</a>
                    <a onClick={this.props.onChangeLanguage} className="w3-bar-item w3-button w3-right w3-hover-light-grey w3-hide-small"><i className="fa fa-globe" aria-hidden="true"></i> {content.language}</a>
                </div>
                <div className={`w3-bar-block w3-hide w3-hide-medium w3-hide-large w3-white w3-card-2" id="small-nav-bar ${this.state.showSmallNavBar ? 'w3-show' : null}`}>
                    {/*<a onClick={this.props.onChangeLanguage} className="w3-bar-item w3-button"><i className="fa fa-globe" aria-hidden="true"></i> {content.language}</a>*/}
                    <a href="http://demo.codvision.com:16802/demo" className="w3-bar-item w3-button">{content.demo}</a>
                    <Link to="/recruitment" className="w3-bar-item w3-button">{content.recruitment}</Link>
                    <Link to="/contact" className="w3-bar-item w3-button">{content.contact}</Link>
                </div>
            </div>
        )
    }
}

export default TopBar
