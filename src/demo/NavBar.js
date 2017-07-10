import React, {Component} from 'react'

class NavBar extends Component {
    state = {
        modeList: ['FACE','GENERAL'],
        //modeListAll: ['GENERAL','FACE','NSFW','COLOR','WEDDING','TRAVEL','CELEBRITY','DEMOGRAPHICS','LOGO','FOOD','APPAREL','FOCUS'],
        selectedMode: 'GENERAL'
    }
    render() {
        return (
            <div className="flex-box w3-bar black-blue" style={{borderBottom: '1px solid rgba(255,255,255,0.1)', alignItems: 'center', overflow: 'visible'}}>
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
            </div>
        )
        //drop down list show more modes
        // {
        //     <div className="full-height dropdown" style={{position: 'relative'}}>
        //         <button className="w3-button w3-text-grey w3-hover-black-blue dropdown-button">
        //             MORE MODELS&nbsp;<i className="fa fa-filter" aria-hidden="true"></i>
        //         </button>
        //         <ul id="demo-drop-down" className="flex-box flex-column dropdown-content">
        //             {this.state.modeListAll.map((mode) => (
        //                 <li key={mode}>{mode}</li>
        //             ))}
        //         </ul>
        //     </div>
        // }
    }
}

export default NavBar
