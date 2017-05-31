import React,{Component} from 'react';
import {Link, browserHistory} from 'react-router';

class Nav extends Component{
    logout(){
        this.props.logoutUser();
        browserHistory.push("/home");
    }
    Login() {
        browserHistory.push("/login")
    }

    Sign() {
        browserHistory.push('/register')
    }
    Home() {
        browserHistory.push("/home")
    }
    publish(){
        browserHistory.push("/postMessage")

    }
    render(){
        console.log('nav component',this.props.loginUser);
        return <div>
            <div className="tip">
                <span className="topic">二手市场，值得选择！</span>
                <div id="userInformation" className={this.props.loginUser ?'hidden':''}>
                    <span className="login" onClick={this.Login.bind(this)}>登录</span>
                    <span onClick={this.Sign.bind(this)}>注册</span>
                </div>
                <div id="userInformation" className = {this.props.loginUser ?'':'hidden'}>
                    <span className="login">{this.props.loginUser+', 你好！'}</span>
                    <span onClick={this.logout.bind(this)}>登出</span>
                </div>
            </div>
            <div className="logo">
                <h1 className="logoName">二手交易市场</h1>
            </div>
            <div>
                <ul className="nav">
                    <li onClick={this.Home.bind(this)}>首页</li>
                    <li onClick={this.publish.bind(this)}>发布信息</li>
                    <li>个人中心</li>
                </ul>
            </div>
        </div>
    }
}

export default Nav;