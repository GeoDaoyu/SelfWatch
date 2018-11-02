<template>
  <transition name="slide-fade">
    <div role="alert" class="el-notification right" style="bottom: 16px; z-index: 2000;" v-show="visible">
      <div class="el-notification__group">
        <h2 class="el-notification__title">消息提醒</h2>
        <div class="el-notification__content">
          <el-table :data="messages" empty-text=" " :show-header=false style="width: 100%">
            <el-table-column lable="内容" prop="content" min-width="220px" :formatter="ctrlContentLength"></el-table-column>
            <el-table-column lable="操作" width="180px">
                <template slot-scope="scope">
                <el-button plain size="mini" type="primary" @click="goTo(scope.$index, scope.row)">查看</el-button>
                <el-button plain size="mini" type="warning" @click="markRead(scope.$index, scope.row)">标为已读</el-button>
                </template>
            </el-table-column>
          </el-table>
          <a href="JavaScript:void(0)" class="msgAll">查看全部>></a>
        </div>
        <div class="el-notification__closeBtn el-icon-close" @click="visible = false"></div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
      messages: []
    }
  },
  methods: {
    getMsgCount () {
      return 4;
    },
    getMsg () {
      // 测试数据，后期查数据库
      // 查3条
      this.messages = [
        {
          id: 1,
          state: '未读',
          content: '我是一条有23的消息',
          toPath: 'url'
        }, {
          id: 11,
          state: '未读',
          content: '我是一条有e的消息',
          toPath: 'url'
        }, {
          id: 12,
          state: '未读',
          content: '我是一条超级长的消息提醒我是一条超级长的消息提醒我是一条超级长的消息提醒',
          toPath: 'url'
        }
      ]
      this.visible = true
    },
    goTo (index, row) {
      console.log(row.toPath)
      this.markRead(index, row)
    },
    markRead (index, row) {
      console.log(row.id)
      this.messages.splice(index, 1)
    },
    //#region table
    ctrlContentLength (row, column, cellValue, index) {
      const maxLength = 12
      return cellValue.length < maxLength ? cellValue : cellValue.slice(0, maxLength) + '……'
    }
    //#endregion
  },
  mounted () {
    const count = this.getMsgCount()
    if (count > 0) {
      this.getMsg()
    }
  },
  watch: {
    messages () {
      if (this.messages.length === 0) {
        this.visible = false;
      }
    }
  }
}
</script>

<style scoped>
.el-notification {
  width: auto;
}
.msgAll {
  float: right;
  margin-right: 20px;
  color: #409EFF;
  text-decoration: blink;
}
.slide-fade-enter-active {
  transition: all .8s ease;
}
.slide-fade-leave-active {
  transition: all .8s ease;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(454px);
  opacity: 0;
}
</style>
