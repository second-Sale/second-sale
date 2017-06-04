import {connect} from 'react-redux';
import PostMessage from '../components/postMessage';

const mapStateToProps = (state)=> {
    console.log("image",state.ImageUpload.imageUpload);
   return {
       isSaved:state.postMessage.isSaved,
       imageUpload:state.ImageUpload.imageUpload
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

