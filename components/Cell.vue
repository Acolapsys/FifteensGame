<template>
  <div class="cell" :class="{ empty: cellValue === 0 }">
    <span v-if="cellValue !== 0">
      {{ cellValue }}
    </span>
  </div>
</template>
<script>
export default {
  props: {
    cellValue: {
      type: Number,
      required: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.cell {
  border: 1px solid #111;
  width: 40px;
  height: 40px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px;
  margin: 3px;
  cursor: pointer;
  box-shadow: 1px 1px 1px 0;
  background-color: rgb(238, 231, 231);
}
.empty {
  border: none;
  cursor: default;
  color: white;
  background-color: white;
}
</style>
