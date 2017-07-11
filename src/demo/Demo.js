import React, {Component} from 'react'
import ImageView from './ImageView.js'
import ResultView from './ResultView.js'

class Demo extends Component {
    state = {
        resultData: {},
        mode: "GENERAL",
        loading: 'true'
    }

    showResult = (resultData) => {
        this.setState({resultData: resultData, loading: 'false'})
        if(this.state.mode === 'GENERAL') {
            this.drawCanvas()
        }
    }
    //this function will update imageView
    //<!!!!!!!!!!!!!!!!!fix> if request response a long time the image will not show
    drawCanvas() {
        const that = this
        const c = document.getElementById('canvas')
        const ctx = c.getContext('2d')
        const img = document.getElementById('source')
        const theImage = new Image()
        theImage.src = img.src
        theImage.onload = function() {
            let the_width = theImage.width, the_height = theImage.height
            if(the_height > 600) {
                the_width = Math.round(the_width * ( 600 / the_height))
                the_height = 600
            }
            c.width = the_width
            c.height = the_height
            ctx.drawImage(theImage, 0, 0, theImage.width, theImage.height, 0, 0, c.width, c.height)
            that.drawObjects()
        }

    }

    drawObjects() {
        const c = document.getElementById('canvas')
        const objects = this.state.resultData.objects
        if(objects) {
            objects.map((object) => {
                const leftWidth = Math.round(object.left * c.width)
                const rightWidth = Math.round(object.right * c.width)
                const topWidth = Math.round(object.top * c.height)
                const bottomWidth = Math.round(object.bottom * c.height)
                const x = leftWidth
                const y = topWidth
                const width = rightWidth - leftWidth
                const height = bottomWidth - topWidth
                const ctx = c.getContext('2d')
                ctx.lineWidth = 4
                ctx.strokeStyle = 'black'
                ctx.strokeRect(x,y,width,height)
            })
        }
    }

    //top changeMode function
    changeMode = (mode) => {
        this.setState((state) => {
            state.loading = 'true'
            state.mode = mode
        })
    }

    clickItem = () => {
        this.setState({loading: 'true'})
    }

    loadImage = () => {
        this.setState({loading: 'true'})
    }

    render() {
        return (
            <div className="flex-box full-height" style={{paddingTop: '46px'}}>
                <ImageView mode={this.state.mode} onLoadingImage={this.loadImage} onClickItem={this.clickItem} onChangeMode={this.changeMode} onShowResult={this.showResult}/>
                <ResultView loading={this.state.loading} mode={this.state.mode} resultData={this.state.resultData}/>
            </div>
        )
    }
}

export default Demo
