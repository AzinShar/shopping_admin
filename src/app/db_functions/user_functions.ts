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

  export async function saveUserToDatabase( email: string, password: string) {
    try {
      await User.create({ email, password });
    } catch (error) {
      console.error('Error saving user:', error);
      throw error; // Re-throw the error for handling elsewhere
    }
  }

  export async function userExists(email: string) {
    try {
      const user = await User.findOne({
        where: { email },
      });
  
      return !!user; // Convert to boolean
    } catch (error) {
      console.error('Error fetching user:', error);
      throw error; // Re-throw the error for handling elsewhere
    }
  } 