import { registerIconLibrary } from "@shoelace-style/shoelace/dist/utilities/icon-library.js";
import systemLibrary from "@shoelace-style/shoelace/dist/components/icon/library.system.js";

// Cherry-picked Shoelace components
import "@shoelace-style/shoelace/dist/components/alert/alert.js";
import "@shoelace-style/shoelace/dist/components/button/button.js";
import "@shoelace-style/shoelace/dist/components/copy-button/copy-button.js";
import "@shoelace-style/shoelace/dist/components/dialog/dialog.js";
import "@shoelace-style/shoelace/dist/components/divider/divider.js";
import "@shoelace-style/shoelace/dist/components/dropdown/dropdown.js";
import "@shoelace-style/shoelace/dist/components/menu/menu.js";
import "@shoelace-style/shoelace/dist/components/menu-item/menu-item.js";
import "@shoelace-style/shoelace/dist/components/menu-label/menu-label.js";

// disable system library to prevent loading of unused data: URLs
// allow only "x-lg" as it is needed for sl-dialog
registerIconLibrary("system", {
  resolver: (name) => {
    if (name === "x-lg") {
      return systemLibrary.resolver(name);
    }
    return "";
  },
});
