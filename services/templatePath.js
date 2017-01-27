import path from 'path';

module.exports = {
  getFilenameByRoute: (routePath, extension) => {
    return path.normalize(routePath).replace(/\/$/, '') + '.' + extension;
  }
};
