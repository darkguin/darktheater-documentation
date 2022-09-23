import DefaultTheme from 'vitepress/theme';
import { onMounted } from 'vue';
import mediumZoom from 'medium-zoom';

import './index.css';

export default {
  ...DefaultTheme,
  setup() {
    onMounted(() => {
      let observer = new MutationObserver(() => {
        mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' });
      });
      observer.observe(document.getElementById("app"), {
        childList: true,
        subtree: true,
      });
    });
  },
};
