<<<<<<< HEAD
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/airbnb',
    '@vue/typescript/recommended',
  ],
  ignorePatterns: ['iconfont.js'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-unused-vars': 'warn',
    'no-param-reassign': 'off',
    'class-methods-use-this': 'off',
    'no-debugger': 'off',
    'no-undef': 'off',
    'no-underscore-dangle': 'off',
    'semi': ['warn', 'never'],
    'func-names': 'off',
    'max-classes-per-file': 'off',
    'no-new-func': 'off',
    'no-plusplus': 'off',
    'max-len': ['error', 80],
    'arrow-body-style': 'off',
    'quote-props': ["warn", "as-needed"],
    'vue/no-unused-components': 'warn',
    'indent': 'warn',
    'ban-ts-comment': 'off',
    'no-empty': 'off',
    'global-require': 'off',
    'no-var-requires': 'off',
    'prefer-template': 'warn',
    "import/no-unresolved": "off",
    'no-var-requires': 'off',
    'import/extensions': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
=======
  
module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/vue3-essential',
      '@vue/airbnb',
      '@vue/typescript/recommended',
    ],
    ignorePatterns: ['iconfont.js'],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-unused-vars': 'warn',
      'no-param-reassign': 'off',
      'class-methods-use-this': 'off',
      'no-debugger': 'off',
      'no-undef': 'off',
      'no-underscore-dangle': 'off',
      'semi': ['warn', 'never'],
      'func-names': 'off',
      'max-classes-per-file': 'off',
      'no-new-func': 'off',
      'no-plusplus': 'off',
      'max-len': ['error', 80],
      'arrow-body-style': 'off',
      'quote-props': ["warn", "as-needed"],
      'vue/no-unused-components': 'warn',
      'indent': 'warn',
      'ban-ts-comment': 'off',
      'no-empty': 'off',
      'global-require': 'off',
      'no-var-requires': 'off',
      'prefer-template': 'warn',
      "import/no-unresolved": "off",
      'no-var-requires': 'off',
      'import/extensions': 'off',
    },
    overrides: [
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)',
        ],
        env: {
          jest: true,
        },
      },
    ],
  };
>>>>>>> dev
