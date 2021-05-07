const { lstatSync, writeFileSync, readdirSync } = require('fs')
const { join } = require('path')
const { resolve } = require('path')

const COMPONENTS_PATH = resolve(__dirname, '../src/components')

function routeFactory(components) {
  const route = components.reduce((collection, component) => {
    return [...collection, {
      name: component,
      path: `/${component}`,
    }]
  }, [])

  return route
}

export const describeGenerate = () => {
  // const describeJSON = require(DESCRIBE_JSON_PATH)
  const components = readdirSync(COMPONENTS_PATH)
    .filter((name) => lstatSync(join(COMPONENTS_PATH, name)).isDirectory())
  const route = routeFactory(components)
  // describeJSON.route = route
  // describeJSON.components = components
  return route
}
