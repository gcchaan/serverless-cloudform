import cloudform, { S3, Fn } from 'cloudform'
export default {
  S3: new S3.Bucket({
    BucketName: Fn.Ref('bucket-name')
  })
}
