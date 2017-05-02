import {connect} from "react-redux";
import Login from "../components/login";

const mapStateToProps = (state)=> {
    console.log(state.login.judge)
     return {
         isRight:state.login.judge
     }
};

const mapDispatchToProps = (dispatch) => {
   return {
       onJudge:(data)=>{
           dispatch({type:"LOGIN",data});
       }
   }
};


export default connect(mapStateToProps,mapDispatchToProps)(Login);
