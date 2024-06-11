import kebabCase from "lodash/fp/kebabCase";

// Cherry-picked Shoelace components
// Import .component and register manually to avoid name collision
// See https://github.com/shoelace-style/shoelace/issues/705
import SlAlert from "@shoelace-style/shoelace/dist/components/alert/alert.component.js";
import SlButton from "@shoelace-style/shoelace/dist/components/button/button.component.js";
import SlCopyButton from "@shoelace-style/shoelace/dist/components/copy-button/copy-button.component.js";
import SlDialog from "@shoelace-style/shoelace/dist/components/dialog/dialog.component.js";
import SlDropdown from "@shoelace-style/shoelace/dist/components/dropdown/dropdown.component.js";
import SlMenu from "@shoelace-style/shoelace/dist/components/menu/menu.component.js";
import SlMenuItem from "@shoelace-style/shoelace/dist/components/menu-item/menu-item.component.js";

// Shoelace components should only be registered if needed
// to prevent issues with callers, e.g. Browsertrix.
[
  SlAlert,
  SlButton,
  SlCopyButton,
  SlDialog,
  SlDropdown,
  SlMenu,
  SlMenuItem,
].forEach((slClass) => {
  const name = kebabCase(slClass.name);

  if (!customElements.get(name)) {
    customElements.define(name, slClass);
  }
});
