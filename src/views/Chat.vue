<template>
  <div class="parent">
    <div :key="getUserName" class="chat-list">
      <div
        class="chat-message-row"
        v-for="message in listChat"
        :key="'msg-'+message.id"
        v-bind:align="getUserName == message.username?'right':'left'"
      >
        <div class="username">{{message.username}}</div>
        <div class="chat-message" v-bind:class="{isSelf: getUserName == message.username}">
          {{message.message}}
          <md-tooltip>{{Date(message.timestamp)}}</md-tooltip>
        </div>
      </div>
    </div>
    <div class="send-message">
      <md-divider />
      <form novalidate class="md-layout" v-on:submit.prevent="onSendMessage">
        <md-field>
          <label for="messageToSend">Message...</label>
          <md-input name="messageToSend" id="messageToSend" v-model="messageToSend" />

          <md-button type="submit" class="md-accent md-raised">
            <md-icon>send</md-icon>
          </md-button>
        </md-field>
      </form>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Chat",
  data: () => ({ messageToSend: "" }),
  methods: {
    ...mapActions(["fetchChat", "sendMessage"]),
    onSendMessage(e) {
      // Only allow nonempty messages to be sent
      if (this.messageToSend.trim() != "") {
        this.sendMessage(this.messageToSend);
        this.messageToSend = "";
      }
    }
  },
  computed: mapGetters([
    "listChat",
    "getLoginState",
    "getFetchedState",
    "getUserName"
  ]),

  created() {
    // Redirect to home page if user is not logged in
    if (!this.getLoginState) this.$router.replace("/");
    // Fetch the chat history from firebase database on mounting the component
    this.fetchChat();
  },
  updated() {
    // Scroll to the bottom of the chat on any message
    let chatListElem = this.$el.querySelector(".chat-list");
    chatListElem.scrollTop = chatListElem.scrollHeight;
  }
};
</script>

<style scoped>
.parent {
  height: calc(82vh);
}
.chat-list {
  height: 100%;
  margin: 2vh auto 0vh;
  padding: 20px 15px;
  overflow: auto;
}

.chat-message-row {
  padding: 4px 0;
}
.chat-message {
  padding: 12px 20px;
  border: 1px solid #ddd;
  border-radius: 30px;
  display: inline-block;
  max-width: 70%;
  text-align: left;
  word-break: break-all;
}

.username {
  font-weight: 300;
  font-size: 0.9em;
  color: #666;
  padding-left: 8px;
  padding-right: 8px;
}

.isSelf {
  background-color: #ddd;
}

.send-message {
  height: 100px;
  padding: 0 15px;
}
</style>