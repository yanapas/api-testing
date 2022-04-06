module.exports = {
    require: '@babel/register',
    spec: 'specs/**/transactions.spec.js',
    ignore: 'specs/example.spec.js',
    file: 'config/setup.js',

}