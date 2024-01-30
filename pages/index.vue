<template>
  <div>
    <Hero />
    <About />
    <Who />
    <Service />
    <Achievments />
    <Portfolio/>
    
  </div>
</template>
  
<script>
import Hero from "./index/Hero.vue";
import Who from "./index/Who.vue";
import Service from './index/Servic.vue'
import Portfolio from './index/Portfolio.vue'
import Product from "./index/Product.vue"
import Achievments from "./index/Achievments.vue";
import About from "./index/About.vue";
/* mport Badge from "~/components/Badge.vue"; */
definePageMeta({
    layout: 'web'
  })
export default {
  components: {
    Hero,
    Who,
    Service,
    Portfolio,
    Product,
    Achievments,
    About
   
  },
};
</script>
  
<style scoped>

</style>
  