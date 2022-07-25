import { observe } from "./src/observe/index";


export function initState(vm){
    const opts = vm.$options
    console.log('执行initState')
    console.log('opts',opts)
    if(opts.data){
        console.log('执行opts.data')
        initData(vm)
    }
    console.log('执行完initState')
}


function initData(vm){
    console.log('执行initDATA')
    let data = vm.$options.data
    data = typeof data === 'function' ? data.call(vm):data

    vm._data = data
    // 对数据进行观测
    console.log('观测数据')
    observe(data)

    for(let key in data){
        proxy(vm,'_data',key)
    }
}

function proxy(vm,target,key){
    Object.defineProperty(vm,key,{
        get(){
            return vm[target][key]
        },
        set(newVal){
            return vm[target][key] = newVal
        }
    })
}
