module.export = () => {
  // return a webpack config getter
  return () => {
    // return webpack config
    return {
      entry: () => {
        const entry = {
          polyfills: ['regenerator-runtime', 'core-js-bundle'],
          theme: ['@talend/bootstrap-theme'],
        };
      }
    };
  };
};
