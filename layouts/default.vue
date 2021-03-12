<template>
  <v-app>
    <v-app-bar fixed app>
      <v-toolbar-title v-text="title" />
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
  },
}
</script>
