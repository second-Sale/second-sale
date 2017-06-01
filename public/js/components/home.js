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
                    this.props.allGoods === undefined ? "ssss" : this.props.allGoods.map((good,index)=> {
                        console.log('good image',good.image);
                        return <div key={index}>
                            <img src={good.image} alt="image"/>
                            <span>{good.goodName}</span>
                        </div>
                    })

                }
            </div>
        </div>
    }
}

export default Home;