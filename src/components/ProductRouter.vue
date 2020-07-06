<template>
    <div>
        <p>
            <router-link to="shipping">Shipping</router-link> /
            <router-link to="details">Details</router-link> /
            <router-link to="reviews">Reviews</router-link> /
            <router-link to="makeAReview">MakeAReview</router-link>
        </p>
        <router-view />

    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    
</style>