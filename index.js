'use strict';
const BbPromise = require('bluebird');
const path = require("path");
const child_process_1 = require("child_process");

class ServerlessPlugin {
  constructor(serverless, options) {
    this.serverless = serverless;
    this.hooks = {
      'package:compileFunctions': () => BbPromise.bind(this).then(this.mergeRsources),
      'before:dynamodb:start:startHandler': () => BbPromise.bind(this).then(this.mergeRsources),
      'before:offline:start:init': () => BbPromise.bind(this).then(this.mergeRsources),
    };
  }
  mergeRsources() {
    const templatePath = this.serverless.service.custom.cloudform.resources;
    const data = child_process_1.execSync(`$(npm bin)/ts-node -e "import t from '${path.resolve(templatePath)}'; console.log(JSON.stringify(t))"`, { encoding: 'utf-8' });
    const res = JSON.parse(data);
    if (!this.serverless.service.resources) {
      this.serverless.service.resources = { Resources: {} };
    }
    Object.assign(this.serverless.service.resources.Resources, res);
  }
}

module.exports = ServerlessPlugin;
