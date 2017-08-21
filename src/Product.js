import React, {Component} from 'react'

class Product extends Component {
    state = {
    }
    render() {
        return (
            <div className="">
                <div className="w3-content-big flex-box" id="portfolio" style={{flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div className="w3-center wb-hover-card">
                        <h4 className="w3-center">基于应用场景的ISP成像处理技术</h4>
                        <img className="w3-image w3-card" src={require("./imgs/hand1.jpg")}/>
                        <img className="w3-image w3-card" src={require("./imgs/hand2.jpg")}/>
                        <p className="w3-center">通过AE/AWB/AF等3A处理技术，满足高帧率、低照度、多光源等各种应用场景成像需求。</p>
                    </div>
                    <div className="w3-center wb-hover-card">
                        <h4 className="w3-center">基于视觉感知的图像视频压缩传输技术</h4>
                        <img className="w3-image w3-card" src={require("./imgs/lena.jpg")}/>
                        <img className="w3-image w3-card" src={require("./imgs/lena_out.jpg")}/>
                        <p className="w3-center">结合人类视觉感知系统特性，调整编码及差错控制策略，实现图像视频高效压缩与传输。</p>
                    </div>
                    <div className="w3-center wb-hover-card">
                        <h4 className="w3-center">基于深度学习的图像视频分析技术</h4>
                        <img className="w3-image w3-card" src={require("./imgs/fridge.jpg")}/>
                        <img className="w3-image w3-card" src={require("./imgs/road.jpg")}/>
                        <p className="w3-center">优化深度学习框架与模型，实现高精度高性能的目标检测、识别、分割等功能。</p>
                    </div>
                    <div className="w3-center wb-hover-card">
                        <h4 className="w3-center">基于多源数据融合的图形图像快速渲染技术</h4>
                        <img className="w3-image w3-card" src={require("./imgs/map.jpg")}/>
                        <p className="w3-center">融合视频、图像、二维地图、全景图像等多源数据，提高渲染效率，实现数据实时可视化呈现。</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
