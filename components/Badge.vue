<template>
  <div class="badge">
    <section class="mt-5 mb-5" id="calendar">
      <div>
        <img loading="lazy" src="https://github.githubassets.com/images/spinners/octocat-spinner-128.gif"
          style="height: 50px; width: 50px;" />
      </div>
    <div class="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark"
      data-type="HORIZONTAL" data-vanity="superdeveloper" data-version="v1"><a class="badge-base__link LI-simple-link"
        href="https://www.linkedin.com/in/michael-esedo/"></a></div>
  </section>
  </div>
</template>


<script>
export default {
  name: "Hero_Component",
  components: {},
  mounted() {
    GitHubCalendar("#calendar", "st-michael", {
      responsive: true,
      tooltips: true
    });
  }
};
</script>

<style scoped>
.badge {
}
</style>