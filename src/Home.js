import React from 'react'
import simple from './imgs/simple.svg'
import reliable from './imgs/reliable.svg'
import scalable from './imgs/scalable.svg'

const Home = (props) => (
    <div className="bgimg-1 w3-display-container" id="home">
        <div className="w3-display-middle w3-text-white w3-center w3-hide-small" style={{top: '35%', whiteSpace: 'nowrap'}}>
            <h1 className="w3-wide">视频图像传输与识别</h1>
            <h4>专为极客和开发者设计</h4>
        </div>
        <div className="w3-hide-large w3-hide-medium w3-display-middle w3-center w3-text-white" style={{top: '35%', whiteSpace: 'nowrap'}}>
            <h3>视频图像传输与识别</h3>
            <p>专为极客和开发者设计</p>
        </div>
        <div className="w3-row w3-center w3-padding-48 w3-hide-small" style={{position: 'absolute', bottom: '0', width: '100%', background: 'rgba(0,0,0,0.4)'}}>
            <div className="w3-third">
                <img src={simple} alt={'simple'}/>
                <p className="w3-text-white">上手简单 仅需几行代码</p>
            </div>
            <div className="w3-third">
                <img src={reliable} alt={'reliable'}/>
                <p className="w3-text-white">实时性交互，鲁棒性强，适合工程应用</p>
            </div>
            <div className="w3-third">
                <img src={scalable} alt={'scalable'}/>
                <p className="w3-text-white">接口丰富，满足更多用户需求</p>
            </div>
        </div>
    </div>
)

export default Home
