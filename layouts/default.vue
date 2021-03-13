<template>
  <v-app>
    <v-app-bar fixed app>
      <div class="container">
        <v-toolbar-title v-text="title" />
        <v-spacer></v-spacer>
        <span class="new_game mr-5" @click="newGame">Новая игра</span>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <WinnerModal v-if="isWinner" @close="closeModal" />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
export default {
  middleware: 'loadGame',
  data() {
    return {
      title: 'Пятнашки',
    }
  },
  computed: {
    ...mapState({
      isWinner: (state) => state.isWinner,
    }),
  },
  methods: {
    closeModal() {
      this.$store.dispatch('setIsWinner', false)
    },
    newGame() {
      this.$store.dispatch('generateNewGame')
    },
    saveGame() {
      this.$store.dispatch('saveGame')
    },
  },
}
</script>
<style lang="scss" scoped>
.container {
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  align-items: center;
}
.new_game {
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
}
</style>
