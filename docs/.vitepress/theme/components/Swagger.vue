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

table, tr, td {
  border: none !important;
  border-collapse: collapse !important;
}

thead {
  background: rgba(0,0,0,0.05);
}

.responses-table .response-col_status {
  min-width: 40px !important;
  width: fit-content !important;
  text-align: center;
}

.responses-table .response-col_status:not(thead tr td) {
  background: rgba(0,0,0,0.05);
}

.responses-table .response-col_description {
  padding: 10px;
}

.responses-table .col_header {
  font-size: 12px;
  line-height: 1;
  padding: 8px 4px;
  text-align: center;
}

.response-col_links {
  display: none;
}

.response-col_description {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.model-example, .response-controls {
  margin: 0 !important;
  padding: 0 !important;
}

.model-example {
  flex-grow: 1;
}

.model-example .tab {
  display: flex;
  align-items: center;
  width: 100% !important;
}

.model-example .tab .tabitem {
  margin: 0 !important;
  padding: 0 10px !important;
}

.highlight-code pre {
  line-height: 1.1;
}

</style>
