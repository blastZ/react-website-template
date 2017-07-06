import React, {Component} from 'react'
import ImageView from './ImageView.js'
import ResultView from './ResultView.js'

class Demo extends Component {
    state = {
        resultData: {
            number: 0
        },
        mode: "General"
    }

    showResult = (resultData) => {
        this.setState({resultData: resultData})
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
