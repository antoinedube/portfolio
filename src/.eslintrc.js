module.exports = {
    'env': {
        'browser': true,
    },
    'extends': [
        'eslint:recommended',
    ],
    'installedESLint': true,
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': [
            'error',
            'unix'
        ],
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'always'
        ],
        'max-len': [
            'error',
            { 'code': 120 },
            { 'tabWidth': 4 }
        ]
    },
    'plugins' : [],
    'parserOptions': {
        'ecmaVersion': 6
    },
    'globals': {
        '__dirname': true,
        'd3': true,
        'require': true,
        '$': true,
        '_': true
    }
};
