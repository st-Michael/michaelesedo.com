<template>
  <div>
    <Hero />
    <Who />
    <Services />
    <Achievments />
    <Portfolio/>
    
  </div>
</template>
  
<script>
import Hero from "./Hero.vue";
import Who from "./Who.vue";
import Services from './Services.vue'
import Portfolio from './Portfolio.vue'
import Product from "./Product.vue"
import Achievments from "./Achievments.vue";
/* mport Badge from "~/components/Badge.vue"; */
definePageMeta({
    layout: 'web'
  })
export default {
  components: {
    Hero,
    Who,
    Services,
    Portfolio,
    Product,
    Achievments,
   
  },
};
</script>
  
<style scoped>

</style>
  