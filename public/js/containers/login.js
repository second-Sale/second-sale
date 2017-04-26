import {connect} from "react-redux";
import Login from "../components/login";

const mapDispatchToProps = (dispatch) => {
   return {
       onJudge:(data)=>{
           dispatch({type:"LOGIN",data});
       }
   }
};


export default connect(()=>{return {}},mapDispatchToProps)(Login);
