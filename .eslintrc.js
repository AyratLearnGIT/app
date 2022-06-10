module.exports = {
    "env": {
        "browser": true,
        node: true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module",
        "allowImportExportEverywhere": true
    },
    "plugins": [
        "react"
    ],
    "ignorePatterns": ["*.test.js"],
    "rules": {
        'react/react-in-jsx-scope': 'off'
    }
}
