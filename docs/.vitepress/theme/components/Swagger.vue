<template>
  <div class="swagger" :id="id"></div>
</template>

<script setup>
import { onMounted } from 'vue';
import SwaggerUI from 'swagger-ui';

import 'swagger-ui/dist/swagger-ui.css';

const props = defineProps({
  id: String,
  url: String,
});

onMounted(() => {
  SwaggerUI({
    dom_id: `#${props.id}`,
    url: props.url,
  });
});
</script>
