import React, {Component} from "react";
import Header from "../containers/header";
import Footer from "../containers/footer";
import {Link, browserHistory} from 'react-router';

class Login extends Component{

    judge(){
        var userName = document.getElementById("userName").value;
        var password = document.getElementById("password").value;
        console.log(typeof(password));
        if(userName ===""){
            document.getElementById("warn").innerHTML = "用户名不能为空";
        }else if(password === ""){
            document.getElementById("warn").innerHTML = "密码不能为空";
        }else{
            this.props.onJudge({userName,password});
        }
    }

    componentDidUpdate(){
        var isRight=this.props.isRight;
        if(isRight === "0"){
            document.getElementById("warn").innerHTML = "用户不存在";
        }else if(isRight === "-1"){
            document.getElementById("warn").innerHTML = "密码错误";
        }else{
            browserHistory.push('/home');
        }
    }

    render(){
        return <div>
            <Header/>
            <div className="backgroundImg">
                <div className="main">
                    <center>
                        <div className="border">
                            <h3 className="headline">登录</h3>
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
                                <button type="submit" className="buttonType" onClick={this.judge.bind(this)}>登录</button>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
            <Footer/>
        </div>
    }
}

export default Login;
