import React,{Component} from 'react';
import Nav from '../containers/nav';
import Footer from './footer';
import {Link, browserHistory} from 'react-router';

class PostMessage extends Component{

    check(){
        var cookieInformation = {};
        var name = document.getElementById("goodsName").value;
        var description=document.getElementById("discription").value;
        var price=document.getElementById("price").value;
        var count=document.getElementById("count").value;
        var telephoneNumber=document.getElementById("tel").value;
        var image=document.getElementById("image").value;

        document.cookie  && document.cookie.split(';').forEach((element)=>{
            var part = element.split('=');
            cookieInformation[part[0].trim()] = (part[1]||'').trim();
        });

        console.log('cookie',cookieInformation.user);
        if(!cookieInformation.user){
            browserHistory.push('/login');
        }
        else if(name === '' || description === '' || price === '' || count === '' || telephoneNumber === ''){
            console.log(name);
           alert("请补全信息！");
        }else{
            var user=cookieInformation.user;
            this.props.onSubmit({user,name,description,price,count,telephoneNumber});
        }
    }

    componentDidUpdate(){
        var isSaved=this.props.isSaved;
        if(isSaved){
            alert("添加成功");
        }else{
            alert("添加失败");
        }
    }

    render(){
        return <div>
            <Nav/>
            <div>
                <div className="message">
                    <div >
                        <label className="location">名称：</label>
                        <input type="text" className="inputStyle" id="goodsName"  autoFocus="autoFocus"/>
                    </div>
                    <div>
                        <label className="location">详细描述：</label>
                        <input type="text" className="inputStyle" id="discription"/>
                    </div>
                    <div>
                        <label className="location">价格：</label>
                        <input type="text" className="inputStyle" id="price"/>
                    </div>
                    <div>
                        <label className="location">数量：</label>
                        <input type="text" className="inputStyle" id="count"/>
                    </div>
                    <div>
                        <label className="location">联系方式：</label>
                        <input type="text" className="inputStyle" id="tel"/>
                    </div>
                    <div>
                        <label className="location">照片：</label>
                        <input type="text" className="inputStyle" id="image"/>
                    </div>
                    <div>
                        <button type="submit" className="buttonType submitStyle" onClick={this.check.bind(this)}>提交</button>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    }
}

export default PostMessage;