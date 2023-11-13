<template>
  <lemon-imui
      width="380px"
      simple
      :user="user"
      ref="IMUI"
      @pull-messages="handlePullMessages"
      @message-click="handleMessageClick"
      @send="handleSend"
    >
      <template #cover>
        <div class="cover">
          <span><b>Lemon</b> IMUI</span>
        </div>
      </template>
    </lemon-imui>
</template>

<script>
const getTime = () => new Date().getTime();
const generateRandId = () => Math.random().toString(36).substr(-8);

export default {
    data(){
        return{
            user: {
        id: "1",
        displayName: "梅佳期",
        avatar: "",
      },

        }
    },
  components: {
    
  },mounted() {
    const { IMUI } = this.$refs;
    IMUI.initContacts([
      {
        id: "2",
        displayName: "韦明江",
        avatar: "",
        type: "single",
        index: "T",
        unread: 0,
        lastSendTime: getTime(),
        lastContent: "你好123",
      },
    ]);
    setTimeout(() => {
      IMUI.changeContact("2");
    }, 2000);
  },
  methods: {
    handleMessageClick(e, key, message) {
      const { IMUI } = this.$refs;
      if (key == "status" && message.status === "failed") {
        IMUI.updateMessage({
          id:message.id,
          toContactId:message.toContactId,
          status: "going",
          content: "重新发送消息...",
        });
        setTimeout(() => {
          IMUI.updateMessage({
            id:message.id,
            toContactId:message.toContactId,
            status: "failed",
            content: "还是发送失败",
          });
        }, 2000);
      }
    },
    handleSend(message, next, file) {
      console.log(message, next, file);
      setTimeout(() => {
        next({
          status: "failed",
        });
      }, 1000);
    },
    handlePullMessages(contact, next) {
      const { currentContactId } = this.$refs.IMUI;
      const otherUser = {
        id: contact.id,
        avatar: contact.avatar,
        displayName: contact.displayName,
      };
      const message = (content, fromUser = this.user) => {
        return {
          id: generateRandId(),
          status: "succeed",
          type: "text",
          sendTime: getTime(),
          content,
          toContactId: currentContactId,
          fromUser,
        };
      };

      const messages = [
        message("我是个傻逼", otherUser),
        message("快来写代码"),
        message("ok", otherUser),
      ];
      next(messages, true);
    },
  },
}
</script>

<style lang="less" scoped>
.cover {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  color: #ddd;
}
</style>