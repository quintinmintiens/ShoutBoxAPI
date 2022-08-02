const config = require('config');
const { getChildLogger } = require('../core/logging');
const postsRepository = require('../repository/posts');


const DEFAULT_PAGINATION_LIMIT = config.get('pagination.limit');
const DEFAULT_PAGINATION_OFFSET = config.get('pagination.offset');

const debugLog = (message, meta = {}) => {
	if (!this.logger) this.logger = getChildLogger('posts-service');
	this.logger.debug(message, meta);
};

const getAll = async (
	limit = DEFAULT_PAGINATION_LIMIT,
	offset = DEFAULT_PAGINATION_OFFSET,
) => {
	debugLog('Fetching all posts', { limit, offset });
	const data = await postyRepository.findAll({ limit, offset });
	const count = await postsRepository.findCount();
	return { data, count, limit, offset };
};

const getByID = (postID) => {
	debugLog(`Fetching post with postID ${postID}`);
	return postsRepository.findByID(postID);
};

const create = ({ title, userID, text}) => {
	const newPost = { title, userID, text};
	debugLog('Creating new post', newPost);
	return postsRepository.create(newPost);
};


const deleteById = async (postID) => {
	debugLog(`Deleting post with postID ${postID}`);
	await postsRepository.deleteById(postID);
};

module.exports = {
    getAll,
    getByID,
	create,
	deleteById
}