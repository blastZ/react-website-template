import React, {Component} from 'react'
import NavBar from './NavBar.js'
import SelectedImage from './SelectedImage.js'
import SelectBar from './SelectBar.js'
import $ from 'jquery'

class ImageView extends Component {
    constructor() {
        super()
        this.sendRequest(require('../imgs/cat-1.jpg'),'not-new')
    }

    state = {
        imageList: [
            require('../imgs/cat-1.jpg'),
            require('../imgs/cat-2.jpg'),
            require('../imgs/cat-3.jpg'),
            require('../imgs/cat-4.jpg'),
            require('../imgs/cat-5.jpg'),
            require('../imgs/cat-6.jpg'),
            require('../imgs/cat-7.jpg'),
            require('../imgs/cat-8.jpg'),
        ],
        selectedImage: 0
    }

    clickItem = (strURL) => {
        const imageList = this.state.imageList;
        for(let i=0; i<imageList.length; i++) {
            if(imageList[i].toString() === strURL) {
                this.setState({selectedImage: i});
                this.sendRequest(strURL, 'not-new');
                break;
            }
        }
    }

    loadImage = () => {
        const that = this;
        $('#file').on('change', function(){
            var file = this.files[0];
        	if(file) {
                var name = file.name;
            	var size = file.size;
            	var type = file.type;
          		var url = window.URL.createObjectURL(file);
                that.sendRequest(url, 'new');
            }

        })
    }

    sendRequest = (url, isNew) => {
        const that = this;
        var xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function(e) {
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
                            that.setState({ imageList: that.state.imageList.concat([url])})
                            that.setState({ selectedImage: (that.state.imageList.length - 1)});
                        }
                        that.props.onShowResult(jsonData)
                    } else {

                    }
                }
            }
            xhr2.send(fd);
        }
        xhr.send();
    }

    changeMode = (mode) => {
        this.props.onChangeMode(mode)
    }

    render() {
        return (
            <div className="flex-box" style={{width: '66%', height: '100%', maxHeight:'100%', flex: '1 1 auto', flexDirection: 'column'}}>
                <NavBar onChangeMode={this.changeMode}/>
                <SelectedImage onLoadImage={this.loadImage} selectedImage={this.state.imageList[this.state.selectedImage]}/>
                <SelectBar onClickItem={this.clickItem} imageList={this.state.imageList} selectedImage={this.state.selectedImage}/>
            </div>
        )
    }
}

export default ImageView
