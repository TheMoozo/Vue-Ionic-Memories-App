import {createStore} from 'vuex';

const Store=createStore({
    state(){
        return{
        memories: [
            {
              id: "m1",
              image:
                "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
              title: "Qatar trip",
              description: "Nice trip",
            },
            {
              id: "m2",
              image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQf6uTIxLAiW2tKjSRSYf6zTRpnxc6kriKQA&usqp=CAU",
              title: "Murree trip",
              description: "Great trip",
            },
            {
              id: "m3",
              image:
                "https://images.unsplash.com/photo-1590486804619-4d96e39c1f29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
              title: "Kashmir trip",
              description: "Wonderful trip",
            },
          ]
        
    };
},
mutations:{
addMemory(state,memoryData){
  const newMemory={
    id:new Date().toString(),
    title:memoryData.title,
    image:memoryData.imageUrl,
    description:memoryData.description
  };
  state.memories.unshift(newMemory);
}
},actions:{
  addMemory(context,memoryData){
    context.commit('addMemory',memoryData);

  }
},
    getters:{
        getMemories(state){
            return state.memories;
        },
        getMemory(state){
            return (memoryId)=>{
                return state.memories.find((memory)=>memory.id==memoryId);
            };
        }
    }
});

export default Store;