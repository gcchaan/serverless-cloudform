# Serverless Cloudform Plugin

[![npm](https://img.shields.io/npm/v/serverless-cloudform.svg)](https://www.npmjs.com/package/serverless-cloudform)
[![license](https://img.shields.io/github/license/gcchaan/serverless-cloudform.svg)](https://github.com/gcchaan/serverless-cloudform/blob/master/LICENSE)

A [serverless](https://serverless.com) plugin to define AWS CloudFormation templates with [cloudform](https://github.com/bright/cloudform)

## Usage

### Install

```bash
$ > yarn add serverless-cloudform
```

```bash
$ > npm install serverless-cloudform
```

### Configuration

```yaml
plugins:
  - serverless-cloudform

custom:
  cloudform:
    resources: 'path/to/resources' # include path/to/resources.ts
```

### Template

```TypeScript
import cloudform, { S3, Fn } from 'cloudform'
export default {
  // cloudform resource template here
  S3: new S3.Bucket({
    BucketName: Fn.Ref('bucket-name')
  })
}
```