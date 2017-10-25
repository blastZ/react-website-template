import React, {Component} from 'react';
import CloseIcon from 'react-icons/lib/md/clear';

class Contact extends Component {
    state = {
      certificateList: [
        {
          title: '创始团队自03年起一直专注于图像视频技术的研发',
          url: ''
        },
        {
          title: '创始人荣获2010年国家科技技术进步奖二等奖',
          url: require('../imgs/certificate/guojiakexuejingbu.png')
        },
        {
          title: '创始人荣获2013年中国商业联合会科学技术奖一等奖',
          url: require('../imgs/certificate/quanguokeji.png')
        },
        {
          title: '2015年入选杭州市“青蓝计划”企业',
          url: require('../imgs/certificate/qinglan.png')
        },
        {
          title: '2015年认定为浙江省科技型中小型企业',
          url: require('../imgs/certificate/kejizhongxiao.png')
        },
        {
          title: '2016年认定为杭州经开区科技型企业',
          url: require('../imgs/certificate/qujikeji.png')
        },
        {
          title: '2017年认定为杭州市高新技术企业',
          url: require('../imgs/certificate/shigaoxin.jpg')
        },
      ],
      showModal: false,
      certificateIndex: -1
    }

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

    showCertificateDetail = (index) => {
      if(this.state.certificateList[index].url !== '') {
        this.setState({
          certificateIndex: index
        }, () => {
          this.setState({
            showModal: true
          })
        })
      }
    }

    render() {
        const content = this.props.content;
        return (
            <div className="w3-content w3-container w3-margin-top" id="contact" style={{paddingTop: '64px'}}>
                {this.state.showModal
                  ? <div className="w3-modal">
                    <CloseIcon className="wb-hoverable" onClick={() => {this.setState({showModal: false})}} style={{position: 'absolute', right: '20px', top: '20px', fontSize: '45px', color: 'white'}} />
                    <div className="w3-modal-content" style={{background: 'transparent', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <img className="w3-image" src={this.state.certificateList[this.state.certificateIndex].url} />
                    </div>
                  </div>
                  : null}
                <h2 style={{fontSize: '25px'}} className="w3-center">{content.title}</h2>
                <p style={{fontSize: '16px'}} className="w3-center">{content.smallTitle}</p>
                <div id="wb-contact-content-parent" style={{marginTop: '64px'}}>
                    <div>
                        <div id="map" style={{width: '100%', height: '400px', position: 'relative', overflow: 'hidden'}} className="w3-round-large"></div>
                    </div>
                    <div className="w3-padding-32">
                        <h3>相关资质</h3>
                        <ul>
                          {this.state.certificateList.map((certificate, index) => (
                            <li className={`${this.state.certificateList[index].url !== '' ? 'wb-hoverable' : ''}`} key={certificate.title + index} onClick={() => this.showCertificateDetail(index)}>{certificate.title}</li>
                          ))}
                        </ul>
                    </div>
                    <div className="w3-padding-32">
                        <h3>合作客户</h3>
                        <div>
                            <ul className="logo-list flex-box" style={{flexWrap: 'wrap'}}>
                                <li className="style1" style={{backgroundImage: `url(${require('../imgs/logo/uniview.png')})`}}></li>
                                <li className="style1" style={{backgroundImage: `url(${require('../imgs/logo/avic.png')})`}}></li>
                                <li className="style2" style={{backgroundImage: `url(${require('../imgs/logo/shanghai.png')})`}}></li>
                                <li className="style1" style={{backgroundImage: `url(${require('../imgs/logo/eastcome.png')})`}}></li>
                                <li className="style1" style={{backgroundImage: `url(${require('../imgs/logo/joyoung.png')})`}}></li>
                                <li className="style1" style={{backgroundImage: `url(${require('../imgs/logo/zteholdings.jpg')})`}}></li>
                            </ul>
                        </div>
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
