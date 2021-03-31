type Mod = string | { [key: string]: any };
type Mods = Mod | Mod[];

const gen = (name: string, mods?: Mods): string => {
  if (!mods) return ''

  if (typeof mods === 'string') {
    return ` ${name}--${mods}`
  }

  if (Array.isArray(mods)) {
    return mods.reduce<string>((a, b) => a + gen(name, b), '')
  }

  return Object.keys(mods).reduce(
    (a, b) => a + (mods[b] ? gen(name, b) : ''),
    '',
  )
}

export const createBEM = (name: string) => {
  return (el?: Mods, mods?: Mods) => {
    if (el && typeof el !== 'string') {
      mods = el
      el = ''
    }
    el = el ? `${name}__${el}` : name
    return `${el}${gen(el, mods)}`
  }
}

export type BEM = ReturnType<typeof createBEM>;
