<template>
    <div class="consulting">
        <section class="mt-6">
            <h1 class="mb-2">Consulting Plans</h1>
            <p>Hello 👋🏾, let's create a solution to that problem</p>
            <div class="consulting-grid mt-5">
                <a target="_blank" href="">
                    <div class="card-con">
                        <img loading="lazy"
                            src="https://images.unsplash.com/photo-1612831661941-254341b885e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1925&q=80" />
                        <div class="details">
                            <h2 class="mb-1">30 minutes session</h2>
                            <h1 class="mb-2">$50</h1>
                            <div class="item mb-2" v-for="(i, index) in plan1" :key="index">
                                <img loading="lazy" src="@/assets/icons/check.svg" />
                                <p>{{ i.item }}</p>
                            </div>
                        </div>
                    </div>
                </a>
                <a target="_blank" href="">
                    <div class="card-con">
                        <img loading="lazy"
                            src="https://images.unsplash.com/photo-1621570072081-b780ce69bff0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" />
                        <div class="details">
                            <h2 class="mb-1">1 hour session</h2>
                            <h1 class="mb-2">$100</h1>
                            <div class="item mb-2" v-for="(i, index) in plan2" :key="index">
                                <img loading="lazy" src="@/assets/icons/check.svg" />
                                <p>{{ i.item }}</p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    </div>
</template>

<script>
const plan1 = [
    {
        item: "Software engineering"
    },
    {
        item: "Microservices & Distributed Systems"
    },
    {
        item: "Systems Design"
    }
]

const plan2 = [
    {
        item: "IT Strategies"
    },
    {
        item: "Microservices & Distributed Systems"
    },
    {
        item: "Software Architecture & Systems Design"
    },
    {
        item: "Cloud & Edge Computing"
    },
    {
        item: "Serverless Computing"
    },
    {
        item: "Team Topologies"
    }
]

definePageMeta({
    layout: 'web'
  })

export default {
    data() {
        return {
            plan1,
            plan2
        }
    }
}
</script>

<style scoped>

.card-con {
  background: linear-gradient(
    118.51deg,
    rgba(99, 99, 99, 0.151) 3.99%,
    rgba(107, 107, 107, 0.144) 111.18%
  ) !important;
  border: .5px solid rgba(255, 255, 255, 0.603) !important;
  /* border: none !important; */
  box-sizing: border-box;
  border-radius: 50px;
}
    
.consulting .consulting-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    /* display: flex;
    flex-direction: row;
    justify-content: center; */
    gap: 50px;
    position: relative;
    height: 100%;
}

.consulting .consulting-grid>div {
    width: 100%;
    height: 100%;
    border-radius: var(--input-border-radius) !important;
}

.consulting .consulting-grid> a {
    width: 100%;
    height: 100%;
    border-radius: var(--input-border-radius) !important;
}

.consulting .consulting-grid .details {
    padding: 20px;
}

.consulting .consulting-grid img {
    height: 200px;
    object-fit: cover;
    /* border-radius: var(--input-border-radius) var(--input-border-radius) 0 0; */
    border-radius: 50px;
}

.details .item {
    display: flex;
    gap: 5px;
    justify-content: flex-start;
    align-items: flex-start;
}

.details .item img {
    width: 15px;
    height: 15px;
    object-fit: cover;
}
</style>