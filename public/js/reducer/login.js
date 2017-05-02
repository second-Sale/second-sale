module.exports = ((state={judge:""},action)=>{
    switch(action.type){
        case 'LOGIN':{
            console.log("reducer",action.judge);
            return({judge:action.judge});
        }
        default: return state;
    }
});