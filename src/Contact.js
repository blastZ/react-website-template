import React, {Component} from 'react'

class Contact extends Component {
    componentDidMount() {
        window.initMap = this.initMap
        this.loadBMapJS("http://api.map.baidu.com/api?v=2.0&ak=rpP09A0sT3HDUbUT9p2PjxyjpVf2QQwq&callback=initMap")
    }

    loadBMapJS = (src) => {
        const ref = window.document.getElementsByTagName('script')[0]
        const script = window.document.createElement('script')
        script.src = src
        script.async = true
        ref.parentNode.insertBefore(script, ref)
    }

    initMap = () => {
        const map = new window.BMap.Map("map")
        const point = new window.BMap.Point(120.378103, 30.310405)
        map.centerAndZoom(point, 17)
        const marker = new window.BMap.Marker(point)
        map.addOverlay(marker)
        map.disableDragging()
        map.disableScrollWheelZoom()
        map.disableDoubleClickZoom()
    }

    sendMessage = () => {
        window.open('mailto:test@example.com');
    }

    render() {
        const content = this.props.content;
        return (
            <div className="w3-content w3-container w3-margin-top" id="contact" style={{paddingTop: '64px'}}>
                <h3 className="w3-center">{content.title}</h3>
                <p className="w3-center"><em>{content.smallTitle}</em></p>
                <div id="wb-contact-content-parent" style={{marginTop: '64px'}}>
                    <div>
                        <div id="map" style={{width: '100%', height: '400px', position: 'relative', overflow: 'hidden'}} className="w3-round-large"></div>
                    </div>
                    <div className="w3-padding-32">
                        <h3>相关资质</h3>
                        <ul>
                            <li>{`2015年入选杭州市“青蓝计划”企业`}</li>
                            <li>{`2015年认定为浙江省科技型中小型企业`}</li>
                            <li>{`2016年认定为杭州经开区科技型企业`}</li>
                            <li>{`2017年认定为杭州市高科技企业`}</li>
                            <li>{`创始人荣获2010年国家科技技术进步奖二等奖、2013年中国商业联合会科学技术奖一等奖`}</li>
                            <li>{`创世团队自03年起一直专注于图像视频技术的研发`}</li>
                        </ul>
                    </div>
                    <div className="w3-padding-32">
                        <h3>合作客户</h3>
                        <ul>
                            <li>{`浙江宇视科技有限公司`}</li>
                            <li>{`中科院上海高等研究院`}</li>
                            <li>{`东方通信股份有限公司`}</li>
                            <li>{`杭州九阳小家电有限公司`}</li>
                            <li>{`中航615所`}</li>
                        </ul>
                    </div>
                    <div id="wb-contact-content" className="w3-padding-32">
                        <h3>联系方式</h3>
                        <div className="w3-large w3-margin-bottom">
                            <p><i className="fa fa-map-marker fa-fw w3-margin-right w3-xlarge"></i>{`杭州经济技术开发区高科技企业孵化器2号楼A0716`}</p>
                            <p><i className="fa fa-phone fa-fw w3-margin-right w3-xlarge"></i>{ content.phone}</p>
                            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-xlarge"></i>{ content.email}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
