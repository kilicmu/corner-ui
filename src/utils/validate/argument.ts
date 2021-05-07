export const oneOf = (value: string, validList: string[]) =>
  validList.includes(value);

export const notNagative = (value: number) => value > 0

export const inRange = (value:number, interval: [number, number]) => 
  value >= interval[0] && value < interval[1]