import React, {Component} from 'react'

class Product extends Component {
    state = {
        catBoardOne: [
            {catURL: require('./imgs/cat-1.jpg'), catAlt: 'the first image'},
            {catURL: require('./imgs/cat-2.jpg'), catAlt: 'the second image'},
            {catURL: require('./imgs/cat-3.jpg'), catAlt: 'the third image'},
            {catURL: require('./imgs/cat-4.jpg'), catAlt: 'the fourth image'},
        ]
    }
    render() {
        return (
            <div>
                <div className="w3-content w3-container w3-padding-64" id="portfolio">
                    <div className="w3-row-padding w3-center cat-list">
                        {this.state.catBoardOne.map((cat) => (
                            <div className="w3-quarter w3-hover-opacity" key={cat.catURL}>
                                <img src={cat.catURL} className="w3-image" alt={cat.catAlt}/>
                            </div>
                        ))}
                    </div>
                </div>
                <div id="modal01" className="w3-modal" style={{display: 'none', backgroundColor: 'rgba(0,0,0,0.8)'}}>
                    <span className="w3-button w3-display-topright">
                        <i className="fa fa-remove"></i>
                    </span>
                    <div className="w3-modal-content w3-padding-64 w3-transparent w3-center w3-text-white w3-animate-zoom" style={{maxHeight: '100%'}}>
                        <img id="img01" alt="show someting" className="w3-image"/>
                        <p id="caption" className="w3-xlarge"></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
