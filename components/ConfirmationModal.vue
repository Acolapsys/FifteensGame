<template>
  <div class="modal_wrapper">
    <div class="modal">
      <h1>Новая игра</h1>
      <p>Завершить текущую игру?</p>
      <div class="buttons">
        <v-btn class="mr-10" @click="startNewGame">Да</v-btn>
        <v-btn @click="close">Нет</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    close() {
      this.$emit('close')
    },
    startNewGame() {
      this.$store.dispatch('startNewGame')
      this.close()
    },
  },
}
</script>
<style lang="scss" scoped>
.modal_wrapper {
  position: fixed;
  background: rgba(30, 62, 100, 0.35);
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
}
.modal {
  width: 400px;
  min-height: 300px;
  background: #ffffff;
  filter: drop-shadow(0px 2px 12px rgba(0, 0, 0, 0.32));
  border-radius: 24px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  &::-webkit-scrollbar {
    width: 5px;
  }
  &::-webkit-scrollbar-button {
    height: 20px;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
  }
  @media (max-width: 767px) {
    width: 100%;
    border-radius: 0;
  }
}
</style>
