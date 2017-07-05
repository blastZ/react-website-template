import React, {Component} from 'react'

class SelectBar extends Component {
    render() {
        return (
            <ul style={{width:'100%', backgroundColor:'#18212e', paddingTop: '20px', paddingBottom: '20px'}} id="select-bar">
                {this.props.imageList.map((image, index) => (
                    index !== this.props.selectedImage ?
                    <BarItem key={image.toString()} onClickItem={this.props.onClickItem} dataKey={image.toString()} imageURL={image}/> :
                    <SelectedBarItem key={image.toString()} onClickItem={this.props.onClickItem} dataKey={image.toString()} imageURL={image}/>
                ))}
            </ul>
        )
    }
}

class BarItem extends Component {
    render() {
        return (
            <li onClick={() => this.props.onClickItem(this.props.dataKey)} className="small-image w3-image" style={{backgroundImage: `url(${this.props.imageURL})`}}/>
        )
    }
}

class SelectedBarItem extends Component {
    render() {
        return (
            <li onClick={() => this.props.onClickItem(this.props.dataKey)} className="small-image w3-image select-bar-item-selected" style={{backgroundImage: `url(${this.props.imageURL})`}}/>
        )
    }
}

export default SelectBar
