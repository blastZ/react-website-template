import React, {Component} from 'react'
import NavBar from './NavBar.js'
import SelectedImage from './SelectedImage.js'
import SelectBar from './SelectBar.js'
import $ from 'jquery'

class ImageView extends Component {
    state = {
        imageList: [
            {url: require('../imgs/cat-1.jpg'), resultData: {}, resultDataOfFace: {}},
            {url: require('../imgs/cat-2.jpg'), resultData: {}, resultDataOfFace: {}},
            {url: require('../imgs/cat-3.jpg'), resultData: {}, resultDataOfFace: {}},
            {url: require('../imgs/cat-4.jpg'), resultData: {}, resultDataOfFace: {}},
            {url: require('../imgs/cat-5.jpg'), resultData: {}, resultDataOfFace: {}},
            {url: require('../imgs/cat-6.jpg'), resultData: {}, resultDataOfFace: {}},
            {url: require('../imgs/cat-7.jpg'), resultData: {}, resultDataOfFace: {}},
            {url: require('../imgs/cat-8.jpg'), resultData: {}, resultDataOfFace: {}}
        ],
        selectedImage: 0,
        mode: 'GENERAL'
    }

    //click navbar item to show image and send request
    clickItem = (strURL) => {
        const that = this
        const imageList = this.state.imageList;
        for(let i=0; i<imageList.length; i++) {
            if(imageList[i].url.toString() === strURL) {
                this.setState({selectedImage: i});
                this.sendRequestInMode(i, strURL, 'no-new');
                break;
            }
        }
    }

    sendRequestInMode(index, strURL, isNew) {
        const imageList = this.state.imageList
        const i = index
        const that = this
        if(this.props.mode === 'GENERAL') {
            if(isNew === 'new') {
                this.sendFileRequest(strURL, 0, 'new')
            } else {
                if(JSON.stringify(imageList[i].resultData) === '{}') {
                    this.sendFileRequest(strURL, i, isNew)
                } else {
                    //wait the canvas initial maybe there is a better way to complete this...
                    setTimeout(function() {
                        that.props.onShowResult(imageList[i].resultData)
                    },1)
                }
            }
        } else if(this.props.mode === 'FACE') {
            const that = this
            if(isNew === 'new') {
                this.sendFaceRequest(strURL, 0, 'new')
            } else {
                if(JSON.stringify(imageList[i].resultDataOfFace) === '{}') {
                    this.sendFaceRequest(strURL, i, isNew)
                } else {
                    //wait the canvas initial maybe there is a better way to complete this...
                    setTimeout(function() {
                        that.props.onShowResult(imageList[i].resultDataOfFace)
                    },1)
                }
            }
        }
    }

    componentWillMount() {
        this.sendFileRequest(require('../imgs/cat-1.jpg'), 0, 'not-new')
    }

    componentDidMount() {
        const that = this;
        $('#file').on('change', function(){
            var file = this.files[0];
        	if(file) {
          		var url = window.URL.createObjectURL(file);
                that.sendRequestInMode(0, url, 'new');
            }

        })
    }

    //call it when the mode changed
    // sendCurrentModeRequest = () => {
    //     console.log('hey i changed current mode is'+ this.props.mode)
    //     this.sendRequest(this.state.imageList[this.state.selectedImage], 'not-new')
    // }

    sendFaceRequest = (url, index, isNew) => {
        const that = this;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function(e) {
            var imgBlob = xhr.response;
            var fd = new FormData();
            fd.append('file', imgBlob);
            var xhr2 = new XMLHttpRequest();
            xhr2.open("POST", "http://demo.codvision.com:16802/api/demoface");
            xhr2.onreadystatechange  = function(e) {
                if (xhr2.readyState === XMLHttpRequest.DONE) {
                    if (xhr2.status === 200) {
                        const data = xhr2.response;
                        const jsonData = JSON.parse(data);
                        if(isNew === 'new') {
                            that.setState((state) => {
                                state.imageList =  state.imageList.concat([{url: url, resultDataOfFace: jsonData}])
                                state.selectedImage = state.imageList.length - 1
                            })
                        } else {
                            that.setState((state) => {
                                state.imageList[index].resultDataOfFace = jsonData
                            })
                        }
                        that.props.onShowResult(jsonData)
                    } else {
                        console.log('someting wrong!')
                    }
                }
            }
            xhr2.send(fd);
        }
        xhr.send()
    }

    sendFileRequest = (url, index, isNew) => {
        const that = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onreadystatechange = function(e) {
            if(xhr.readyState === XMLHttpRequest.DONE) {
                if(xhr.status === 200) {
                    var imgBlob = xhr.response;
                    var fd = new FormData();
                    fd.append('file', imgBlob);
                    var xhr2 = new XMLHttpRequest();
                    xhr2.open("POST", "http://demo.codvision.com:16802/api/demofile");
                    xhr2.onreadystatechange  = function(e) {
                        if (xhr2.readyState === XMLHttpRequest.DONE) {
                            if (xhr2.status === 200) {
                                const data = xhr2.response;
                                const jsonData = JSON.parse(data);
                                if(isNew === 'new') {
                                    that.setState((state) => {
                                        state.imageList =  state.imageList.concat([{url: url, resultData: jsonData}])
                                        state.selectedImage = state.imageList.length - 1
                                    })
                                } else {
                                    that.setState((state) => {
                                        state.imageList[index].resultData = jsonData
                                    })
                                }
                                that.props.onShowResult(jsonData)
                            } else {
                                console.log('someting wrong!')
                            }
                        }
                    }
                    xhr2.send(fd);
                } else {
                    console.log('someting wrong!')
                }
            }
        }
        xhr.send();
    }

    //second floor changeMode function
    changeMode = (mode) => {
        this.props.onChangeMode(mode)
    }

    render() {
        return (
            <div className="flex-box" style={{width: '66%', height: '100%', maxHeight:'100%', flex: '1 1 auto', flexDirection: 'column'}}>
                <NavBar onChangeMode={this.changeMode}/>
                <SelectedImage mode={this.props.mode} selectedImage={this.state.imageList[this.state.selectedImage].url}/>
                <SelectBar onClickItem={this.clickItem} imageList={this.state.imageList} selectedImage={this.state.selectedImage}/>
            </div>
        )
    }
}

export default ImageView
