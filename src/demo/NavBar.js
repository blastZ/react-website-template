import React, {Component} from 'react'

class NavBar extends Component {
    state = {
        modeList: ['COLOR','NSFW','FACE','GENERAL'],
        selectedMode: 'GENERAL'
    }
    render() {
        return (
            <div className="flex-box w3-bar black-blue" style={{borderBottom: '1px solid rgba(255,255,255,0.1)', alignItems: 'center'}}>
                <p className="w3-left w3-bar-item w3-text-white">Codvision Demo</p>
                <div className="w3-bar-item" style={{direction: 'rtl', flexGrow: '2'}}>
                    {
                        this.state.modeList.map((mode) => (
                            <button key={mode} onClick={() => {
                                    this.props.onChangeMode(mode)
                                    this.setState({selectedMode: mode})
                                }}
                                className={`w3-button ${ this.state.selectedMode === mode ? 'w3-text-white' : 'w3-text-grey'} w3-hover-black-blue`}>{mode}
                            </button>
                        ))
                    }
                </div>
                <div className="w3-dropdown-hover">
                    <button className="w3-button w3-text-grey w3-hover-black-blue">
                        MORE MODELS&nbsp;<i className="fa fa-filter" aria-hidden="true"></i>
                    </button>
                    <ul id="demo-drop-down" className="flex-box flex-column">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default NavBar
