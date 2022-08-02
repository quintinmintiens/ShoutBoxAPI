const { tables, getKnex } = require('../data/index');
const { getChildLogger } = require('../core/logging');

const findAll =  ({
    limit,
    offset,
  }) =>  {
     return   getKnex()(tables.comments)
      .select()
      .limit(limit)
      .offset(offset)
      
  };

  const findByID =   (commentID) => {
    return  getKnex()(tables.comments)
      .where(`${tables.comments}.commentID`, commentID)
      .first();
  };

  const findByPostID =   (PostID) => {
    return  getKnex()(tables.comments)
      .where(`${tables.comments}.postID`, postID);
  };
const create = async ({
  postID,
  userID,
  text,
}) => {
  try {
    await getKnex()(tables.comments)
      .insert({
        postID,
        userID,
        text,
      });
    return await findByID(commentID);
  } catch (error) {
    const logger = getChildLogger('comments-repo');
    logger.error('Error in create', {
      error,
    });
    throw error;
  }
};


const deleteById = async (commentID) => {
  try {
    const rowsAffected = await getKnex()(tables.comments)
      .delete()
      .where('commentID', commentID);

    return rowsAffected > 0;
  } catch (error) {
    const logger = getChildLogger('comments-repo');
    logger.error('Error in deleteById', {
      error,
    });
    throw error;
  }
};
  
  const findCount = async () => {
    const [count] = await getKnex()(tables.comments)
      .count();
    return count['count(*)'];
  };

  module.exports = {
      findAll,
      findByID,
      findByPostID,
      create,
      deleteById,
      findCount
  }