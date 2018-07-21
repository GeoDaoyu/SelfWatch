<template>
    <el-row>
        <el-col>
            <el-menu
            default-active="1"
            router
            text-color="#A2A8B5">
                <el-menu-item index="/system/home" >
                    <i class="el-icon-location-outline"></i>
                    <span slot="title">Home</span>
                </el-menu-item>
                <el-menu-item index="/system/diet">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Diet</span>
                </el-menu-item>
                <el-menu-item index="/system/sleep">
                    <i class="el-icon-menu"></i>
                    <span slot="title">Sleep</span>
                </el-menu-item>
                <el-submenu index="/sub"> <!-- useless index,however without it, will call a warning -->
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>Activity</span>
                    </template>
                    <el-menu-item-group>
                        <el-menu-item index="/system/sport"><i class="el-icon-menu"></i>Sport</el-menu-item>
                        <el-menu-item index="/system/study"><i class="el-icon-menu"></i>Study</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
  export default {
    name: "NavMenu", 
    methods: {

    }
  }
</script>

<style lang="scss" scoped>

</style>