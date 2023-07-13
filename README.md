# ESLint + Prettier + Typescript and React in 2023

原文：[ESLint + Prettier + Typescript and React in 2022](https://blog.devgenius.io/eslint-prettier-typescript-and-react-in-2022-e5021ebca2b1)

记录在 React Typescript 项目中配置 ESLint 和 Prettier 的过程

## 创建 React 项目

```shell
yarn create react-app boilerplate-react-typescript --template typescript
```

这里的 `--template typescript` 参数指定项目使用 Typescript 语言

## 安装配置 ESLint

```shell
yarn add -D eslint
```

初始化 ESLint 配置

```shell
npx eslint --init
```

配置选项：
- 选择 `check syntax and find problems`
- 选择 `JavaScript modules (import/export)`
- 选择 `React`
- 选择 `Typescript yes`
- 选择 `Browser and Node`
- 选择任意喜欢的文件格式，这里选 `Javascript`
- 如果是用 npm 直接选 `yes`，否则 `no`
- 手动安装：`yarn add -D eslint-plugin-react@latest @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest`
- 另外还需要安装一些 Typescript plugins: `yarn add -D eslint-plugin-import @typescript-eslint/parser eslint-import-resolver-typescript`
- 此时项目根目录下：`.eslintrc.js` 

```js
module.exports = {
	"env": {
		"browser": true,
		"es2021": true,
		"node": true
	},
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended"
	],
	"overrides": [{
		"env": {
			"node": true
		},
		"files": [
			".eslintrc.{js,cjs}"
		],
		"parserOptions": {
			"sourceType": "script"
		}
	}],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [	
		"@typescript-eslint",
		"react"
	],
	"rules": {
	}
}
```

## 安装配置 Prettier

**Prettier 仅关注编码风格，不关注语法问题**

安装 Prettier：

```shell
yarn add -D prettier eslint-config-prettier eslint-plugin-prettier eslint-plugin-react-hooks
```

配置 Prettier: `touch .prettierrc`

如果是用 Jest，在 `.eslintrc.js` 中增加 jest 配置

```js
...
	"env": {
		"browser": true,
		"es2021": true,
		"node": true,
		"jest": true // Add this line!
	},
...
```

修改 extends 配置：

```js
...
	"extends": [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"prettier" // Add this line!
	],
...
```

增加 rules 配置：

```js
...
	"rules": {
		"react/react-in-jsx-scope": "off",
		"camelcase": "error",
		"quotes": ["error", "single"],
		"no-duplicate-imports": "error",
		"prettier/prettier": "error"
	}
...
```

了解更多 ESLint  [rules](https://eslint.org/docs/rules/)

更新 plugins：`"plugins": ["react", "react-hooks", "@typescript-eslint", "prettier"],`

设置 eslint-import-resolver-typescript：

```js
"settings": {  
	"import/resolver": {  
		"typescript": {}  
	},
	'react': {
		'version': 'detect', // 解决 React version not specified的 waring
	},
}
```

配置 `.prettierrc` 文件：

```json
{  
	"semi": false,  
	"tabWidth": 2,  
	"printWidth": 100,  
	"singleQuote": true,  
	"trailingComma": "all",  
	"jsxSingleQuote": true,  
	"bracketSpacing": true  
}
```

_修改 prettier 配置可能需要重启 vscode 才能生效_

了解更多配置  [options](https://prettier.io/docs/en/options.html)

## 配置脚本

`package.json` 中配置一些脚本命令

- lint: 查找问题，但不修复
- lint fix: 查找问题，并修复
- format: 查找 prettier 问题，并修复

```json
{  
	...  
	"scripts": {  
	...  
	"lint": "eslint src/**/*.{js,jsx,ts,tsx,json}",  
	"lint:fix": "eslint --fix 'src/**/*.{js,jsx,ts,tsx,json}'",  
	"format": "prettier --write 'src/**/*.{js,jsx,ts,tsx,css,md,json}' --config ./.prettierrc"  
	},  
	...  
}
```


## 更多参考资源

- [https://prettier.io/](https://prettier.io/)
- [https://eslint.org/](https://eslint.org/)