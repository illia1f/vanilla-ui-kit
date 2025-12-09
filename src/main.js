import { SidePanel } from "@components/layout/side-panel.js";

function init() {
  const sidePanel = new SidePanel({
    onComponentSelect: (componentId) => {
      console.log(`Component ${componentId} selected`);
    },
  });
  sidePanel.init();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
