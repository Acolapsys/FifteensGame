<template>
  <v-app>
    <v-app-bar fixed app>
      <div class="container">
        <v-toolbar-title v-text="title" />
        <v-spacer></v-spacer>
        <span class="new_game mr-5" @click="startNewGame">Новая игра</span>
      </div>
    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <WinnerModal v-if="isWinner" @close="closeWinnerModal" />
    <ConfirmationModal
      v-if="isConfirmationVisible"
      @close="closeConfirmation"
    />
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import WinnerModal from '~/components/WinnerModal'
import ConfirmationModal from '~/components/ConfirmationModal'
export default {
  components: { WinnerModal, ConfirmationModal },
  middleware: 'loadGame',
  data() {
    return {
      title: 'Пятнашки',
      isConfirmationVisible: false,
    }
  },
  computed: {
    ...mapState({
      isWinner: (state) => state.isWinner,
    }),
  },
  methods: {
    closeWinnerModal() {
      this.$store.dispatch('setIsWinner', false)
    },
    startNewGame() {
      this.isConfirmationVisible = true
    },
    closeConfirmation() {
      this.isConfirmationVisible = false
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
