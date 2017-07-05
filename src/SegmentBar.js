import React, {Component} from 'react'

class SegmentBar extends Component {
    render() {
        const {bgimg, text} = this.props
        return (
            <div className={`${bgimg} w3-display-container w3-opacity-min`}>
                <div className="w3-display-middle">
                <span className="w3-xxxlarge w3-text-white w3-wide">{`${text}`}</span>
                </div>
            </div>
        )
    }
}

export default SegmentBar
