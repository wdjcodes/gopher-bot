module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/strict"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        files: ["src/**/*.ts"],
        project: true
    },
    "plugins": [
        "@typescript-eslint"
    ],
    "rules": {
    }
}
