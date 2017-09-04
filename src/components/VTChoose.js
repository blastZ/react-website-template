import React, { Component } from 'react';

class VTChoose extends Component {
    open = (website) => (
        website === 'VTA' ? window.open('./MediaCtl-VTA.html') : window.open('./MediaCtl-VTM.html')
    )

    render() {
        return (
            <div className="full-height flex-box flex-column" style={{alignItems: 'center', justifyContent: 'center'}}>
                <div className="fade-in-rotate flex-box flex" style={{width: '500px', height: '200px'}}>
                    <div onClick={this.open.bind(this, 'VTA')} className="hover-scale-big w3-center w3-black flex-box" style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                        <h3>VTA</h3>
                    </div>
                    <div onClick={this.open.bind(this, 'VTM')} className="hover-scale-big w3-center w3-light-gray flex-box" style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                        <h3>VTM</h3>
                    </div>
                </div>
            </div>
        )
    }
}

export default VTChoose;
