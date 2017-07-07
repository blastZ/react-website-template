import React, {Component} from 'react'
import ImageView from './ImageView.js'
import ResultView from './ResultView.js'

class Demo extends Component {
    state = {
        resultData: {
            number: 0
        },
        mode: "GENERAL"
    }

    showResult = (resultData) => {
        this.setState({resultData: resultData})
        if(this.state.mode === 'GENERAL') {
            this.drawCanvas()
        }
    }

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

    changeMode = (mode) => {
        this.setState({mode: mode})
    }

    render() {
        return (
            <div className="flex-box full-height" style={{paddingTop: '46px'}}>
                <ImageView onChangeMode={this.changeMode} onShowResult={this.showResult}/>
                <ResultView mode={this.state.mode} resultData={this.state.resultData}/>
            </div>
        )
    }
}

export default Demo
