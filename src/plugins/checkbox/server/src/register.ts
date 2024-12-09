const register = ({ strapi }) => {
  strapi.customFields.register({
    name: 'checkbox',
    plugin: 'checkbox',
    type: 'boolean',
    
  });

  
  // register phase
};

export default register