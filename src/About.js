import React from 'react'
import logo from './imgs/logo.jpg'

const About = (props) => (
    <div className="w3-content w3-container w3-padding-64 w3-margin-top" id="about">
        <h2 className="w3-center">基于深度学习的图像与视频识别技术</h2>
        <p className="w3-center w3-padding-24"><em>码全科技为智慧城市，智能安防，智能家居，智慧金融等行业提供人脸，行人，车辆，食材，
            标志等多种检测与识别技术，并以API,嵌入式模块,系统等方式提供服务。</em></p>
        <div className="w3-row">
            <div className="w3-col m6 w3-center">
                <p><i className="fa fa-user" aria-hidden="true"></i><b>&nbsp; Codvision 码全科技</b></p>
                <img src={logo} alt="logo" className="w3-round w3-image w3-opacity w3-hover-opacity-off"/>
            </div>
            <div className="w3-col m6" style={{padding: '20px'}}>
                <ul className="w3-ul">
                    <li>
                        <p><b>API</b></p>
                        <p>简单，实用，基于RESTful架构，支持快速构建Python, NodeJS, Java, C#, Go, Ruby, Haskell,R等语言的应用</p>
                    </li>
                    <li>
                        <p><b>模块</b></p>
                        <p>ARM处理器，WIFI接口</p>
                    </li>
                    <li>
                        <p><b>系统</b></p>
                        <p>设备易于管理，系统可扩展</p>
                    </li>
                    <li>
                        <p><b>用户定制</b></p>
                        <p>基于丰富的行业解决方案经验，可为用户定制开发</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default About
