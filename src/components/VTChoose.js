import React, { Component } from 'react';
import DocIcon from 'react-icons/lib/md/description';
import VtaIcon from 'react-icons/lib/md/account-circle';
import VtmIcon from 'react-icons/lib/md/account-box';
import OptionIcon from 'react-icons/lib/md/assignment';

class VTChoose extends Component {
    open = (website) => (
        website === 'VTA' ? window.open('./MediaCtl-VTA.html') : window.open('./MediaCtl-VTM.html')
    )

    openPDF = (pdf, name) => {
      const w = window.open(pdf);
      setTimeout(() => {
        w.document.title = name;
      }, 1000)
    }

    render() {
        return (
            <div className="full-height flex-box flex-column" style={{position: 'relative', alignItems: 'center', justifyContent: 'center'}}>
                <div className="fade-in-rotate flex-box flex" style={{width: '500px', height: '200px', width: '850px', justifyContent: 'space-around'}}>
                    <div onClick={this.open.bind(this, 'VTA')} className="hover-scale-big w3-center flex-box" style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                      <div className="vt-container">
                        <VtaIcon style={{fontSize: '40px'}} />
                        <h3 style={{fontSize: '22px'}}>VTA</h3>
                      </div>
                    </div>
                    <div onClick={this.open.bind(this, 'VTM')} className="hover-scale-big w3-center flex-box" style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                    <div className="vt-container">
                      <VtmIcon style={{fontSize: '40px'}} />
                      <h3 style={{fontSize: '22px'}}>VTM</h3>
                    </div>
                    </div>
                    <div onClick={() => this.openPDF(require('../utils/helper.pdf'), "VTC MediaPlayerCtl插件软件接口说明书")} className="hover-scale-big w3-center flex-box" style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                        <div className="vt-container">
                          <DocIcon style={{fontSize: '40px'}} />
                          <h3 style={{fontSize: '20px'}}>接口说明书</h3>
                        </div>
                    </div>
                    <div onClick={() => this.openPDF(require('../utils/options.pdf'), "多方远程视频协作系统操作指南")} className="hover-scale-big w3-center flex-box" style={{width: '50%', alignItems: 'center', justifyContent: 'center'}}>
                      <div className="vt-container">
                        <OptionIcon style={{fontSize: '40px'}} />
                        <h3 style={{fontSize: '20px'}}>操作指南</h3>
                      </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VTChoose;
