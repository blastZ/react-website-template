import React, {Component} from 'react'

class BottomBar extends Component {
    render() {
        return (
            <div className="w3-container w3-padding-32 w3-center" style={{background: '#151515', color: '#acacac'}}>
                <div>
                    ©2016-2017 Codvision. All Rights Reserved. 杭州码全信息科技有限公司<br/>
                    <img src={require("../imgs/record.png")}/><a className="a-hover" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=33011802000395"> 浙公网安备33011802000395号 | 浙ICP备15031759号</a>
                </div>
            </div>
        )
    }
}

export default BottomBar
