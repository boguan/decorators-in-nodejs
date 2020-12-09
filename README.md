## Getting Started

At first, install all modules listed in both dependencies and devDependencie, run:

```bash
npm install
```

To execute `index.js` file directly using cli, run:

```bash
npm run index
```

Or you can execute `index.js` file using cli after compiling , run:

```bash
npm run build && node ./output/index-compiled.js
```

## Default configuration

.babelrc

```javascript
{
    "presets": [
        "@babel/preset-env"
    ],
    "plugins": [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose" : true }]
    ]
}
```
