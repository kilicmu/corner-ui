import { createBEM } from './bem'
import { createComponent } from './component'

const prefix = 'cr'

// eslint-disable-next-line import/prefer-default-export
export const createNamespace = (name: string) => {
  name = `${prefix}-${name}`
  return [createComponent(name), createBEM(name)] as const
}
