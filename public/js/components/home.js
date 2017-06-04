import React, {Component} from "react";
import Nav from "../containers/nav";

class Home extends Component{
    componentWillMount(){
        this.props.getAllGoods();
    }
    render(){
        return <div>
            <Nav/>
            <div className="listType">
                {
                    this.props.allGoods === undefined ? "ssss" : this.props.allGoods.map((good,index)=> {
                        console.log('good image',good.image);
                        return <div key={index}>
                            <img src={good.image} alt="image" className="imgStyle"/>
                            <span className="typeface">{good.goodName}</span>
                        </div>
                    })

                }
            </div>
        </div>
    }
}

export default Home;