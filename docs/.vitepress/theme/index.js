import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';
import Swagger from './components/Swagger.vue';
import './index.css';

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Swagger', Swagger);
  },
  setup() {
    onMounted(() => {
      let observer = new MutationObserver(() => {
        mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
      });

      observer.observe(document.getElementById('app'), {
        childList: true,
        subtree: true,
      });
    });
  },
};
