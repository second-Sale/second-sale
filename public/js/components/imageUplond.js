import React,{Component} from 'react';
import request from 'superagent';

class Image extends Component{

    isClick(){
        let  input=this.refs.file;
        let  img=this.refs.image;
        if(input.files&&input.files[0]){
            var fileObj=new FileReader();
            fileObj.onload=function(event){//属性绑定方法
                img.src=event.target.result;

            };
            fileObj.readAsDataURL(input.files[0]);
        }
        this.handleClick(input.files[0]);
    }
    handleClick(file){
        console.log(this.props);
        let formData=new FormData();
        formData.append('avatar',file);
        request
            .post('/profile')
            .send(formData)
            .end((err,res)=>{
                console.log(res.body.filePath);
                //this.props.uploadImage(res.body.filePath);
            });
    }

    render() {
        return (
            <div>
                <div>
                    <label className="location">照片：</label>
                    <input type="file" ref="file" className="fileStyle" onChange={this.isClick.bind(this)}/>
                </div>
                <div>
                    <img src="" className="imgType" ref="image"/>
                </div>
            </div>
        )
    }
}

export default Image;