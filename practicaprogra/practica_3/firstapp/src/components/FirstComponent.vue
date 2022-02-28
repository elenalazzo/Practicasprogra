<template>
    <div class="component">
        <h1>Mi primer componente</h1>
        <h2>{{x}},{{y}}</h2>

        <h1 v-on:mousemove="xy" @mouseover="mouseOver" @mouseout= "mouseOut"
        v-bind:style="[alert-primary,{'fontSize':fontSize + 'px'}]">
        Programacion Computacional I - Eventos Vuejs
        </h1>

        <h3>Tamaño actual: {{fontSize}}</h3>

        <button v-on:click="fontSize++">Incrementar</button>
        <button v-on:click="fontSize--">Disminuir</button>
    </div>
</template>

<script>
export default {
  name: 'FirstComponent',
  data(){
      return{
          x:0,
          y:0,
          message: '',
          fontSize: 20
      }
  },
  methods:{
      mouseOver(){
          this.message= 'IN'
      },
      mouseOut(){
          this.message= 'OUT'
      },
      xy(event){
          this.x=event.offsetX;
          this.y=event.offsetY;
      }
  }
}
</script>