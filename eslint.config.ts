import unocss from '@unocss/eslint-config/flat';

export default [
  unocss,
  {
    rules: {
      'unocss/<rule-name>': 'warn',
      'unocss/<another-rule-name>': ['warn', {/* options */}],
    },
  },
];
