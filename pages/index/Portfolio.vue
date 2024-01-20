<template>
    <div id="portfolio" class="portfolio">
    <section>
    <div class="mt-8 mb-8">
      <div>
        <h1 class="mb-5">Portfolio & Investments</h1>
      </div>
      
      <div class="portfolio-grid">
        <div class="portfolio-item glass" v-for="(item, index) in portfolio" :key="index">
          <a target="blank" :href="item.link">
            <div class="">
              <img loading="lazy" :src="item.image" />
              <div class="">
                <div class="details">
                  <h3 class="mb-1">{{ item.platform }}</h3>
                  <p class="">{{ item.position }}</p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  </div>
  </template>
  
  <script>
  /* import { portfolio } from "~/data/portfolio.js"; */
  
  const portfolio =  [
  {
    position: `Instructor & Partner`,
    platform: `Top Universe`,
    link: `https://topuniverse.org`,
    image: `https://topuniverse.org/ogimage.png`
  },
  {
    position: `Administrative Lead`,
    platform: `The Boltcliq Company`,
    link: `https://boltcliq.com`,
    image: `https://images.unsplash.com/photo-1655721533500-c73a495dbcb3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80`
  },
  {
    position: `Founding Partner`,
    platform: `Techies Garage`,
    link: `https://techiesgarage.org`,
    image: `https://techiesgarage.org/ogimage.png`
  },
  {
    position: `Founding Partner`,
    platform: `Swiftgo`,
    link: `https://swiftgo.co`,
    image: `https://images.unsplash.com/photo-1556740714-a8395b3bf30f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80`
  },  
  /* {
    position: `Founding Partner`,
    platform: `Scifi Lotam Ltd.`,
    link: `https://scifilotam.cpm`,
    image: require("@/assets/images/portfolio/SCIFILOTAM.png")
  },
  {
    position: `Founding Partner`,
    platform: `Infocolors`,
    link: `https://infocolors.com`,
    image: require("@/assets/images/portfolio/INFOCOLORS.png")
  }, */
];

  export default {
    layout: 'web',
    data() {
      return {
        portfolio: portfolio,
      };
    },
  };
  </script>
  
  <style scoped>
  .portfolio {
    border-bottom: .5px solid var(--white);
    padding-bottom: 2em;
  }
  .icon {
    font-size: 25px;
  }
  
  .portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px,1fr));
    gap: 30px;
    width: 100%;
  }
  
  .portfolio-item {
    position: relative;
    align-items: center;
    height: 300;
    border-radius: var(--input-border-radius) !important;
  }

  .portfolio-item .details {
    padding: 30px;
  }
  
  .portfolio-item img {
    border-radius: var(--input-border-radius) var(--input-border-radius) 0 0;
    object-fit: cover;
    height: 200px;
  }
  
  @media (max-width: 768px) {
    .portfolio-item {
      flex-basis: 150px;
      border-radius: var(--border-radius);
    }
  }
  
  a {
    font-size: 12px;
    color: rgb(172, 172, 172);
  }
  
  .icons {
    width: 50px;
    height: 50px;
    font-size: 20px !important;
    border-radius: 50%;
    border: 2px dotted rgba(255, 255, 255, 0.097);
    padding: 10px;
  }
  </style>
  