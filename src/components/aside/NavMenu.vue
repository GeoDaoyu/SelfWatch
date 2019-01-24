<template>
    <el-row>
        <el-col>
            <el-menu
            default-active="1"
            router
            text-color="#A2A8B5">
                <el-menu-item 
                v-for="item in items" 
                :key="item.name"
                :index="item.path">
                    <i class="el-icon-location-outline"></i>
                    <span>{{ item.name }}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
  export default {
    name: "NavMenu", 
    data () {
        return {
            items: this.$router.options.routes[1].children
        }
    }
  }
</script>

<style lang="scss" scoped>

</style>
