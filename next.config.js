const withImages = require('next-images');

module.exports = withImages({
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/azp39': { page: '/azp39' },
      '/t34': { page: '/t34' },
      '/t37a': { page: '/t37a' },
      '/t38': { page: '/t38' },
      '/t60': { page: '/t60' },
      '/zis3': { page: '/zis3' },
    };
  }
});
