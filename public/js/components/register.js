import React, {Component} from "react";
import Header from "../containers/header";
import Footer from "../containers/footer"

class Register extends Component {
    addUser(){
        var userName = document.getElementById("userName").value;
        var password = document.getElementById("password").value;
        var confirm = document.getElementById("confirm").value;
        this.props.onSubmit({userName,password,confirm});
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
                                <input type="text" className="inputStyle" id="userName" placeholder="请输入用户名"/>
                            </div>
                            <div>
                                <input type="password" className="inputStyle" id="password" placeholder="请输入密码"/>
                            </div>
                            <div>
                                <input type="password" className="inputStyle" id="confirm" placeholder="请再次输入密码"/>
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