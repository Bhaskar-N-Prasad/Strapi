export default [
  {
    name: 'strapi::security',
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          'script-src': ['https://cdn.ckeditor.com', "https://static.iris.informa.com", "*"],
          'connect-src': ['https://proxy-event.ckeditor.com'],
          'media-src': ["'self'", "https://static.iris.informa.com", "data:", "blob:", "https://market-assets.strapi.io", "https://static.iris.informa.com", "*"],
          "img-src": ["'self'","https://static.iris.informa.com", "data:", "blob:", "https://market-assets.strapi.io", "https://static.iris.informa.com", "*"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  'strapi::logger',
  'strapi::errors',
  // 'strapi::security',
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
