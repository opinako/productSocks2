<template>
  <form class="review-form" @submit.prevent="onSubmit">
<div v-if="errors.length">
    <b>Please correct the following error(s):</b>
    <ul>
      <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
    </ul>
</div>

    <p>
      <label for="name">Name:</label>
      <input type="text" id="name" v-model="name">
    </p>

    <p>
      <label for="review">Review:</label>
      <textarea type="text" id="review" v-model="review"></textarea>
    </p>

    <p>
      <label for="rating">Rating:</label>
      <select type="text" id="rating" v-model.number="rating">
        <option>5</option>
        <option>4</option>
        <option>3</option>
        <option>2</option>
        <option>1</option>
      </select>
    </p>

    <p>
      <input type="submit" value="Submit">
    </p>

  </form>
</template>

<script>
  import {
    mapState
  } from 'vuex'
  export default {
    computed: {
      name: {
        get(){
          return this.$store.state.name
        },
        set(value) {
          this.$store.commit('updateName',value)
        }
      },
      review:{
        get(){
          return this.$store.state.review
        },
        set(value) {
          this.$store.commit('updateReview', value)
        }
      },
      rating:{
        get(){
          return this.$store.state.rating
        },
        set(value){
          this.$store.commit('updateRating', value)
        }
      },
      ...mapState( [
        'errors'
      ] )
    },
    methods: {
      onSubmit() {
        this.$store.commit( 'onSubmit' )
      }
    }
  }
</script>

<style>
  .review-form {
    width: 400px;
    padding: 20px;
    margin: 40px;
    border: 1px solid #d8d8d8;
  }

  input {
    width: 100%;
    height: 25px;
    margin-bottom: 20px;
  }

  textarea {
    width: 100%;
    height: 60px;
  }
</style>