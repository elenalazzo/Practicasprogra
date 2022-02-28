Vue.component('example',{
    data: function(){
        return{
            counter:0
        }
    },
    template:'<div><button v-on:click="counter++">Click here</button><span>{{counter}}</span></div>'
})

var vm = new Vue({
    el: '#root'
})

var vm1 = new Vue({
    el: '#master'
})