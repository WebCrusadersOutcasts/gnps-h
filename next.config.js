module.exports = {
    webpack: (config) => {
      config.resolve.alias = {
        buffer: 'buffer',
      };
  
      return config;
    },
  };