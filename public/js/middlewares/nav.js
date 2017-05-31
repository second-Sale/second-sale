import request from 'superagent';

export default store => next => action =>{
    console.log('logout',action.type);
    if(action.type === 'LOGOUT'){
        request.post("/logout")
            .end((err,res) => {
                next({type:'USERINFORMATION',judge:res.body});
        })
    }else{
        next(action);
    }
}
