import React, { Component } from 'react'
import $ from 'jquery'
import './css/font-awesome.min.css'
import { Link } from 'react-router-dom'

class TopBar extends Component {
    componentDidMount() {
        if(this.props.mode === 'scroll-mode') {
            $(document).scroll(function() {
                if($(this).scrollTop() >= 120) {
                    $('#navBar').removeClass("w3-text-white").addClass("w3-white w3-card w3-animate-top");
                }else {
                    $('#navBar').removeClass("w3-white w3-card w3-animate-top").addClass("w3-text-white");
                }
            });
        } else {
            $(document).off('scroll');
        }
    }

    toggleNavBar() {
        const navBar = $('#small-nav-bar');
        const classList = navBar.attr('class').split(' ');
        if(classList.length === 6) {
            navBar.addClass('w3-show');
        }else {
            navBar.removeClass('w3-show');
        }
    }

    render() {
        const content = this.props.content
        return (
            <div className="w3-top">
                <div className={`${this.props.mode === 'scroll-mode' ? 'w3-bar w3-text-white' : 'w3-bar w3-white w3-card'}`} id="navBar">
                    <a className="w3-bar-item w3-hide-medium w3-hide-large w3-button w3-right" onClick={this.toggleNavBar}><i className="fa fa-bars"></i></a>
                    <a href="http://www.codvision.com" className="w3-bar-item w3-button w3-hover-light-grey"><i className="fa fa-home" aria-hidden="true"></i> {content.home}</a>
                    <Link to="/demo" className="w3-bar-item w3-button w3-hover-light-grey w3-hide-small"><i className="fa fa-th" aria-hidden="true"></i> {content.demo}</Link>
                    <a className="w3-bar-item w3-button w3-hover-light-grey w3-hide-small"><i className="fa fa-user" aria-hidden="true"></i> {content.recruitment}</a>
                    <a className="w3-bar-item w3-button w3-hover-light-grey w3-hide-small"><i className="fa fa-envelope" aria-hidden="true"></i> {content.contact}</a>
                    <a className="w3-bar-item w3-button w3-right w3-hover-light-grey w3-hide-small"><i className="fa fa-sign-in" aria-hidden="true"></i> {content.login}</a>
                    <a onClick={this.props.onChangeLanguage} className="w3-bar-item w3-button w3-right w3-hover-light-grey w3-hide-small"><i className="fa fa-globe" aria-hidden="true"></i> {content.language}</a>
                </div>
                <div className="w3-bar-block w3-hide w3-hide-medium w3-hide-large w3-white w3-card-2" id="small-nav-bar">
                    <a className="w3-bar-item w3-button">{content.login}</a>
                    <a href="http://demo.codvision.com:16802/demo" className="w3-bar-item w3-button">{content.demo}</a>
                    <a className="w3-bar-item w3-button">{content.recruitment}</a>
                    <a className="w3-bar-item w3-button">{content.contact}</a>
                </div>
            </div>
        )
    }
}

export default TopBar
