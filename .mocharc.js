module.exports = {
    require: '@babel/register',
    spec: 'specs/**/*.spec.js',
    ignore: 'specs/example.spec.js',
    file: 'config/setup.js',
    timeout: 15000
}