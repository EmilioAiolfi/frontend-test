import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import { readFileSync } from 'jsonfile';
import services from './../services';
import routes from '../client/routes';
import NotFoundPage from '../client/components/NotFoundPage';

module.exports = {
  renderTemplate: function (req, res) {

    let markup;
    let filename = services.templatePath.getFilenameByRoute(
      req.params[0],
      CONFIG.VIEW.EXTENSION
    );
    const manifestPath = `${process.cwd()}/public/static/build-manifest.json`;
    const manifest = readFileSync(manifestPath);
    const styleBundle = manifest['app.css'];
    const jsBundle = manifest['app.js'];
    const vendorBundle = manifest['vendor.js'];

    // universal routing and rendering
    match({
        routes,
        location: req.url
      },
      (err, redirectLocation, renderProps) => {
        // in case of error display the error message
        if (err) {
          return res.status(500).send(err.message);
        }

        // in case of redirect propagate the redirect to the browser
        if (redirectLocation) {
          return res.redirect(302, redirectLocation.pathname +
            redirectLocation.search);
        }

        fs.readFile(
          path.join(CONFIG.VIEW.VIEW_PATH, filename),
          CONFIG.VIEW.ENCODING,
          function (err, body) {
            if (err) {
              if (err.code === 'ENOENT') {

                if (renderProps) {
                  // if the current route matched we have renderProps
                  let prevFilename = services.templatePath.getFilenameByRoute(
                    filename.substring(0, filename.lastIndexOf('/')),
                    CONFIG.VIEW.EXTENSION
                  );
                  // renderProps.routes[0].path

                  markup = renderToString( <RouterContext { ...renderProps }/>);
                    res.render(prevFilename, {
                      markup,
                      vendorBundle,
                      jsBundle,
                      styleBundle
                    });

                } else {
                  // otherwise we can render a 404 page
                  markup = renderToString( < NotFoundPage / > );
                  res.status(404);
                  // render the index template with the embedded React markup
                  res.render('404', {
                    markup,
                    vendorBundle,
                    jsBundle,
                    styleBundle
                  });
                }

              } else {
                // unknow error
                throw err;
              }

            } else {
              // generate the React markup for the current route
              if (renderProps) {
                // if the current route matched we have renderProps
                markup = renderToString( <RouterContext {...renderProps} />);
              } else {
                // otherwise we can render a 404 page
                markup = renderToString( < NotFoundPage / > );
                res.status(404);
              }
              // render the index template with the embedded React markup
              res.render(filename, {
                markup,
                vendorBundle,
                jsBundle,
                styleBundle
              });
            }

          }
        );
      }
    );

  }
};
