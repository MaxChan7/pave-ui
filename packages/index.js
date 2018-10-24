import Button from './components/button/index.js'
import Loading from './components/loading/index.js'

// 存储组件列表
const components = [
  Button,
  Loading
]

function install(Vue) {
  if (install.installed) {
    return
  }
  install.installed = true
  components.forEach((component) => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

// export default Pave
const Pave = {
  install,
  Button,
  Loading
}
export {
  install,
  Button,
  Loading
}
export default Pave
