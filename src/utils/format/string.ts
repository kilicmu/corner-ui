const reg = /-(\w)/g
// eslint-disable-next-line import/prefer-default-export
export const camelize = (str: string) => {
  return str.replace(reg, (_, s) => s.toUpperCase())
}
