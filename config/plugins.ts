import { resolve } from "path";

export default ({ env }) => ({
  // Plugins Configuration
  'color-picker': {
    enabled: true,
    resolve: './src/plugins/color-picker'
  },
  'checkbox': {
    enabled: true,
    resolve: './src/plugins/checkbox'
  },
  'html-previewer': {
    enabled: true,
    resolve: './src/plugins/html-previewer'
  },
  'strapi-populate': {
    enabled: true,
    resolve: './src/plugins/strapi-populate'
  },

  // Upload Configuration
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        accessKeyId: env('AWS_ACCESS_KEY_ID'),
        secretAccessKey: env('AWS_ACCESS_SECRET'),
        region: env('AWS_REGION'),
        params: {
          Bucket: env('AWS_BUCKET_NAME'),
        },
      },
      actionOptions: {
        upload: {
          ACL: null
        },
        uploadStream: {
          ACL: null
        },
      }
    },
  },
});