<template>
  <div>

    <TransitionGroup name="list" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
          <img class="herobg" :src="currentImg" />
      </div>
    </TransitionGroup>

    <section class=" hero">
      <div class="spin">
        <!-- <img class="avatar-wrapper" src="@/assets/images/rotate.svg" /> -->
        <img loading="lazy" class="avatar" :src="me" />
      </div>

      <div>
        <div class="mb-2 socials">
          <a target="_blank" href="https://www.linkedin.com/in/michael-esedo">
            <img src="@/assets/icons/social/linkedin.svg"/>
            Linkedin
          </a>
          <a target="_blank" href="https://twitter.com/Simply_st_mike">
            <img src="@/assets/icons/social/twitter.svg"/>
            Twitter
          </a>
          <a target="_blank" href="https://github.com/st-Michael">
            <img src="@/assets/icons/social/github.svg"/>
            Github
          </a>
        </div>
        <h1 class="mb-3">Michael <br> Esedo.</h1>
        <p class="mb-6">Software Engineer | SaaS Infrastructure | Generative AI Enthusiast / Engineer</p>
        <div class="button-flex mb-3 cta">
          <a  href="/consulting">
            Consultation 
            <img src="@/assets/icons/link.svg" alt="" />
          </a>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import img1 from "@/assets/images/hero/herobg.png"
import img2 from "@/assets/images/hero/herobgc.png"
import me from "@/assets/images/avatar/me.png"

const images = [ img1, img2]

export default{
  data() {
    return {
      images: images,
      timer: null,
      currentIndex: 0,
      me
    }
  },
  mounted: function() {
    this.startSlide();
  },

  methods: {
    startSlide: function() {
      this.timer = setInterval(this.next, 4000);
    },

    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },

  computed: {
    currentImg: function() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    }
  }
};


</script>

<style scoped>
.hero {
  display: flex;
  /* place-items: center; */
  z-index: 100;
  justify-content: space-between;
  flex-direction: row-reverse;
  gap: 20px;
  position: relative;
  height: 71vh;
  margin-top: 140px;
}

.cta a {
  font-size: 20px;
  color: var(--white);
  display: flex;
  gap: 5px;
  place-items: center;
  border-radius: var(--border-radius);
  padding: 15px;
  background-color: #585454ab;
}

.cta a:hover {
  background-color: #272727;
}


.herobg{
  position: absolute;
  left: 0px;
  top: 0px;
  z-index: -1;
  width: 100%;
  height: 100%;
  -webkit-filter: blur(10px); /* Safari 6.0 - 9.0 */
  filter: blur(10px);
  margin: 0;
 
}

.cta img {
  height: 30px;
  width: 30px;
}

.spin {
  height: calc(14rem);
  width: calc(14rem);
 /*  position: absolute;
  top: 10px;
  left: 10px; */

}

.avatar {
  border-radius: 90px;
  object-position: center;
  padding: 30px;
  border: 5px solid rgba(217, 217, 217, 0.4);
  height: 100%;
  width: 100%;
}

.avatar-wrapper {
  position: absolute;
  -webkit-animation: spin 25s linear infinite;
  -moz-animation: spin 25s linear infinite;
  animation: spin 25s linear infinite;
  object-fit: cover;
  padding: 10px;
}

@-moz-keyframes spin {
  100% {
    -moz-transform: rotate(360deg);
  }
}

@-webkit-keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

h1 {
  color: white;
  line-height: .9;
  font-size: calc(9em);
}

p {
  font-size: 20px;
  line-height: 1.3;
}

.socials {
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
}

.socials img {
  height: 20px;
  width: 20px;
  object-fit: cover;
}

.socials a {
  font-size: 16px;
  display: flex;
  gap: 5px;
  place-items: center;
  padding: 5px 8px;
  border-radius: var(--border-radius);
}

.socials a:hover {
  background-color: rgba(255, 255, 255, 0.109);
}

.icons {
  width: 12px;
  height: 12px;
}

@media (max-width: 1000px) {
  .hero {
    padding-top: 2em;
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    height: auto;
    margin-top: 30px;
  }

  .herobg{
    height: 100%;
  }

  .hero .spin {
    position: relative;
    width: 250px;
    height: 250px;
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 3em
  }



  h1 {
    width: 100%;
    line-height: 1.2;
    font-size: 50px;
  }

  h3 {
    width: 100%;
    line-height: 1.2;
    font-size: 20px;
  }

  .hero p {
    width: 90%;
  }
}


.hero .cta_blog {
  height: 65px;
  border-radius: var(--border-radius);
  background-image: linear-gradient(117deg, #232222 8%, #323232 93%);
  color: white;
  display: grid;
}

.hero .cta_github {
  height: 65px;
  display: grid;
  opacity: 0.73;
  border-radius: var(--border-radius);
  background-color: #f0f0f0;
}


@media (max-width: 1000px) {
  .hero {
    height: auto;
  }

  .side-image {
    width: 300px;
    z-index: -1;
  }

  .hero p {
    width: 100%;
  }

  .hero .avatar {
    height: 100%;
    width: 100%;
  }
}

.list-enter-active,
.list-leave-active {
  transition: opacity 5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}
</style>
