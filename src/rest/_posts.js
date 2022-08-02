const Router = require('@koa/router');
const postsService = require('../service/posts');

const getAll = async (ctx) => {
	ctx.body = await postsService.getAll();
};

const getByID = async (ctx) => {
	ctx.body = await postsService.getByID(ctx.params.postID);
};


const updateByID = async (ctx) => {
	ctx.body = await postsService.updateByID(ctx.params.postID, {
		...ctx.request.body,
        userID: ctx.request.body.userID,
		title: ctx.request.body.title,
		text: ctx.request.body.text
	});
};


const create = async (ctx) => {
	const newPost = await  postsService.create({...ctx.request.body,
        userID: ctx.request.body.userID,
		title: ctx.request.body.title,
		text: ctx.request.body.text});
	ctx.body = newPost;
	ctx.status = 201;
};


const deleteById = async (ctx) => {
	await postsService.deleteById(ctx.params.postID);
	ctx.status = 204;
};


module.exports = (app) => {

    const router = new Router({
		prefix: '/post',
	});


    router.get('/posts', getAll); 
    router.get('/id/:postID', getByID); 
    router.put('/:postID', updateByID); 
	router.post('/', create); 
	router.delete('/:postID', deleteById); 

	app.use(router.routes()).use(router.allowedMethods());

};