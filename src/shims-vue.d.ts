/* eslint-disable */
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.scss' {
  const content: { [key: string]: any }
  export default content
}

declare module '*.md' {
  export default any;
}

declare module '*.png' {
  export default string;
}

declare module "*.json" {
  export default object;
}
