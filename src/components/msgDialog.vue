<template>
</template>

<script>
export default {
  data() {
    return {
      messages: []
    }
  },
  methods: {
    getMsgCount () {
      return 4;
    },
    getMsg () {
      // 测试数据，后期查数据库
      this.messages = [
        {
          id: 1,
          state: '未读',
          content: '你妈叫你回家吃饭'
        }, {
          id: 11,
          state: '未读',
          content: '你爸叫你带瓶酱油回来'
        }, {
          id: 12,
          state: '未读',
          content: '我是一条超级长的消息提醒我是一条超级长的消息提醒我是一条超级长的消息提醒'
        }, {
          id: 13,
          state: '未读',
          content: '你爸叫你带瓶酱油回来'
        }
      ]
      this.showNotification()
    },
    showNotification () {
      this.$notify({
          title: '消息提醒',
          dangerouslyUseHTMLString: true,
          message: "您有新的消息",
          position: 'bottom-right',
          duration: 0
      });
    }
  },

  mounted() {
    const count = this.getMsgCount()
    if (count > 0) {
      this.getMsg()
    }
  }
}
</script>

<style scoped>

</style>
