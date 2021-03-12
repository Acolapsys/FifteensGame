<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center"></div>
      <v-card>
        <Field />
      </v-card>
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
