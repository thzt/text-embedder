const debug = require('debug');
const packageJson = require('../../package.json');

// 指定 debug 的前缀为 package.json 的 name 字段
const log = debug(packageJson.name);

module.exports = log;
