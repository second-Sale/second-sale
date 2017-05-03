import React, {Component} from "react";
import Header from "../containers/header";
import Footer from "../containers/footer"
import {Link, browserHistory} from 'react-router';

class Register extends Component {
    addUser(){
        var userName = document.getElementById("userName").value;
        var password = document.getElementById("password").value;
        var confirm = document.getElementById("confirm").value;
        if(userName === ''){
            document.getElementById('warn').innerHTML = '请输入用户名';
        }else if(password === ''){
            document.getElementById('warn').innerHTML = '请输入密码';
        }else if(confirm === ''){
            document.getElementById('warn').innerHTML = '请输入确认密码';
        }else if(password !== confirm){
            document.getElementById('warn').innerHTML = '两次输入的密码不同，请重新输入';
        }else{
            this.props.onSubmit({userName,password});
        }
    }
    componentDidUpdate(){
        let isExit = this.props.isExit;
         console.log("isExist", this.props.isExit);
        if(isExit){
            console.log("isExit=1:",this.props.isExit);
            document.getElementById('warn').innerHTML = '用户已存在';
        }else{
            browserHistory.push('/home');
        }
    }
    render() {
        return <div>
            <Header/>
            <div className="backgroundImg">
                <div className="main">
                    <center>
                        <div className="border">
                            <h3 className="headline">注册</h3>
                            <div>
                                <span className="warning" id="warn"></span>
                            </div>
                            <div>
                                <input type="text" className="inputStyle" id="userName" placeholder="请输入用户名" name="userName" autoFocus="autoFocus"/>
                            </div>
                            <div>
                                <input type="password" className="inputStyle" id="password" placeholder="请输入密码" name="password"/>
                            </div>
                            <div>
                                <input type="password" className="inputStyle" id="confirm" placeholder="请再次输入密码" name="confirm"/>
                            </div>
                            <div>
                                <button type="submit" className="buttonType" onClick={this.addUser.bind(this)}>注册</button>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
            <Footer/>
        </div>
    }

}

export default Register;