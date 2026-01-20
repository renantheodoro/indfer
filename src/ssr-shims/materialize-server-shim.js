// Minimal shim for materialize-css on the server
// Provides no-op implementations for components used during SSR.
const noop = () => ({ destroy: () => {} });

const Parallax = {
  init: () => null,
  getInstance: () => null,
};

const FormSelect = {
  init: () => null,
  getInstance: () => null,
};

const Sidenav = {
  init: () => null,
  getInstance: () => null,
};

const Tabs = {
  init: () => null,
  getInstance: () => null,
};

export default {
  Parallax,
  FormSelect,
  Sidenav,
  Tabs,
  // legacy: some code may call M.Parallax.getInstance(el).destroy()
};
