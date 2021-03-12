<template>
  <div class="field">
    <div
      v-for="(cellRow, idx) in cells"
      :key="`${cellRow.length}_${idx}`"
      class="line"
    >
      <Cell
        v-for="(cell, index) in cellRow"
        :key="`${cell.x}_${index}`"
        :cell-value="cell"
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
