import React, {Component} from 'react'
import $ from 'jquery'

class SelectedImage extends Component {
    componentDidMount() {
        const that = this;
        $('#file').on('change', function(){
            {/*var file = this.files[0];
        	var name = file.name;
        	var size = file.size;
        	var type = file.type;
      		var url = window.URL.createObjectURL(file);

        	var fd = new FormData(document.querySelector("#url-form"));

    		$.ajax({
      			url: "http://demo.codvision.com:16802/api/demofile",
      			type: "GET",
      			data: fd,
                dataType: 'jsonp',
      			processData: false,  // tell jQuery not to process the data
      			contentType: false,   // tell jQuery not to set contentType
      			success: function(data){
                    that.props.onLoadImage(url);
    				console.log(data);
      			},
    		}); ajax request return a json data*/}
            const file = this.files[0];
            if(!/image\/\w+/.test(file.type)){
                alert("It's not a image");
                return false;
            }
            const reader = new FileReader();
            reader.readAsDataURL(file);

            const resultData = {
                'objects': [
                    {'right': 0.33, 'name': '凤梨', 'probability': 0.996975, 'bottom': 0.33, 'top': 0.06, 'pinyinname': 'fengli', 'left': 0.08},
                    {'right': 0.99, 'name': '草莓', 'probability': 0.910705, 'bottom': 0.37, 'top': 0.06, 'pinyinname': 'caomei', 'left': 0.68},
                    {'right': 0.51, 'name': '葡萄', 'probability': 0.806602, 'bottom': 0.91, 'top': 0.68, 'pinyinname': 'putao', 'left': 0.37}
                ],
                'number': 3
            }

            reader.onload = function() {
                that.props.onLoadImage(this.result, resultData);
            }
        })
    }
    render() {
        return (
            <div className="w3-center w3-padding-24 black-blue" style={{width: '100%', flexGrow: '1'}}>
                <img className="w3-image" src={this.props.selectedImage} alt={this.props.selectedImage} style={{maxHeight: '600px'}}/>
                <form id="url-form">
                    <label htmlFor="file" className="w3-button w3-text-white" style={{margin: '32px',backgroundColor: '#009cff'}}>
                        <i className="fa fa-picture-o" aria-hidden="true"></i>&nbsp;
                        TRY YOUR OWN IMAGE OR VIDEO
                    </label>
                    <input id="file" type="file" style={{display: 'none'}}/>
                </form>
            </div>
        )
    }
}

export default SelectedImage
