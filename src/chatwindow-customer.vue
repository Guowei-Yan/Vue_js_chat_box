<template>
  <div class="sc-chat-window2--wrapper" @kiki="$emit('kiki', $event)">
    <div class = "sc-chat-window2--title">Supporter chatwindow</div>
      <div class="sc-chat-window2" @kiki="$emit('kiki', $event)">
        <Header
          :colors="colors"
        >
          <template>
            <slot name="header"> </slot>
          </template>
        </Header>
        <MessageRecord>
        </MessageRecord>
        <form
          class="sc-user-input2"
          :class="{active: inputActive}"
          @kiki="$emit('kiki', $event)"
        >
          <div
          ref="userInput2"
          role="button"
          tabIndex="0"
          contentEditable="true"
          :placeholder="placeholder"
          class="sc-user-input2--text"
          :style="{color: colors.userInput}"
          @focus="setInputActive(true)"
          @blur="setInputActive(false)"
          @keydown="handleKey"
          @focusUserInput="focusUserInput()"
          @kiki="$emit('kiki')"
          ></div>
          <div class="sc-user-input2--buttons">
            <div
            class="sc-user-input2--button"
            @click= "_submitText"
            >

            </div>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
import Header from './window2_header.vue'
import MessageRecord from './messagerecord.vue'
export default {
  components: {
    Header,
    MessageRecord,
  },
  data (){
    return {
      file: null,
      inputActive: false,
      placeholder : "Please write here.....",
      colors: {
        input_bg : "white",
        bg : "rgb(78, 140, 255)",
        color: "white",
        userInput : "black"
      }
    }
  },
  methods: {
    setInputActive(onoff){
      this.inputActive = onoff
    },
    handleKey(event) {
      if (event.keyCode === 13 && !event.shiftKey) {
        this._submitText(event)
        event.preventDefault()
    }},
    focusUserInput() {
      this.$nextTick(() => {
        this.$refs.userInput2.focus()
      })
    },
    _submitText(event) {
      const text = this.$refs.userInput2.textContent
      const recipient_id = 0
      this.$emit('kiki', {
        recipient:{
          id : recipient_id
        },
        message:{
          text: text
        }
      })
      this.$refs.userInput2.innerHTML = ""
    },
  }
}

</script>

<style scoped>

.sc-chat-window2--wrapper {
  left: 50%;
  margin-top: 0%;
  width: 370px;
  position: fixed;
  height: 90%;
}

.sc-chat-window2--title {
  align-self: top;
  width: 370px;
  text-align: center;
  margin-right: auto;
  position:fixed;
  left: calc(50%+185px);
  margin-top: 3%;
  font-size: 20px
}

.sc-chat-window2 {
  width: 370px;
  height: calc(100% - 120px);
  max-height: 590px;
  position: fixed;
  margin-left: 0%;
  margin-right:calc(90% - 370px);
  margin-top: 7%;
  border: 1px solid black;
  display: flex;
  box-sizing: border-box;
  box-shadow: 0px 7px 40px 2px rgba(148, 149, 150, 0.1);
  background: white;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif
}


.sc-user-input2 {
  min-height: 55px;
  margin: 0px;
  position:relative;
  bottom: 0%;
  display: flex;
  background-color: #f4f7f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.sc-user-input--text2 {
  width: 300px;
  resize: none;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  box-sizing: border-box;
  padding: 18px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.33;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #565867;
  -webkit-font-smoothing: antialiased;
  max-height: 200px;
  overflow: scroll;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.sc-user-input2 {
  min-height: 55px;
  margin: 0px;
  position:relative;
  bottom: 0%;
  display: flex;
  background-color: #f4f7f9;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;
}

.sc-user-input2--text {
  width: 300px;
  resize: none;
  border: none;
  outline: none;
  border-bottom-left-radius: 10px;
  box-sizing: border-box;
  padding: 18px;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.33;
  white-space: pre-wrap;
  word-wrap: break-word;
  color: #565867;
  -webkit-font-smoothing: antialiased;
  max-height: 200px;
  overflow: scroll;
  bottom: 0;
  overflow-x: hidden;
  overflow-y: auto;
}

.sc-user-input2--buttons {
  width: 100px;
  position: absolute;
  right: 30px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

.sc-user-input2--button {
  width: 30px;
  height: 55px;
  margin-left: 2px;
  margin-right: 0px;
  display: flex;
  flex-direction: row;
  justify-content: left;
  background-image: url('./send.png');
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 50% 50%;
}

.sc-user-input2--text:empty:before {
  content: attr(placeholder);
  display: block; /* For Firefox */
  /* color: rgba(86, 88, 103, 0.3); */
  filter: contrast(15%);
  outline: none;
  cursor: text;
}

</style>
