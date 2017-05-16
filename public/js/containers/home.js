import {connect} from "react-redux";
import Home from "../components/home";

const mapStateToProps=(state)=>{
    return {}
};

const mapDispatchToProps=(dispatch)=>{
    return {
        getAllGoods:()=>{
            dispatch({type:"GETALLGOODS"});
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Home);