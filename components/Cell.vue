<template>
  <div class="cell">
    {{ cellValue }}
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
}
</style>
