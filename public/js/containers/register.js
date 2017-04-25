import {connect} from 'react-redux';
import Register from '../components/register.js';
const mapStateToProps = (state) =>{
    console.log(state);
    return {
       isExit: state.addUser.isExitUser
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch({type:'REGISTER_COMMIT',data});
        }
    }
};
export default connect(mapStateToProps,mapDispatchToProps)(Register);