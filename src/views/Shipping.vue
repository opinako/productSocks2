<template>
    <div>
        <p>{{ shipping }}</p>
    </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    computed:{
        shipping(){
            if(this.$store.state.premium){
                return 'Free'
            }else {
                return 2.99
            }
        }
    }
}
</script>

<style>

</style>