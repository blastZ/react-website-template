import React, {Component} from 'react'

class DescriptionBar extends Component {
    render() {
        return (
            <div className="w3-row w3-light-grey w3-center w3-padding-32 w3-text-gray" id="bar-imformation">
                <div className="w3-quarter w3-section">
                    <h3>身份比对</h3>
                    <p>自动提取身份证上的人脸号码等信息，与摄像头采集的人脸图像实时比对</p>
                </div>
                <div className="w3-quarter w3-section">
                    <h3>物体检测</h3>
                    <p>自动提取身份证上的人脸号码等信息，与摄像头采集的人脸图像实时比对</p>
                </div>
                <div className="w3-quarter w3-section">
                    <h3>VR全景</h3>
                    <p>自动提取身份证上的人脸号码等信息，与摄像头采集的人脸图像实时比对</p>
                </div>
                <div className="w3-quarter w3-section">
                    <h3>视频通信</h3>
                    <p>自动提取身份证上的人脸号码等信息，与摄像头采集的人脸图像实时比对</p>
                </div>
            </div>
        )
    }
}

export default DescriptionBar
