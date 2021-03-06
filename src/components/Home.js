import React, { Component } from 'react'
import simple from '../imgs/simple.svg'
import reliable from '../imgs/reliable.svg'
import scalable from '../imgs/scalable.svg'

class Home extends Component {
    render() {
        const content = this.props.content
        return (
            <div className="bgimg-1 w3-display-container" id="home">
                <div className="wb-popups w3-display-middle w3-text-white w3-center w3-hide-small wb-home-text">
                    <h1 className="w3-wide">{content.title}</h1>
                    <h4>{content.smallTitle}</h4>
                </div>
                <div className="w3-hide-large w3-hide-medium w3-display-middle w3-center w3-text-white" style={{top: '40%', whiteSpace: 'nowrap'}}>
                    <h3 style={{fontSize: '20px'}}>{content.title}</h3>
                    <p style={{fontSize: '11px'}}>{content.smallTitle}</p>
                </div>
                <div className="wb-move-from-bottom w3-row w3-center w3-padding-48 w3-hide-small" style={{position: 'absolute', bottom: '0', width: '100%', background: 'rgba(0,0,0,0.4)'}}>
                    <div className="w3-third">
                        <img src={simple} alt={'simple'}/>
                        <p className="w3-text-white">{content.descriptionOne}</p>
                    </div>
                    <div className="w3-third">
                        <img src={reliable} alt={'reliable'}/>
                        <p className="w3-text-white">{content.descriptionTwo}</p>
                    </div>
                    <div className="w3-third">
                        <img src={scalable} alt={'scalable'}/>
                        <p className="w3-text-white">{content.descriptionThree}</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
