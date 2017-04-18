import {connect} from 'react-redux';
import Register from '../components/register.js';

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (data) => {
            dispatch({type:'REGISTER_COMMIT',data});
        }
    }
};
export default connect(() => {return {}},mapDispatchToProps)(Register);