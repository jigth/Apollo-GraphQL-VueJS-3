<template>
  <Apollo />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Apollo from './components/Apollo.vue';

export default defineComponent({
  name: 'App',
  components: {
      Apollo
  }
});
</script>

<style></style>
