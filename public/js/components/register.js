import React, {Component} from "react";
import Header from "../containers/header"

class Register extends Component {
    render() {
        return <div>
            <Header/>
            <div className="backgroundImg">
                <div className="main">
                    <center>
                        <div className="border">
                            <h3 className="headline">注册</h3>
                            <div>
                                <input type="text" className="inputStyle" id="userName" placeholder="请输入用户名"/>
                            </div>
                            <div>
                                <input type="password" className="inputStyle" id="password" placeholder="请输入密码"/>
                            </div>
                            <div>
                                <input type="password" className="inputStyle" id="confirm" placeholder="请再次输入密码"/>
                            </div>
                            <div>
                                <button type="submit" className="buttonType">注册</button>
                            </div>
                        </div>
                    </center>
                </div>
            </div>
        </div>
    }

}

export default Register;