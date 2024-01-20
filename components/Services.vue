<template>
    <div class="service ">
        <p class="title">{{title}}</p>
    </div>
</template>

<script>
export default {
    props: {
        image: String,
        title: String,
        description: String
    }
}
</script>

<style scoped>
.service {
    display: flex;
    border: 1px solid rgba(255, 255, 255, 0.222);
    border-radius: 70px !important;
    position: relative;
    padding: 20px 20px;
    background: rgb(255, 255, 255);
}

.service .title {
    color:#000000;
    font-size: 14px;
}
.service .button {
    background-color: rgba(255, 255, 255, 0.774);
    padding: 5px 10px;
    display: inline-block;
    border-radius: var(--border-radius);
    place-items: center;
}

@media (max-width: 1000px) {
    .service {
        padding: 10px 10px
    }
}

</style>