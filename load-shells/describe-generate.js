const { lstatSync, writeFileSync, readdirSync } = require('fs')
const { join } = require('path')
const { resolve } = require('path')

const COMPONENTS_PATH = resolve(__dirname, '../src/components')
const DESCRIBE_JSON_PATH = resolve(__dirname, '../src/common/describe.json')

function isFileExist(path) {
  try {
    lstatSync(path)
    return true
  } catch (e) {
    return false
  }
}

function routeFactory(components) {
  const route = components.reduce((collection, component) => {
    return [...collection, {
      name: component,
      path: `/${component}`,
    }]
  }, [])

  return route
}

(function () {
  if (!isFileExist(DESCRIBE_JSON_PATH)) {
    writeFileSync(DESCRIBE_JSON_PATH, JSON.stringify({ components: [], route: [] }))
  }

  const describeJSON = require(DESCRIBE_JSON_PATH)
  const components = readdirSync(COMPONENTS_PATH)
    .filter((name) => lstatSync(join(COMPONENTS_PATH, name)).isDirectory())
  const route = routeFactory(components)
  describeJSON.route = route
  describeJSON.components = components
  try {
    writeFileSync(DESCRIBE_JSON_PATH, JSON.stringify(describeJSON, null, 2))
  } catch (e) {
    console.error(e)
  }
}())
