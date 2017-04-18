import request from "superagent";
export default store => next => action => {
    console.log(action.data);
    if(action.type === 'REGISTER_COMMIT'){
            request.post('/addUser')
            .send({userName:action.data.userName,password:action.data.password})
                .end((err,res)=>{
                    console.log(res.body.value);
                    next({type:'REGISTER_COMMIT',data:res.body.value})
            })
        }
    else {
        next(action);
    }
}