<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="field_wrapper">
        <div
          class="help_sign"
          @mouseover.stop="showHelp(true)"
          @mouseleave.stop="showHelp(false)"
        >
          ?
        </div>
        <div v-if="isHelpVisible" class="help">
          Ваша задача переставить все фишки по возрастанию номеров. Разрешается
          передвигать на свободное поле фишки, находящиеся рядом с ним.
          <br />
          При закрытии окна, игра сохранится в текущем состоянии
        </div>
        <div v-if="isGameLoaded" class="notification">
          Сохраненная игра загружена
        </div>
        <h2>Игра в пятнашки</h2>
        <Field />
        <p class="mt-5">Количество ходов: {{ counter }}</p>
        <p class="mt-3">
          Прошло времени:
          {{ gameTime | toTimer }}
        </p>
      </div>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex'
import Field from '~/components/Field'
export default {
  components: {
    Field,
  },
  data() {
    return {
      isHelpVisible: false,
      interval: null,
      gameTime: 0,
    }
  },
  computed: {
    ...mapState({
      isGameLoaded: (state) => state.isLoaded,
      counter: (state) => state.counter,
      startTime: (state) => state.startTime,
      isWinner: (state) => state.isWinner,
    }),
  },
  watch: {
    isWinner(value) {
      if (value) {
        clearInterval(this.interval)
        this.interval = 0
        console.log('clearInterval', this.interval)
      }
    },
    startTime() {
      console.log(this.interval, 'interval')
      if (!this.interval) {
        this.startTimer()
      }
    },
  },
  mounted() {
    if (this.isGameLoaded) {
      setTimeout(() => {
        this.$store.dispatch('setIsLoaded', false)
      }, 1500)
    }
    this.startTimer()
  },
  beforeDestroy() {
    clearInterval(this.interval)
  },
  methods: {
    showHelp(value) {
      this.isHelpVisible = value
    },
    startTimer() {
      this.interval = setInterval(() => {
        this.gameTime = new Date() - new Date(this.startTime)
      }, 1000)
    },
  },
}
</script>
<style lang="scss" scoped>
.field_wrapper {
  margin: 0 auto;
  max-width: 350px;
  border: 2px solid #ddd;
  box-shadow: 2px 2px 0 0;
  border-radius: 5px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: relative;
}
h2 {
  margin-bottom: 30px;
}
.help_sign {
  position: absolute;
  top: 20px;
  right: 10px;
  min-width: 25px;
  min-height: 25px;
  border: 1px solid black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  cursor: default;
}
.help {
  position: absolute;
  top: 50px;
  right: 10px;
  min-width: 100px;
  min-height: 25px;
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: default;
  background-color: #fff;
  padding: 10px;
}
.notification {
  position: absolute;
  top: -10px;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 1px 1px 0 0;
  z-index: 20;
  opacity: 1;
  background-color: #fff;
  padding: 20px;
}
</style>
