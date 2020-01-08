import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)
const state={
  todolist:[{'name':"小明",'do':"吃饭",'checked':true,"id":"1"},
    {'name':"小刚",'do':"睡觉",'checked':true,"id":"2"},
    {'name':"小强",'do':"打豆豆",'checked':true,"id":"3"},
    {'name':"小张",'do':"吃饭",'checked':true,"id":"4"}]
};
const getters={

};
const mutations={
deletee(state,index){
  for(var i=0;i<state.todolist.length;i++){
    if(state.todolist[i].id==index){
      state.todolist.splice(i,1)
    }
}},
  add(state,data){
  state.todolist.push(data)
  }
};
const actions={
deletee(context,index){
  /*for(var i=0;i<context.state.todolist.length;i++){
    if(context.state.todolist[i].id==index){
      context.todolist.splice(i,1)
    }*/
  context.commit("deletee",index)
  },
  add(context,data){
  context.commit("add",data)
  }
}


const store=new Vuex.Store(
  {state,getters,mutations,actions}
);
export default store
