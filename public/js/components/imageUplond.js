import React,{Component} from 'react';
import request from 'superagent';

class Image extends Component{
    handleClick() {
        let file = this.refs.file.files[0];
        let formData = new FormData();
        formData.append('avatar', file);
        request.post('/profile')
            .send(formData)
            .end((err, res)=> {
                console.log(res.body);
            })
    }

    render() {
        return (
            <div>
                <input type="file" ref="file"/>
                <button onClick={this.handleClick.bind(this)}>上传</button>
            </div>
        )
    }
}

export default Image;