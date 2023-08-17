module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "prettier"
    ],
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "rules": {
        "no-restricted-globals": [
            2,
            "event", "error"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ]
    }
};
