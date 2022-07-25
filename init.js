import { initState } from "./state";

function initMixin(Vue) {
  Vue.prototype._init = function(options) {
    const vm = this;
    vm.$options = options;
    console.log('---执行initMixin---')
    initState(vm);
  };
}

export default initMixin;
