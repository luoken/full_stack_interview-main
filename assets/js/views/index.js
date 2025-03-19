import React from "react";
import { createRoot } from "react-dom/client";

import ContractsView from "./ContractsView";

const views = {
  ContractsView,
};

export const LiveReact = {
  mounted() {
    const { el } = this;

    const pushEvent = this.pushEvent.bind(this);
    const pushEventTo = this.pushEventTo.bind(this);
    const handleEvent = this.handleEvent.bind(this);

    const assigns = this.assigns();
    const props = { pushEvent, pushEventTo, handleEvent, ...assigns };

    const viewName = el.dataset.reactView;
    const reactEl = React.createElement(views[viewName], props);
    const root = createRoot(el);

    root.render(reactEl);

    Object.assign(this, { root, viewName });
  },

  updated() {
    const { root, viewName } = this;

    const pushEvent = this.pushEvent.bind(this);
    const pushEventTo = this.pushEventTo.bind(this);
    const handleEvent = this.handleEvent.bind(this);

    const assigns = this.assigns();
    const props = { pushEvent, pushEventTo, handleEvent, ...assigns };

    const reactEl = React.createElement(views[viewName], props);

    root.render(reactEl);
  },

  assigns() {
    const { el } = this;
    const prefix = "assigns";

    return Object.keys(el.dataset).reduce((acc, key) => {
      if (key.startsWith(prefix)) {
        const name = key[prefix.length].toLowerCase() + key.substring(prefix.length + 1);

        acc[name] = JSON.parse(el.dataset[key]);
      }

      return acc;
    }, {});
  },
};
