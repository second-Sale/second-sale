import {connect} from 'react-redux';
import Image from '../components/imageUplond';

const mapStateToProps=(state)=>{
    return {
        imageUpload:state.ImageUpload.imageUpload
    }
};
const mapDispatchToProps=(dispatch)=>
{
    return{
        uploadImage:(file)=> {
            dispatch({type:'uploadImage',file});
        }
    }
};


export default connect(mapStateToProps,mapDispatchToProps)(Image);
