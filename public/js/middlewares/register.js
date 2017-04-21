import request from "superagent";

export default store => next => action => {
    console.log(action.data);
    if(action.type === 'REGISTER_COMMIT'){
        if(action.data.userName === ''){
            alert('请输入用户名');
        }else if(action.data.password === ''){
            alert('请输入密码');
        }else if(action.data.confirm === ''){
            alert('请输入确认密码');
        }else if(action.data.password !== action.data.confirm){
            alert('两次输入的密码不同，请重新输入');
        }else {
            request.post('/addUser')
                .send({userName: action.data.userName, password: action.data.password})
                .end((err, res)=> {
                    console.log(res.body.value);
                    next({type: 'REGISTER_COMMIT', data: res.body.value})
                })
        }
        }
    else {
        next(action);
    }
}