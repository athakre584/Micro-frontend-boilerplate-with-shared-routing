module.exports = {
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.svg$': 'jest-svg-transformer',
  },
  moduleFileExtensions: ['*', 'js', 'jsx'],
  moduleNameMapper: {
    '^GlobalComponents(.*)$': '<rootDir>/src/components/$1',
    '^Services(.*)$': '<rootDir>/src/services/$1',
    '^Constants(.*)$': '<rootDir>/src/utils/constants/$1',
    '^Helpers(.*)$': '<rootDir>/src/utils/helpers/$1',
    '^Svg(.*)$': '<rootDir>/src/static/images/svg/$1',
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      'jest-transform-stub',
    '\\.(css|scss)$': 'identity-obj-proxy',
  },
};
