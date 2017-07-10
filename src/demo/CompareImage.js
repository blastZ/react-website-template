import React, { Component } from 'react'

class CompareImage extends Component {
    render() {
        return (
            <img className="w3-image" src={this.props.selectedImage}/>
        )
    }
}

export default CompareImage
