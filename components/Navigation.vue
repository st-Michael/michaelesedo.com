<template>
  <div class="navigation" id="nav">
    <div>
      <section>
        <div class="menu-wrapper">
          <NuxtLink class="logo" to="/">
            <p>Michael Esedo</p>
          </NuxtLink>
          <div>
            <div class="menu">
              <div>
                <ul>
                <li>
                 <!--  <nuxt-link to="http://localhost:3000/#portfolio">Portfolio</nuxt-link> -->
                 <a  href="https://michaelesedo.com/#services">Services</a>
                </li>
                <li class="item">
                  <!-- <nuxt-link to="#services">Services</nuxt-link> -->
                 
                  <a  href="https://michaelesedo.com/#portfolio">Portfolio</a>
                </li>
                <li class="item ">
                  <nuxt-link to="/consulting">Consulting</nuxt-link>
                </li>
                <li class="item">
                  <a target="_blank" href="https://techiesgarage.substack.com/p/unified-modeling-language-a-techies">Blog</a>
                </li>
              </ul>
              </div>
              <div>
                <a class="item button-secondary" target="_blank" href="https://topuniverse.org/coaching/cohort" rel="noopener">Start Learning</a>
              </div>
            </div>
          </div>
        </div>
        <div class="mobile-header">
          <NuxtLink class="logo" to="/">
            <p>Michael Esedo</p>
          </NuxtLink>
          <button class="open_toggle" @click="toggle"></button>
        </div>
      </section>

      <div class="menu-wrapper-mobile hidden" id="mobile-menu">
        <button class="close_toggle" @click="toggle">x</button>
        <div class="menu">
          <!-- <a class="item" href="#portfolio">Portfolio</a>
          <a class="item" href="#services">Services</a> -->
          <a class="item" href="https://michaelesedo.com/#services">Services</a>
          <a class="item" href="https://michaelesedo.com/#portfolio">Portfolio</a>
          <a class="item" href="/consulting">Consulting</a>
          <a class="item" target="_blank" href="https://techiesgarage.substack.com/p/unified-modeling-language-a-techies"> Blog</a>
          <a class="item" target="_blank" href="https://topuniverse.org/coaching/cohort">Learn for free</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  methods: {
    toggle(e) {
      const modal = document.querySelector("#mobile-menu");
      const body = document.querySelector("body");
      modal.classList.toggle("hidden");
      if (!modal.classList.contains("hidden")) {
        // Disable scroll
        body.style.overflow = "hidden";
      } else {
        // Enable scroll
        body.style.overflow = "auto";
      }
    },
    handleScroll() {
      let myNav = document.getElementById("nav");
      window.onscroll = function () {
        if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
          myNav.classList.add("scroll");
        } else {
          myNav.classList.remove("scroll");
        }
      };
    }
  },
  computed: {
    routerPath() {
      return this.$route.name.toLowerCase();
    },
  },
  created() {
    if (process.client) {
      window.addEventListener('scroll', this.handleScroll);
    }
  },
};
</script>

<style scoped>
.navigation {
  position: sticky;
  width: 100%;
  top: 0;
  z-index: 9999;
}

.menu ul {
  padding: 0;
  margin: 0;
  list-style: none;
  position: relative;
  display: flex;
  align-items: center;
}

.menu ul li {
  display: inline-block;
}

.menu a {
  display: block;
  text-decoration: none;
}

/* Fisrt Tier Dropdown */
.menu ul li {
  float: none;
  display: list-item;
  position: relative;
}

.menu ul > li {
  width: 110px;
  padding: 10px 0px;
  border-radius: var(--border-radius);
}

.scroll {
  background-color: rgba(0, 0, 0, 0.698);
  transition: all 1s ease-in-out;
}

.logo {
  place-items: center;
  gap: 10px;
  display: flex;
  position: relative;
}

.logo p {
  font-size: 18px !important;
  font-family: "TWK Everett", "Inter", sans-serif;
}

.profile-wrapper {
  display: flex;
  gap: 15px;
  place-items: center;
}

.user-container {
  display: grid;
  grid-template-columns: 20% 80%;
  gap: 15px;
  align-items: center;
}

.avatar {
  border-radius: var(--border-radius);
}

/* menu bar */
.menu-wrapper {
  height: 80px;
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
 /*  background-color: var(--input-color); */
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  background-color: rgba(197, 192, 192, 0.233);
  padding: 30px;
  border-radius: 50px;
}

.menu {
  display: flex;
  width: 100%;
  column-gap: 25px;
  justify-content: center;
}

.menu .item {
  flex-basis: 120px;
  display: flex;
  justify-content: center;
  place-items: center;
  border-radius: var(--border-radius);
  font-size: 14px;
}

.new::after {
  content: " ";
  top: -10px;
  border-radius: 50%;
  width: 5px;
  height: 5px;
  background-color: cyan;
  position: relative;
}

.menu-wrapper-mobile {
  display: none;
  background-color: rgba(15, 15, 15, 0.938);
}

.mobile-header {
  display: none;
}

.active {
  background: var(--modal-color);
  height: 50px;
  filter: invert();
  box-shadow: 3px 3px 0px rgb(46, 42, 42);
}

.menu .item img {
  height: 17px;
  width: 17px;
}

.close_toggle {
  position: absolute;
  right: 20px;
  font-size: 28px;
  top: 18px;
  width: 20px;
  height: 20px;
  z-index: 9999;
  background: none;
  color: rgb(255, 255, 255);
  border: none;
}

/* mobile menu  */
@media (max-width: 1000px) {
  .mobile-header {
    display: none;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid rgba(255, 255, 255, 0.05);
    background-color: rgba(197, 192, 192, 0.233);
    padding: 30px;
    border-radius: 50px;
    margin-top: 20px;
  }

  .user-details {
    display: none;
  }

  .menu-wrapper-mobile {
    display: flex;
    position: absolute;
    top: 0;
    bottom: 0;
    flex-direction: column;
    z-index: 999;
    height: 100vh;
    width: 100%;
    gap: 20px;
  
  }

  .hidden {
    display: none;
  }

  .menu-wrapper {
    display: none;
  }

  .menu-wrapper {
    height: 50px;
    width: 55%;
    position: relative;
    top: 0;
    left: 0;
    height: 100vh;
    background-color: var(--input-color);
    border-top: 1px solid rgba(255, 255, 255, 0.05);
  }

  .menu {
    margin-top: 4em;
    display: grid;
    grid-template-rows: 1fr;
    gap: 25px;
    padding: 20px;
    justify-content: center;
  }

  .profile-wrapper-mobile {
    width: 100%;
    padding-top: 60px;
    padding-left: 20px;
  }

  .menu .item {
    flex-basis: 300px;
    display: flex;
    justify-content: center;
    height: 50px;
    gap: 10px;
    border-radius: var(--border-radius);
    color: rgb(255, 254, 254);
    font-weight: 300 !important;
    font-family: "TWK Everett", "Inter", sans-serif;
    font-size: 35px !important;
  }

  .active {
    background: var(--modal-color);
    height: 50px;
    filter: invert();
    box-shadow: none !important;
  }

  .open_toggle {
    width: 20px;
    height: 20px;
    background: url("../assets/icons/hamburger.svg");
    background-position: center;
    background-size: cover;
    border: none;
  }
}
</style>
