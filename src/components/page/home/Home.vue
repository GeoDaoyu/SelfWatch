<template>
    <div>Home</div>
</template>

<script>
export default {
    name: 'Home',
    data () {
        return {
            msg: '首页'
        }
    },
    methods: {
        sayHello: function () {
            console.log("hello");
        }
    },
    mounted: function () {
        process.nextTick(function() {
            console.log("hi");
        })
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
