#! /usr/bin/env node
const { resolve, join } = require('path')
const { program } = require('commander')
const fs = require('fs')
const chalk = require('chalk')
const { render } = require('tiny-template-engine')
const {
  mkdirSync, writeFileSync, readFileSync, rmdirSync,
} = require('fs')
const packageJson = require('../../package.json')

const COMPONENTS_PATH = resolve(__dirname, '../../src/components')
const EXPORT_TMPL_PATH = resolve(__dirname, './templates/exportTmpl.tmpl')
const COMPONENT_TMPL_PATH = resolve(__dirname, './templates/componentTmpl.tmpl')
const SFC_TMPL_PATH = resolve(__dirname, './templates/sfcTmpl.tmpl')
const SCSS_TMPL_PATH = resolve(__dirname, './templates/scssTmpl.tmpl')

/**
 *
 * @param {string} componentName
 * @returns build a json for component dir description
 */
const createDescription = (componentName) => {
  const componentDirDescription = {
    name: componentName,
    children: [
      {
        name: 'examples',
        children: [{
          name: 'index.vue',
          tmplPath: SFC_TMPL_PATH,
        }],
      },
      {
        name: `${componentName}.scss`,
        tmplPath: SCSS_TMPL_PATH,
      },
      {
        name: `${componentName}.tsx`,
        tmplPath: COMPONENT_TMPL_PATH,
      },
      {
        name: 'index.ts',
        tmplPath: EXPORT_TMPL_PATH,
      },
    ],
  }

  const pStack = [COMPONENTS_PATH]

  /**
    *
    * @param {componentDirDescription} description
    * @returns
    */
  function walkEnhance(description) {
    pStack.push(description.name)
    if (description.children) {
      description.children = walkEnhance(description.children)
    }
    if (Array.isArray(description)) {
      const ret = description.reduce((p, n) => {
        return [...p, walkEnhance(n)]
      }, [])
      pStack.pop()
      return ret
    }
    const ret = { ...description, absPath: resolve(...pStack.filter(Boolean)) }
    pStack.pop()
    return ret
  }

  return walkEnhance(componentDirDescription)
}

function build(description, renderData) {
  if (description.children) { // is dir
    mkdirSync(description.absPath)
    description.children.forEach((child) => {
      build(child, renderData)
    })
  } else { // file
    try {
      const renderedTmpl = render(readFileSync(description.tmplPath), renderData)
      writeFileSync(description.absPath, renderedTmpl)
    } catch (e) {
      rmWithError(e)
    }
  }
}

program
  .command('component <component-name>')
  .description('create a new component')
  .action((componentName) => {
    if (!componentName) {
      console.error(chalk.red('must have a component name!'))
      exit(-1)
    }
    componentName = componentName.toLowerCase()
    const utilsPath = resolve(__dirname, '../../src/utils')
    const componentPath = join(COMPONENTS_PATH, componentName)
    const renderData = { componentName, utilsPath }
    try {
      build(createDescription(componentName), renderData)
    } catch (e) {
      if (/EEXIST/.test(e.message)) {
        console.log('component already exist!')
        process.exit(-1)
      } else {
<<<<<<< HEAD
        console.error('know error~')
        console.error(e)
=======
        console.error('unknow error~')
        console.error(e.message)
>>>>>>> dev
        rmdirSync(resolve(COMPONENTS_PATH, componentPath), { recursive: true })
        process.exit(-1)
      }
    }
  })

program
  .version(`cli version: ${packageJson.version}`)
  .usage(`${chalk.cyan('<command> [options]')}`)

program.parse(process.argv)
