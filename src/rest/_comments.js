const Router = require('@koa/router');
const  commentsService = require('../service/comments');

const getAll = async (ctx) => {
	ctx.body = await  commentsService.getAll();
};

const getByID = async (ctx) => {
	ctx.body = await  commentsService.getByID(ctx.params.commentID);
};

const getByPostID = async (ctx) => {
	ctx.body = await  commentsService.getByPostID(ctx.params.postID);
};

const updateByID = async (ctx) => {
	ctx.body = await  commentsService.updateByID(ctx.params.commentID, {
		...ctx.request.body,
        userID: ctx.request.body.userID,
        postID: ctx.request.body.postID,
		text: ctx.request.body.text
	});
};


const create = async (ctx) => {
	const newComment = await   commentsService.create({...ctx.request.body,
        userID: ctx.request.body.userID,
		postID: ctx.request.body.postID,
		text: ctx.request.body.text});
	ctx.body = newComment;
	ctx.status = 201;
};


const deleteById = async (ctx) => {
	await  commentsService.deleteById(ctx.params.commentID);
	ctx.status = 204;
};


module.exports = (app) => {

    const router = new Router({
		prefix: '/comment',
	});


    router.get('/comments', getAll); 
    router.get('/id/:commentID', getByID); 
    router.get('/id/:postID', getByPostID); 
    router.put('/:commentID', updateByID); 
	router.post('/', create); 
	router.delete('/:commentID', deleteById); 

	app.use(router.routes()).use(router.allowedMethods());

};