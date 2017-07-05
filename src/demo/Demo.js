import React, {Component} from 'react'
import ImageView from './ImageView.js'
import ResultView from './ResultView.js'

class Demo extends Component {
    state = {
        resultData: {
            'objects': [
                {'right': 0.33, 'name': '苹果', 'probability': 0.996975, 'bottom': 0.33, 'top': 0.06, 'pinyinname': 'pingguo', 'left': 0.08},
                {'right': 0.99, 'name': '苹果', 'probability': 0.910705, 'bottom': 0.37, 'top': 0.06, 'pinyinname': 'pingguo', 'left': 0.68},
                {'right': 0.51, 'name': '玉米', 'probability': 0.806602, 'bottom': 0.91, 'top': 0.68, 'pinyinname': 'yumi', 'left': 0.37}
            ],
            'number': 3
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
