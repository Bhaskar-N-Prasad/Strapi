const register = ({ strapi }) => {
  strapi.customFields.register({
    name: 'html-previewer',
    plugin: 'html-previewer',
    type: 'string',
    inputSize: {
      // optional
      default: 4,
      isResizable: true,
    },
  });

  
  // register phase
};

export default register