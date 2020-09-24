// https://www.fullstackoasis.com/articles/2019/06/04/editing-react-files-in-vs-code-results-in-a-parsing-error/

// add the following to vscode preferences:
// "eslint.options" : {
//   "useEslintrc": false,
//   "parserOptions": {
//       "ecmaVersion": 7,
//       "sourceType": "module",
//       "ecmaFeatures": {
//           "jsx": true,
//       }
//   }
// }