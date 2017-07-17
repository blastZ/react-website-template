import React, {Component} from 'react'

class Contact extends Component {
    componentDidMount() {

        const map = new window.BMap.Map("map")
        const point = new window.BMap.Point(116.404, 39.915)
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
        return (
            <div className="w3-content w3-container w3-padding-64 w3-margin-top" id="contact">
                <h3 className="w3-center">SECTION THREE</h3>
                <p className="w3-center"><em>a short description</em></p>
                <div className="w3-row" style={{marginTop: '64px'}}>
                    <div className="w3-col m4">
                        <div id="map" style={{width: '100%', height: '400px', position: 'relative', overflow: 'hidden'}} className="w3-round-large"></div>
                    </div>
                    <div className="w3-col m8 w3-panel" style={{marginTop: '0'}}>
                        <div className="w3-large w3-margin-bottom">
                            <p><i className="fa fa-map-marker fa-fw w3-margin-right w3-xlarge"></i>ZheJiang HangZhou, CN</p>
                            <p><i className="fa fa-phone fa-fw w3-margin-right w3-xlarge"></i> Phone: +86 1234567654</p>
                            <p><i className="fa fa-envelope fa-fw w3-margin-right w3-xlarge"></i> Email: mail@mail.com</p>
                        </div>
                        <p>Swing by for a cup of <i className="fa fa-coffee"></i>,or leave me a note:</p>
                        <form action="" target="_blank">
                            <div className="w3-row-padding" style={{margin: '0 -16px 8px -16px'}}>
                                <div className="w3-half"><input type="text" placeholder="Name" className="w3-input w3-border"></input></div>
                                <div className="w3-half"><input type="email" placeholder="Email" className="w3-input w3-border"></input></div>
                            </div>
                            <div>
                                <input type="text" id="email-content" placeholder="Message" className="w3-input w3-border"></input>
                            </div>
                            <button onClick={this.sendMessage} className="w3-button w3-black w3-right w3-section"><i className="fa fa-paper-plane"></i> SEND MESSAGE</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Contact
