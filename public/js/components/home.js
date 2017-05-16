import React,{Component} from "react";
import Nav from "./nav";

class Home extends Component{

    componentDidUpdate(){
        this.props.getAllGoods();
        var goods = this.props.allGoods;
        console.log("component",this.props);
    }


    render(){
        return <div>
            <Nav/>
            
        </div>
    }
}

export default Home;