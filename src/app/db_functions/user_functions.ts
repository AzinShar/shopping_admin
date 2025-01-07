const User = require('../../../models/user');

export async function getUserByEmail(email: string) {
    try {
      const user = await User.findOne({
        where: { email },
      });
  
      if (user) {
        return user.toJSON(); // Convert Sequelize instance to plain JSON
      } else {
        return null; // User not found
      }
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error; // Re-throw the error for handling elsewhere
    }
  }