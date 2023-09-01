export interface HelpersInterface {
  logFunction(name: String, params: any): void
}

export function logFunction(name: String, params: any): void {
  console.log(`fn ${name}(${JSON.stringify(params)})`)
}

export const helpers: HelpersInterface = {
  logFunction,
}
