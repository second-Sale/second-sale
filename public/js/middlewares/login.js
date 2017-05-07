import request from "superagent";

export default store => next => action =>{
  if(action.type === "LOGIN"){
      request.post("/login")
          .send({userName:action.data.userName,password:action.data.password})
          .end((err,res)=>{
              console.log(res.body);
              next({type:"LOGIN",judge:res.body});
          })
  }else{
      next(action);
  }
}