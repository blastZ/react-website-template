import React, {Component} from 'react'

class SelectedImage extends Component {
    componentDidMount() {
        this.props.onLoadImage();
    }

    render() {
        return (
            <div className="w3-center w3-padding-24 black-blue" style={{width: '100%', flexGrow: '1', position: 'relative'}}>
                <img className="w3-image" src={this.props.selectedImage} alt={this.props.selectedImage} style={{maxHeight: '600px'}}/>
                <form id="url-form" style={{position: 'absolute', bottom: '0', left: '36%'}}>
                    <label htmlFor="file" className="w3-button w3-text-white" style={{margin: '32px',backgroundColor: '#009cff'}}>
                        <i className="fa fa-picture-o" aria-hidden="true"></i>&nbsp;
                        TRY YOUR OWN IMAGE OR VIDEO
                    </label>
                    <input id="file" type="file" accept="image/*" style={{display: 'none'}}/>
                </form>
            </div>
        )
    }
}

export default SelectedImage
