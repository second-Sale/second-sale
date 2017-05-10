import {connect} from 'react-redux';
import PostMessage from '../components/postMessage';

const mapStateToProps = (state)=> {
   return {
       isSaved:state.postMessage.isSaved
   }
};

const mapDispatchToProps = (dispatch)=>{
    return {
        onSubmit:(data)=>{
            dispatch({type:"POSTMESSAGE",data});
        }
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(PostMessage);