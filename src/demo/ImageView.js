import React, {Component} from 'react'
import NavBar from './NavBar.js'
import SelectedImage from './SelectedImage.js'
import SelectBar from './SelectBar.js'
import $ from 'jquery'

class ImageView extends Component {
    state = {
        imageList: [
            {url: require('../imgs/file_test.jpg'), resultData: {}, resultDataOfFace: {}}
        ],
        imageListOfObject: [
            {url: require('../imgs/file_test.jpg'), resultData: {}, resultDataOfFace: {}}
        ],
        imageListOfFace: [
            {url: require('../imgs/face_test.jpg'), resultData: {}, resultDataOfFace: {}}
        ],
        selectedImage: 0,
    }

    //click navbar item to show image and send request
    clickItem = (strURL) => {
        this.props.onClickItem()
        const that = this
        const imageList = this.state.imageList;
        for(let i=0; i<imageList.length; i++) {
            if(imageList[i].url.toString() === strURL) {
                this.setState({selectedImage: i});
                this.sendRequestInMode(this.props.mode, i, strURL, 'no-new');
                break;
            }
        }
    }

    sendRequestInMode(mode, index, strURL, isNew) {
        const imageList = this.state.imageList
        const i = index
        const that = this
        if(mode === 'GENERAL') {
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
        } else if(mode === 'FACE') {
            const that = this
            if(isNew === 'new') {
                this.sendFaceRequest(strURL, 0, 'new')
            } else {
                if(JSON.stringify(imageList[i].resultDataOfFace) === '{}') {
                    console.log("third data of face is empty send the face request")
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
        this.sendFileRequest(require('../imgs/file_test.jpg'), 0, 'not-new')
    }

    componentDidMount() {
        const that = this;
        $('#file').on('change', function(){
            var file = this.files[0];
        	if(file) {
          		var url = window.URL.createObjectURL(file);
                that.setState((state) => {
                    //concat all properties otherwise the new iamge's properties will be undefine
                    state.imageList = state.imageList.concat([{url: url, resultData: {}, resultDataOfFace: {}}])
                    state.selectedImage = state.imageList.length - 1
                })
                that.props.onLoadingImage()
                that.sendRequestInMode(that.props.mode, 0, url, 'new');
            }

        })
    }

    sendFaceRequest = (url, index, isNew) => {
        const that = this;
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function() {
            var imgBlob = xhr.response;
            var fd = new FormData();
            fd.append('file', imgBlob);
            var xhr2 = new XMLHttpRequest();
            xhr2.open("POST", "http://demo.codvision.com:16802/api/demoface");
            xhr2.onload = function() {
                const data = xhr2.response;
                const jsonData = JSON.parse(data);
                if(isNew === 'new') {
                    that.setState((state) => {
                        state.imageList[state.selectedImage].resultDataOfFace = jsonData
                    })
                } else {
                    that.setState((state) => {
                        state.imageList[index].resultDataOfFace = jsonData
                    })
                }
                that.props.onShowResult(jsonData);        
            }
            xhr2.onerror = function() {
                console.log('post error');
                //when the post failed add invalid image to resultDataOfFace
                that.setState((state) => {
                    state.imageList[state.selectedImage].resultDataOfFace = {similarity: 'Invalid Image'};
                });
                that.props.onShowResult({});
            }
            xhr2.send(fd);
        };
        xhr.onerror = function() {
            console.log('face get wrong!');
        };
        xhr.send();
    }

    sendFileRequest = (url, index, isNew) => {
        const that = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function() {
            var imgBlob = xhr.response;
            var fd = new FormData();
            fd.append('file', imgBlob);
            var xhr2 = new XMLHttpRequest();
            xhr2.open("POST", "http://demo.codvision.com:16802/api/demofile");
            xhr2.onload = function() {
                const data = xhr2.response;
                const jsonData = JSON.parse(data);
                if(isNew === 'new') {
                    that.setState((state) => {
                        state.imageList[state.selectedImage].resultData = jsonData
                    })
                } else {
                    that.setState((state) => {
                        state.imageList[index].resultData = jsonData
                    })
                }
                that.props.onShowResult(jsonData)
            }
            xhr2.onerror = function() {
                console.log('post failed');
                //post failed set number=0 to end the process and show the canvas
                that.setState((state) => {
                    state.imageList[state.selectedImage].resultData = {number: 0}
                })
                that.props.onShowResult({})
            }
            xhr2.send(fd);
        };
        xhr.onerror = function() {
            console.log('file get wrong!');
        };
        xhr.send();
    }

    //second floor changeMode function
    changeMode = (mode) => {
        this.setState((state) => {
            if(this.props.mode === 'GENERAL') {
                state.imageListOfObject = state.imageList
            } else if(this.props.mode === 'FACE') {
                state.imageListOfFace = state.imageList
            }
        })
        const that = this
        if(mode === 'FACE') {
            this.setState((state) => {
                state.imageList = state.imageListOfFace
                state.selectedImage = 0
            })
        } else if(mode === 'GENERAL') {
            this.setState((state) => {
                state.imageList = state.imageListOfObject
                state.selectedImage = 0
            })
        }
        setTimeout(function() {
            that.sendRequestInMode(mode, that.state.selectedImage, that.state.imageList[that.state.selectedImage].url, 'not-new')
        },1)
        this.props.onChangeMode(mode)
    }

    render() {
        return (
            <div id="image-view" className="flex-box" style={{width: '66%', height: '100%', maxHeight:'100%', flex: '1 1 auto', flexDirection: 'column'}}>
                <NavBar onChangeMode={this.changeMode}/>
                <SelectedImage mode={this.props.mode} compareImage={require('../imgs/cat-4.jpg')} selectedImage={this.state.imageList[this.state.selectedImage].url}/>
                <SelectBar onClickItem={this.clickItem} imageList={this.state.imageList} selectedImage={this.state.selectedImage}/>
            </div>
        )
    }
}

export default ImageView
