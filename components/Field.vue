<template>
  <div class="field">
    <div
      v-for="(cellRow, y) in cells"
      :key="`${cellRow.length}_${y}`"
      class="line"
    >
      <Cell
        v-for="(cell, x) in cellRow"
        :key="`${cell}_${x}`"
        :cell-value="cell"
        @click.native="moveCell(x, y, cell)"
      />
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Cell from '@/components/Cell'
export default {
  components: {
    Cell,
  },
  computed: {
    ...mapState({
      cells: (state) => state.cells,
    }),
  },
  methods: {
    moveCell(x, y, cell) {
      this.$store.dispatch('moveCell', { x, y, value: cell })
    },
  },
}
</script>
<style lang="scss" scoped>
.field {
  border: 2px;
  border-radius: 3px;
}
.line {
  display: flex;
}
</style>
