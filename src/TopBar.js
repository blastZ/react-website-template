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
        return (
            <div className="w3-top">
                <div className={`${this.props.mode === 'scroll-mode' ? 'w3-bar w3-text-white' : 'w3-bar w3-white w3-card'}`} id="navBar">
                    <a className="w3-bar-item w3-hide-medium w3-hide-large w3-button w3-right" onClick={this.toggleNavBar}><i className="fa fa-bars"></i></a>
                    <Link to="/" className="w3-bar-item w3-button w3-hover-light-grey"><i className="fa fa-home" aria-hidden="true"></i> 主页</Link>
                    <Link to="/demo" className="w3-bar-item w3-button w3-hover-light-grey w3-hide-small"><i className="fa fa-th" aria-hidden="true"></i> 案例</Link>
                    <a className="w3-bar-item w3-button w3-hover-light-grey w3-hide-small"><i className="fa fa-user" aria-hidden="true"></i> 招聘信息</a>
                    <a className="w3-bar-item w3-button w3-hover-light-grey w3-hide-small"><i className="fa fa-envelope" aria-hidden="true"></i> 联系方式</a>
                    <a className="w3-bar-item w3-button w3-right w3-hover-light-grey w3-hide-small"><i className="fa fa-sign-in" aria-hidden="true"></i> 登录</a>
                </div>
                <div className="w3-bar-block w3-hide w3-hide-medium w3-hide-large w3-white w3-card-2" id="small-nav-bar">
                    <a className="w3-bar-item w3-button">登录</a>
                    <Link to="/demo" className="w3-bar-item w3-button">案例</Link>
                    <a className="w3-bar-item w3-button">招聘信息</a>
                    <a className="w3-bar-item w3-button">联系方式</a>
                </div>
            </div>
        )
    }
}

export default TopBar
