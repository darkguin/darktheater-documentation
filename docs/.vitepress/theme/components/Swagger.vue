<template>
  <div class='swagger' :id='id'></div>
</template>

<script setup>
import { onMounted } from 'vue';
import { SwaggerUIBundle } from 'swagger-ui-dist';

import 'swagger-ui-dist/swagger-ui.css';

const props = defineProps({
  id: String,
  url: String,
});

onMounted(async () => {
  SwaggerUIBundle({
    dom_id: `#${props.id}`,
    url: props.url,
    swagger: '2.0',
  });
});
</script>

<style>
.swagger-ui .opblock .opblock-summary-path {
  max-width: 100%;
  flex-grow: 1;
}

.swagger-ui .opblock .opblock-summary-description {
  padding-right: 8px;
  text-align: right;
  overflow-wrap: anywhere;
}
.swagger-ui .information-container .info {
  margin: 0;
}

.swagger-ui .information-container .info hgroup.main {
  margin: 0;
}

.swagger-ui .scheme-container {
  padding: 0 0 15px 0;
  box-shadow: none;
  margin: 0;
}

.swagger-ui .information-container .info .title {
  font-size: 22px;
}

.swagger-ui .information-container .info small {
  top: 0;
  padding: 4px 6px;
  height: fit-content;
}

.swagger-ui .information-container .info small pre {
  font-size: 12px;
  line-height: 12px;
  top: 0;
}
</style>
