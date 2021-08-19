module.exports = {
  presets: [[
    '@vue/cli-plugin-babel/preset',
    { useBuiltIns: 'usage', corejs: { version: 3 },}
  ]],
  include: [/src/]
};
