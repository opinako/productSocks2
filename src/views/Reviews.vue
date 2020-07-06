<template>
  <div>
    <p v-if="!reviews.length">There are no reviews yet.</p>
    <ul v-else>
        <li v-for="(review,index) in reviews" :key="index">
          <p>Name:{{ review.name}}</p>
          <p>Review:{{ review.review}}</p>
          <p>Rating:{{ review.rating}}</p>
        </li>
    </ul>
  </div>
</template>

<script>
import { mapState} from 'vuex'
  export default {
computed :{
  ...mapState([
    'reviews'
  ])
}
  }
</script>

<style>

</style>