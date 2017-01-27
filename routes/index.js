import controllers from './../controllers';

module.exports = function(app) {
  app
    .route('/site/*')
    .get(controllers.renderTemplate);
};
