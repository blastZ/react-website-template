import React, {Component} from 'react'

class Product extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="">
                <div className="w3-content-big flex-box flex-column" id="portfolio" style={{flexWrap: 'wrap', justifyContent: 'center'}}>
                    <div id="pro_1" className="w3-center wb-hover-card">
                        <h4 className="w3-center">采集 —— 基于应用场景的ISP成像处理技术</h4>
                        <div className="flex-box" style={{justifyContent: 'center'}}>
                            <div className="flex-box flex-column" style={{justifyContent: 'center', maxWidth: '50%', alignItems: 'center'}}>
                                <img className="w3-image w3-card" src={require("../imgs/hand1.jpg")}/>
                                <p>(a)</p>
                            </div>
                            <div className="flex-box flex-column" style={{justifyContent: 'center', maxWidth: '50%', alignItems: 'center'}}>
                                <img className="w3-image w3-card" src={require("../imgs/hand2.jpg")}/>
                                <p>(b)</p>
                            </div>
                        </div>
                        <p className="w3-center">通过AE/AWB/AF等3A ISP技术，以及降噪、增强等预处理技术，满足高帧率、低照度、多光源等各种应用场景成像需求。</p>
                    </div>
                    <div id="pro_2" className="w3-center wb-hover-card">
                        <h4 className="w3-center">传输 —— 基于视觉感知的图像视频压缩传输技术</h4>
                        <div className="flex-box" style={{justifyContent: 'center'}}>
                            <div className="flex-box flex-column" style={{justifyContent: 'center', maxWidth: '50%', alignItems: 'center'}}>
                                <img className="w3-image w3-card" src={require("../imgs/lena.jpg")}/>
                                <p>(a) Original, 11.1 KB</p>
                            </div>
                            <div className="flex-box flex-column" style={{justifyContent: 'center', maxWidth: '50%', alignItems: 'center'}}>
                                <img className="w3-image w3-card" src={require("../imgs/lena_out.jpg")}/>
                                <p>{`(b) PLR=5% 4.89KB`}</p>
                            </div>
                        </div>
                        <p className="w3-center">结合人类视觉感知系统特性，设计编码及差错控制策略，与传统方法相比，在兼容压缩标准的前提下，降低文件大小/宽带50%左右。</p>
                    </div>
                    <div id="pro_3" className="w3-center wb-hover-card">
                        <h4 className="w3-center">分析 —— 基于深度学习的图像视频分析技术</h4>
                        <div className="flex-box" style={{justifyContent: 'center'}}>
                            <div className="flex-box flex-column" style={{justifyContent: 'center', maxWidth: '50%', alignItems: 'center'}}>
                                <img className="w3-image w3-card" src={require("../imgs/fridge.jpg")}/>
                                <p style={{whiteSpace: 'nowrap'}}>(a) 食材检测</p>
                            </div>
                            <div className="flex-box flex-column" style={{justifyContent: 'center', maxWidth: '50%', alignItems: 'center'}}>
                                <img className="w3-image w3-card" src={require("../imgs/road.jpg")}/>
                                <p style={{whiteSpace: 'nowrap'}}>{`(b) 机非人检测`}</p>
                            </div>
                        </div>
                        <p className="w3-center">优化深度学习框架与模型，实现高精度高性能的目标检测、识别、分割等功能，准确率90%以上。</p>
                    </div>
                    <div id="pro_4" className="w3-center wb-hover-card">
                        <h4 className="w3-center">呈现 —— 基于多源数据融合的图形图像快速渲染技术</h4>
                        <img className="w3-image w3-card" src={require("../imgs/map.jpg")}/>
                        <p className="w3-center">融合视频、图像、二维地图、全景图像等多源数据，提高渲染效率，实现亿级像素全景地图数据实时可视化呈现。</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
