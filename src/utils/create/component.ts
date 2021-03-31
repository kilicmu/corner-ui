import { App, ComponentOptionsWithObjectProps, defineComponent } from 'vue'
import { camelize } from '../format/string'

// eslint-disable-next-line import/prefer-default-export
export const createComponent = (name: string) => {
  return (sfc: ComponentOptionsWithObjectProps) => {
    sfc.name = name
    sfc.install = (app: App) => {
      app.component(sfc.name!, sfc)
      app.component(camelize(`-${sfc.name}`), sfc)
    }
    return defineComponent(sfc)
  }
}
