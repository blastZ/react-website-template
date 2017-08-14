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
        map.centerAndZoom(point, 15)
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
            <div className="w3-content w3-container w3-padding-64 w3-margin-top" id="contact">
                <h3 className="w3-center">{content.title}</h3>
                <p className="w3-center"><em>{content.smallTitle}</em></p>
                <div style={{marginTop: '64px'}}>
                    <div>
                        <div id="map" style={{width: '100%', height: '400px', position: 'relative', overflow: 'hidden'}} className="w3-round-large"></div>
                    </div>
                    <div className="w3-padding-32">
                        <div className="w3-large w3-margin-bottom">
                            <p><i className="fa fa-map-marker fa-fw w3-margin-right w3-xlarge"></i>{`杭州经济技术开发区白杨街道6号大街452号2幢A715-717号房`}</p>
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
