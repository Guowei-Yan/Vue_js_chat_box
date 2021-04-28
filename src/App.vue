<template>
  <div style="background-image: require(../welcome.svg)">
    <Header
    />

    <chatwindow_supporter
    :messages='messages'
    @kiki="letll"
    />
    <chatwindow_customer
    :messages='messages'
    @kiki="letll"
    />
  </div>
</template>

<script>
import messageHistory from './messageHistory'
import Header from './Header.vue'
import store from './store/'
import chatwindow_supporter from './chatwindow-supporter.vue'
import chatwindow_customer from './chatwindow-customer.vue'

export default {
  name: 'app',
  components: {
    Header,
    chatwindow_supporter,
    chatwindow_customer
  },
  data() {
    return {
      titleImageUrl:
        'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
      messageList: messageHistory,
      newMessagesCount: 0,
      messages: {},
      isChatOpen: false,
      showTypingIndicator: '',
      alwaysScrollToBottom: true,
      messageStyling: true,
      userIsTyping: false,
      chosenColor: "blue"
    }
  },
  methods: {
    letll(message) {
      if (this.messages.length >0){
        this.messages = [...this.messages, Object.assign({}, message)]
        }
      else{
        this.messages = Object.assign({}, message)
      }
      console.log(this.messages)
      }
    }
  }
</script>

<style>
body {
  padding: 0px;
  margin: 0px;
  background-image: url('../welcome.svg');
}

* {
  font-family: Avenir Next, Helvetica Neue, Helvetica, sans-serif;
}

.text-center {
  text-align: center;
}

.colors a {
  color: #fff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 10px;
}


</style>
