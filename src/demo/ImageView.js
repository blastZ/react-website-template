import React, {Component} from 'react'
import NavBar from './NavBar.js'
import SelectedImage from './SelectedImage.js'
import SelectBar from './SelectBar.js'

class ImageView extends Component {
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
                break;
            }
        }
    }

    loadImage = (imgURL,resultData) => {
        this.setState({ imageList: this.state.imageList.concat([imgURL])})
        this.setState({ selectedImage: (this.state.imageList.length - 1)})
        this.props.onShowResult(resultData)
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
