const config = require('config');
const { getChildLogger } = require('../core/logging');
const commentsRepository = require('../repository/comments');


const DEFAULT_PAGINATION_LIMIT = config.get('pagination.limit');
const DEFAULT_PAGINATION_OFFSET = config.get('pagination.offset');

const debugLog = (message, meta = {}) => {
	if (!this.logger) this.logger = getChildLogger('comments-service');
	this.logger.debug(message, meta);
};

const getAll = async (
	limit = DEFAULT_PAGINATION_LIMIT,
	offset = DEFAULT_PAGINATION_OFFSET,
) => {
	debugLog('Fetching all comments', { limit, offset });
	const data = await postyRepository.findAll({ limit, offset });
	const count = await commentsRepository.findCount();
	return { data, count, limit, offset };
};

const getByID = (commentID) => {
	debugLog(`Fetching comment with commentID ${commentID}`);
	return commentsRepository.findByID(commentID);
};

const getByPostID = (postID) => {
	debugLog(`Fetching comments with PostID ${PostID}`);
	return commentsRepository.findByPostID(PostID);
};

const create = ({ postID, userID, text}) => {
	const newComment = { postID, userID, text};
	debugLog('Creating new comment', newComment);
	return commentsRepository.create(newComment);
};


const deleteById = async (commentID) => {
	debugLog(`Deleting comment with commentID ${commentID}`);
	await commentsRepository.deleteById(commentID);
};

module.exports = {
    getAll,
    getByID,
    getByPostID,
	create,
	deleteById
}