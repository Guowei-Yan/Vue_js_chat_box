<template>
  <div class="sc-chat-window1--wrapper" @kiki="$emit('kiki', $event)">
    <div class = "sc-chat-window1--title">Supporter chatwindow</div>
      <div class="sc-chat-window1" @kiki="$emit('kiki', $event)">
        <Header
          :colors="colors"
        >
          <template>
            <slot name="header"> </slot>
          </template>
        </Header>
        <form
          class="sc-user-input1"
          :class="{active: inputActive}"
          @kiki="$emit('kiki', $event)"
        >
          <div
          ref="userInput1"
          role="button"
          tabIndex="0"
          contentEditable="true"
          :placeholder="placeholder"
          class="sc-user-input1--text"
          :style="{color: colors.userInput}"
          @focus="setInputActive(true)"
          @blur="setInputActive(false)"
          @keydown="handleKey"
          @focusUserInput="focusUserInput()"
          @kiki="$emit('kiki')"
          ></div>
          <div class="sc-user-input1--buttons">
            <div
            class="sc-user-input1--button"
            @click= "_submitText"
            >

            </div>
          </div>
        </form>
      </div>
  </div>
</template>

<script>
import Header from './window1_header.vue'
export default {
  props:{
    messages:{
      types: Object,
      default:true
    }
  },
  components: {
    Header
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
        this.$refs.userInput1.focus()
      })
    },
    _submitText(event) {
      const text = this.$refs.userInput1.textContent
      const recipient_id = 1
      this.$emit('kiki', {
        recipient:{
          id : recipient_id
        },
        message:{
          text: text
        }
      })
      this.$refs.userInput1.innerHTML = ""
    },
  }
}

</script>
<style>

.sc-chat-window1--wrapper {
  left: 10%;
  margin-top: 0%;
  width: 370px;
  position: fixed;
  height: 90%;
}

.sc-chat-window1--title {
  align-self: top;
  width: 370px;
  text-align: center;
  margin-right: auto;
  position:fixed;
  left: calc(10%+185px);
  margin-top: 3%;
  font-size: 20px
}

.sc-chat-window1 {
  width: 370px;
  height: calc(100% - 120px);
  max-height: 590px;
  position: fixed;
  margin-left: 0%;
  margin-right: auto;
  margin-top: 7%;
  border: 1px solid black;
  display: flex;
  box-sizing: border-box;
  background: white;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 10px;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif
}

.sc-user-input1 {
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

.sc-user-input1--text {
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

.sc-user-input1--buttons {
  width: 100px;
  position: absolute;
  right: 30px;
  height: 100%;
  display: flex;
  justify-content: flex-end;
}

.sc-user-input1--button {
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

.sc-user-input1--text:empty:before {
  content: attr(placeholder);
  display: block; /* For Firefox */
  /* color: rgba(86, 88, 103, 0.3); */
  filter: contrast(15%);
  outline: none;
  cursor: text;
}

</style>
