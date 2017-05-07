module.exports = ((state={judge:"",loginUser:''},action)=>{
    switch(action.type){
        case 'LOGIN':{
            console.log("reducer",action.judge);
            return({judge:action.judge.isTrue,loginUser:action.judge.user});
        }
        default: return state;
    }
});