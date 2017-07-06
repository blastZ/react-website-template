import React, {Component} from 'react'

class ResultView extends Component {
    render() {
        const resultData = this.props.resultData
        const number = resultData.number
        const resultObjects = resultData.objects
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
                        <span className="w3-text-grey">PREDICTED CONCEPT</span>
                        <span className="w3-right w3-text-grey">PROBABILITY</span>
                        <ul className="w3-ul w3-hoverable" id="result">
                            {
                                number === 0 ?
                                    <li className="w3-hover-light-grey" style={{cursor: 'pointer', boxShadow: 'inset 0 -1px 0 0 rgba(28, 40, 56, 0.12)'}}><b>No Objects</b></li>
                                :
                                resultObjects.map((resultObject) => (
                                    <li key={resultObject.probability} className="w3-hover-light-grey" style={{cursor: 'pointer', boxShadow: 'inset 0 -1px 0 0 rgba(28, 40, 56, 0.12)'}}><b>{resultObject.name}</b><span className="w3-right">{resultObject.probability}</span></li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResultView
