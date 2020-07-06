export default {
    inStock(state) {
        return state.variants[ state.selectedVariant ].variantQuantity
    },
    image(state) {
        return state.variants[ state.selectedVariant ].variantImage
    }
}