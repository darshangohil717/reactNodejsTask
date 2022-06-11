import UserCollection from "../../../collection/UserCollection"

class UserModel {
    constructor() {

    }

    saveUser = async(newuser, res) => {
        try {
            const createUser = await new UserCollection(newuser).save();
            return createUser;
        } catch (e) {
            console.error("error:",e)
        }
    }

    getAllUsers = async(req, res) => {
        const getUsers = await UserCollection.findAll();
        return getUsers;
    }
}

export default new UserModel();