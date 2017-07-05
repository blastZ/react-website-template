import React, {Component} from 'react'
import $ from 'jquery'

class Product extends Component {
    state = {
        catBoardOne: [
            {catURL: require('./imgs/cat-1.jpg'), catAlt: 'the first image'},
            {catURL: require('./imgs/cat-2.jpg'), catAlt: 'the second image'},
            {catURL: require('./imgs/cat-3.jpg'), catAlt: 'the third image'},
            {catURL: require('./imgs/cat-4.jpg'), catAlt: 'the fourth image'},
        ],
        catBoardTwo: [
            {catURL: require('./imgs/cat-5.jpg'), catAlt: 'the fourth image'},
            {catURL: require('./imgs/cat-6.jpg'), catAlt: 'the sixth image'},
            {catURL: require('./imgs/cat-7.jpg'), catAlt: 'the seventh image'},
            {catURL: require('./imgs/cat-8.jpg'), catAlt: 'the eighth image'},
        ]
    }
    showImage = (element) => {
        $("#img01").attr("src", element.src).css("max-height", "700px");
        $("#modal01").css("display", "block");
        const captionText = $("#caption")[0];
        if(captionText) {
            captionText.innerHTML = element.alt;
        }

    }
    hideImage() {
        $('#modal01').css('display', 'none');
    }
    render() {
        return (
            <div>
                <div className="w3-content w3-container w3-padding-64" id="portfolio">
                    <h3 className="w3-center">SECTION TWO</h3>
                    <p className="w3-center"><em>a short description<br/>click on the image to view more imformation</em></p>
                    <br/>
                    <div className="w3-row-padding w3-center cat-list">
                        {this.state.catBoardOne.map((cat) => (
                            <div className="w3-quarter w3-hover-opacity" key={cat.catURL}>
                                <img src={cat.catURL} className="w3-image" onClick={(event) => this.showImage(event.target)} alt={cat.catAlt}/>
                            </div>
                        ))}
                    </div>
                    <div className="w3-row-padding w3-center cat-list w3-section">
                        {this.state.catBoardTwo.map((cat) => (
                            <div className="w3-quarter w3-hover-opacity" key={cat.catURL}>
                                <img src={cat.catURL} className="w3-image" onClick={(event) => this.showImage(event.target)} alt={cat.catAlt}/>
                            </div>
                        ))}
                        <button onClick={this.hideImage} className="w3-button w3-light-gray w3-padding-large" style={{marginTop: '64px'}}>LOAD MORE</button>
                    </div>
                </div>
                <div id="modal01" className="w3-modal" onClick={this.hideImage} style={{display: 'none', backgroundColor: 'rgba(0,0,0,0.8)'}}>
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
