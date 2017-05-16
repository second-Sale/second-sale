import React,{Component} from "react";
import Nav from "./nav";

class Home extends Component{

    componentDidUpdate(){
        this.props.getAllGoods();

    }

    render(){
        return <div>
            <Nav/>

        </div>
    }
}

export default Home;