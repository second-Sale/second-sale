import {connect} from 'react-redux';
import Nav from '../components/nav';

const mapStateToProps=(state)=>{
    return {
        loginUser:state.login.loginUser
    }
};

export default connect(mapStateToProps,()=>{return {}})(Nav);