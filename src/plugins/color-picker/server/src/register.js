const register = ({ strapi }) => {
  strapi.customFields.register({
    name: 'color-picker',
    plugin: 'color-picker',
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