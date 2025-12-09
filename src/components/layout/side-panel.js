import componentsConfig from "@/config/components.js";

export function SidePanel(options = {}) {
  let onComponentSelect = options.onComponentSelect || (() => {});
  let activeComponentId = null;
  let container = null;

  function init() {
    container = document.getElementById("side-panel");
    if (!container) {
      console.error("Side panel container not found");
      return;
    }

    render();
  }

  function render() {
    const nav = document.createElement("nav");
    nav.className = "side-panel-nav";

    const title = document.createElement("h2");
    title.className = "side-panel-title";
    title.textContent = "Components";
    nav.appendChild(title);

    const list = document.createElement("ul");
    list.className = "side-panel-list";

    componentsConfig.forEach((component) => {
      const item = document.createElement("li");
      item.className = "side-panel-item";

      const link = document.createElement("a");
      link.href = `#/component/${component.id}`;
      link.className = "side-panel-link";
      link.textContent = component.name;
      link.dataset.componentId = component.id;

      if (component.description) {
        link.title = component.description;
      }

      link.addEventListener("click", (e) => {
        e.preventDefault();
        selectComponent(component.id);
      });

      item.appendChild(link);
      list.appendChild(item);
    });

    nav.appendChild(list);
    container.appendChild(nav);
  }

  function selectComponent(componentId) {
    setActiveComponent(componentId);
    onComponentSelect(componentId);
  }

  function setActiveComponent(componentId) {
    activeComponentId = componentId;

    // Update active state in UI
    const links = container?.querySelectorAll(".side-panel-link");
    links?.forEach((link) => {
      if (link.dataset.componentId === componentId) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  return {
    init,
    selectComponent,
    setActiveComponent,
  };
}
