function initMixin(Vue){
  Vue.prototype._init = function(options){
    const vm = this 
    vm.$options = options
    initState(vm)  
    
  }
}

function initState(vm){
  // console.log('vm',vm);
  const opts = vm.$options
  if(opts.data){
    initData(vm)
  }

}

function initData(vm){
  let data = vm.$options.data
  data = typeof data === 'function' ? data.call(vm) : data
  debugger
  console.log('data',data);
  
}


export default initMixin