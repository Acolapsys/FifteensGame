<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="field_wrapper">
        <h2>Игра в пятнашки</h2>
        <Field />
      </div>
    </v-col>
  </v-row>
</template>

<script>
import Field from '~/components/Field'
export default {
  components: {
    Field,
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
}
h2 {
  margin-bottom: 30px;
}
</style>
