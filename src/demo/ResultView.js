import React, {Component} from 'react'

class ResultView extends Component {

    getListItem = () => {
        const resultData = this.props.resultData
        const mode = this.props.mode
        if(mode === 'GENERAL') {
            const resultObjects = resultData.objects
            const number = resultData.number
            if(resultObjects) {
                return(
                    resultObjects.map((resultObject) => (
                        <li key={resultObject.probability} className="w3-hover-light-grey">
                            <b>{resultObject.name}</b>
                            <span className="w3-right">{resultObject.probability}</span>
                        </li>
                    ))
                )
            } else {
                return (<li className="w3-hover-light-grey"><b>No Objects</b></li>)
            }
        } else if(mode === 'FACE') {
            if(resultData.similarity) {
                return (
                    <li className="w3-hover-light-grey">
                        <b>{resultData.similarity}</b>
                    </li>
                )
            } else {
                return (
                    <li className="w3-hover-light-grey">
                        <b>Invalid Image</b>
                    </li>
                )
            }
        }
    }

    getResultName = () => {
        const mode = this.props.mode
        if(mode === 'GENERAL') {
            return(
                <div>
                    <span className="w3-text-grey">PREDICTED CONCEPT</span>
                    <span className="w3-right w3-text-grey">PROBABILITY</span>
                </div>
            )

        } else if(mode === 'FACE') {
            return(
                <div>
                    <span className="w3-text-grey">SIMILARITY</span>
                </div>
            )
        }
    }

    render() {
        return (
            <div className="flex-box flex-column w3-text-black full-height" style={{width: '34%', flex: '1 1 auto'}}>
                <div style={{width: '100%', padding: '8px 10px', borderBottom: '1px solid rgba(27, 38, 52, 0.08)'}}>
                    <p className="w3-left"><b>{this.props.mode}</b></p>
                    <p className="w3-text-blue w3-right"><b>VIEW DOCS</b></p>
                </div>
                <div className="flex-box flex-column w3-container" style={{width: '100%', overflowY: 'auto'}}>
                    <div style={{width: '100%'}}>
                        <p className="w3-text-grey">LANGUAGE</p>
                        <select className="w3-select w3-border">
                            <option>Chinese (zh)</option>
                            <option>English (en)</option>
                        </select>
                    </div>
                    <div className="w3-padding-16 full-height full-width">
                        {this.getResultName()}
                        <ul className="w3-ul w3-hoverable" id="result">{
                            this.props.loading === 'true' ?
                            (<i className="fa fa-spinner w3-spin" style={{fontSize: '2em', margin: '0.2em 0.5em'}}></i>) :
                            this.getListItem()
                        }</ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultView
