import React,{Component} from 'react';
import {Link, browserHistory} from 'react-router';

class Home extends Component{
    render(){
        return <div>
            <div className="tip">
                <span className="topic">二手市场，值得选择！</span>
                <div className="userInformation">
                    <Link to="Login"><span className="login" linkRoute>登录</span></Link>
                    <Link to="Register"><span>注册</span></Link>
                </div>
            </div>
            <div className="logo">
                <h1 className="logoName">二手交易市场</h1>
            </div>
        </div>
    }
}

export default Home;