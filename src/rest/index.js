const Router = require('@koa/router');

const installUserRouter = require('./_user');
const installPostRouter = require('./_posts');
const installCommentRouter = require('./_comments');


/**
 * Install all routes in the given Koa application.
 *
 * @param {Koa} app - The Koa application.
 */
module.exports = (app) => {
    const router = new Router({
        prefix: '/api',
    });

    installUserRouter(router);
    installPostRouter(router);
    installCommentRouter(router);
 

    app.use(router.routes()).use(router.allowedMethods());
};