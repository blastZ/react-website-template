import React, {Component} from 'react'
import $ from 'jquery'

class BottomBar extends Component {
    render() {
        return (
            <div className="w3-black w3-opacity-min w3-hover-opacity-off w3-container w3-center w3-padding-64">
                <button onClick={() => $(document).scrollTop(0)} className="w3-button w3-round-medium w3-light-gray">To the top</button>
                <div className="w3-xlarge w3-margin-top w3-wide">
                    <i className="fa fa-facebook-official w3-hover-opacity"></i>
                    <i className="fa fa-instagram w3-hover-opacity"></i>
                    <i className="fa fa-snapchat w3-hover-opacity"></i>
                    <i className="fa fa-pinterest-p w3-hover-opacity"></i>
                    <i className="fa fa-twitter w3-hover-opacity"></i>
                    <i className="fa fa-linkedin w3-hover-opacity"></i>
                </div>
                <div>
                    <p>浙ICP备15031759号</p>
                    <img src={require("./imgs/record.png")}/><a className="a-hover" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011802000395"> 浙公网安备33011802000395号</a>
                </div>
            </div>
        )
    }
}

export default BottomBar
