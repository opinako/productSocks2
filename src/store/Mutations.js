import router from '../router/index'

export default {
    updateCart( state ) {
        state.cart.push( state.variants[state.selectedVariant ].variantId )
    },
    updateProduct( state, index ) {
        state.selectedVariant = index
    },
    updateName (state, name)
    {
        state.name = name
    },
    updateReview ( state, review )
    {
       state.review = review  
    },
    updateRating (state, rating)
    {
        state.rating = rating
    },
    onSubmit (state)
    {
        state.errors = []
        if(state.name && state.review && state.rating){
          let productReviews = {
            name:state.name,
            review:state.review,
            rating:state.rating
          }
          state.reviews.push(productReviews)
          state.name = null
          state.review = null
            state.rating = null
            router.push('/reviews')
        } else {
          if(!state.name)state.errors.push('Name required.')
          if(!state.review)state.errors.push('Review required.')
          if(!state.rating)state.errors.push('Rating required.')
        }
    }
}