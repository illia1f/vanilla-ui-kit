import { $$ } from "@/scripts/utils.mjs";

(function () {
  "use strict";

  function initButtons() {
    const buttons = $$("button.btn[data-loading]");

    buttons.forEach((button) => {
      button.addEventListener("click", async function (e) {
        if (this.dataset.loading === "true") {
          e.preventDefault();
          return;
        }

        setLoading(this, true);

        const onClickFn = this.dataset.onclick;
        if (onClickFn && typeof window[onClickFn] === "function") {
          try {
            const result = window[onClickFn](this, e);
            if (result instanceof Promise) {
              await result;
            }
          } catch (error) {
            console.error("Error executing onClick handler:", error);
          }
        }

        setLoading(this, false);
      });
    });
  }

  function setLoading(button, isLoading) {
    if (isLoading) {
      button.dataset.loading = "true";
      button.disabled = true;
      button.setAttribute("aria-busy", "true");

      if (!button.dataset.originalText) {
        button.dataset.originalText = button.textContent;
      }

      button.textContent = button.dataset.loadingText || "Loading...";
    } else {
      button.dataset.loading = "false";
      button.disabled = false;
      button.removeAttribute("aria-busy");

      if (button.dataset.originalText) {
        button.textContent = button.dataset.originalText;
        delete button.dataset.originalText;
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initButtons);
  } else {
    initButtons();
  }

  window.ButtonComponent = {
    setLoading: setLoading,
  };
})();
