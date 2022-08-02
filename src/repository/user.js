const { tables, getKnex } = require('../data/index');
const { getChildLogger } = require('../core/logging');

const findAll =  ({
    limit,
    offset,
  }) => {
    return  getKnex()(tables.user)
      .select()
      .limit(limit)
      .offset(offset);
  };


const findByID =   (userID) => {
  return  getKnex()(tables.user)
    .where(`${tables.user}.userID`, userID)
    .first();
};


const findByEmail = (email) => {
  return getKnex()(tables.user)
    .where(`${tables.user}.email`, email)
    .first();
};


const updateByID = async (userID, {
  naam,
  voornaam ,
  email,
}) => {
  try {
    await getKnex()(tables.user)
      .update({
        naam,
        voornaam ,
        email,
      })
      .where(`${tables.user}.userID`, userID);
    return await findByID(userID);
  } catch (error) {
    const logger = getChildLogger('user-repo');
    logger.error('Error in updateByID', {
      error,
    });
    throw error;
  }
};

const create = async ({
    naam,
    voornaam ,
    email,
    passwordHash,
    roles,
}) => {
  try {
    
    await getKnex()(tables.user)
      .insert({
        naam,
        voornaam ,
        email,
        password_hash: passwordHash,
        roles: JSON.stringify(roles),
      });
    return await findByID(userID);
  } catch (error) {
    const logger = getChildLogger('user-repo');
    logger.error('Error in create', {
      error,
    });
    throw error;
  }
};

const deleteById = async (userID) => {
  try {
    const rowsAffected = await getKnex()(tables.user)
      .delete()
      .where('userID', userID);

    return rowsAffected > 0;
  } catch (error) {
    const logger = getChildLogger('user-repo');
    logger.error('Error in deleteById', {
      error,
    });
    throw error;
  }
};
  
  const findCount = async () => {
    const [count] = await getKnex()(tables.user)
      .count();
    return count['count(*)'];
  };

  module.exports = {
    findAll,
    findByID,
    findByEmail,
    updateByID,
    create,
    deleteById,
    findCount,
  };