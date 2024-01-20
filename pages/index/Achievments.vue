<template>
  <div class="page">
    <section class="container-grid">
      <div class="container white text-black">
          <div class="grid">
            <p>Experience</p>
            <h1>Software Engineer (7+ years)</h1>
          </div>
      </div>
      <div class="container white text-black">
          <div class="grid">
            <p>Core Stack</p>
            <h1>AWS, Python, Typescript, NodeJS, React, VueJS, PHP</h1>
          </div>
      </div>
      <div class="container white text-black">
          <div class="grid">
            <p>Proficiency</p>
            <h1>AWS Cloud, Cloudflare, API Design, Systems Design, Software Architecture, Distributed Systems, Microservices</h1>
          </div>
      </div>

      <div class="container white text-black">
          <div class="grid">
            <p>Achievements</p>
            <h1>Instructor/Partner @topuniverse, Administrative Lead @boltcliq, Building @swiftgo, Co-founder @infocolors, Co-founder @techiesgarage</h1>
          </div>
      </div>

      <div class="container white text-black">
          <div class="grid">
            <p>Recent Interests</p>
            <h1>Generative AI, Machine learning, Serverless Computing & Distributed Systems</h1>
          </div>
      </div>
      
    </section>
  </div>
</template>

<style scoped>

.grid {
  display: grid;
  gap: 10px;
  margin: 50px 0px;
}

.container-grid {
  display: grid;
  gap: 30px;
  position: relative;
  padding-top: 5em;
}

.container {
  flex: 1;
  display: grid;
  align-items: center;
  width: 100%;
  border-radius:200px !important;
  filter: drop-shadow(0px 7px 29px rgba(100, 100, 111, 0.11));
  padding: 50px;
  position: sticky;
  top: 100px;
  left: 0px;
  transition: all 500ms ease ;
}
.container:hover {
  scale: 1.07;
  transition: all 500ms ease;
}

.container p {
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
}


.text-black * {
  color:  black;
}
.text-white * {
  color: white !important;
}

.container h1 {
  font-size: 60px;
  text-align: center;
  color: black 
}

@media (max-width: 1000px) {
  .container {
    padding: 20px;
    height: 60vh;
  }
  .container h1 {
    font-size: 25px;
  }
}

.container p {
  text-align: center;
  color: black 
}



.white {
  box-shadow: rgba(100, 100, 111, 0.363) 0px 7px 29px 0px;
  background-image: linear-gradient(0deg, rgba(153, 153, 153, 0.986) 0%, #EEF1F5 100%);
}
</style>
