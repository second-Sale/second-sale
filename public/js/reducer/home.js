module.exports = ((state={},action)=>{
    switch(action.type){
        case 'GETALLGOODS':{
            console.log("reducer allgoods",action.data);
            return {goods:action.data}
        }
        default:return state;
    }
});