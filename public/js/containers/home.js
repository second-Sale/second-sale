import {connect} from "react-redux";
import Home from "../components/home";

const mapStateToProps=(state)=>{
    console.log("state goods",state.home.goods);
    return {
        allGoods:state.home.goods
    }
};

const mapDispatchToProps=(dispatch)=>{
    return {
        getAllGoods:()=>{
            dispatch({type:"GETALLGOODS"});
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);