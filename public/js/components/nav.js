import React,{Component} from 'react';
import {Link, browserHistory} from 'react-router';
import PostMessage from '../containers/postMessage';

class Nav extends Component{
    logout(){
        this.props.logoutUser();
    }
    render(){
        return <div>
            <div className="tip">
                <span className="topic">二手市场，值得选择！</span>
                <div id="userInformation" className={this.props.loginUser ?'hidden':''}>
                    <Link to="Login"><span className="login">登录</span></Link>
                    <Link to="Register"><span>注册</span></Link>
                </div>
                <div id="userInformation" className = {this.props.loginUser ?'':'hidden'}>
                    <span className="login">{this.props.loginUser+', 你好！'}</span>
                    <Link to="home"><span onClick={this.logout.bind(this)}>登出</span></Link>
                </div>
            </div>
            <div className="logo">
                <h1 className="logoName">二手交易市场</h1>
            </div>
            <div>
                <ul className="nav">
                    <li>首页</li>
                    <Link to="PostMessage"><li>发布信息</li></Link>
                    <li>个人中心</li>
                </ul>
            </div>
        </div>
    }
}

export default Nav;