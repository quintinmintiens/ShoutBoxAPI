const { tables, getKnex } = require('../data/index');
const { getChildLogger } = require('../core/logging');

const findAll =  ({
    limit,
    offset,
  }) =>  {
     return   getKnex()(tables.posts)
      .select()
      .limit(limit)
      .offset(offset)
      
  };

  const findByID =   (postID) => {
    return  getKnex()(tables.posts)
      .where(`${tables.posts}.postID`, postID)
      .first();
  };

  const updateByID = async (postID, {
    title,
    text
    
  }) => {
    try {
      await getKnex()(tables.posts)
        .update({
          title,
          text
        })
        .where(`${tables.posts}.postID`, postID);
      return await findByID(postID);
    } catch (error) {
      const logger = getChildLogger('posts-repo');
      logger.error('Error in updateByID', {
        error,
      });
      throw error;
    }
  };
  
const create = async ({
  userID,
  title,
  text
}) => {
  try {
    await getKnex()(tables.posts)
      .insert({
        userID,
        title,
        text
      });
    return await findByID(postID);
  } catch (error) {
    const logger = getChildLogger('posts-repo');
    logger.error('Error in create', {
      error,
    });
    throw error;
  }
};


const deleteById = async (postID) => {
  try {
    const rowsAffected = await getKnex()(tables.posts)
      .delete()
      .where('postID', postID);

    return rowsAffected > 0;
  } catch (error) {
    const logger = getChildLogger('posts-repo');
    logger.error('Error in deleteById', {
      error,
    });
    throw error;
  }
};
  
  


  const findCount = async () => {
    const [count] = await getKnex()(tables.posts)
      .count();
    return count['count(*)'];
  };

  module.exports = {
      findAll,
      findByID,
      updateByID,
      create,
      deleteById,
      findCount
  }