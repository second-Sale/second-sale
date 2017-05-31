import request from "superagent";

export default store => next => action =>{
    if(action.type === "GETALLGOODS"){
        request.get("/getAllGoods")
            .end((err,res)=>{
                console.log('allGoods',res.body);
                next({type:"GETALLGOODS",data:res.body.goods});
            })
    }
    else{
        next(action);
    }
}