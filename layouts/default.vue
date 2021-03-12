<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
      <v-spacer></v-spacer>
      <span class="mr-5" @click="newGame">Новая игра</span>
      <span @click="saveGame">Сохранить игру</span>
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
