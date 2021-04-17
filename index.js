const app = Vue.createApp({
    data() {
    return {
        name1:""
    }
  },
methods:{
    formSubmit(value){
this.name1=value
    }
}

})

app.component('comp-tag', {
    data(){
        return{
infos:[],
information:{
    name:"",
    email:"",
    phone:"",
    msg:""
}
        }
    },
    
   
 methods:{
    updateValue () {
    this.$emit('parent', this.information);
    console.log(this.information)
    }
},
// update:
//     },
  template: 
`<input v-model="information.name" >
<input v-model="information.email" >
<input v-model="information.phone" > 
<input v-model="information.msg" >
<button @click="updateValue"> Enter </button> 
<div v-if="!Object.entries(information).length">
            Now you see me
          </div>
          <div v-else>
            Now you don't
          </div>`
})
app.mount('#comp-tag-demo')