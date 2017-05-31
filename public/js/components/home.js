import React, {Component} from "react";
import Nav from "../containers/nav";

class Home extends Component{
    componentWillMount(){
        this.props.getAllGoods();
    }
    render(){
        return <div>
            <Nav/>
            <div>
                {
                    this.props.allGoods === undefined ? "ssss" : this.props.allGoods.map((good)=> {
                        document.getElementById("aaa").innerHTML = `${good.goodName}`;
                        document.getElementById('pre').src = `{good.image}`;
                    })

                }
                <div id="aaa"></div>
                <img src="" alt="图片" id="pre"/>
            </div>
        </div>
    }
}

export default Home;