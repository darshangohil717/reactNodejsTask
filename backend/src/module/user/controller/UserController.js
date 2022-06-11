import UserCollection from "../../../collection/UserCollection";
import UserModel from "../model/UserModel";
import jwt from "jsonwebtoken";

class UserController {
    constructor() {

    }

    saveUser = async(req, res) => {
        try {
            console.log("req body==",req.body)
            let newUser = {};
            newUser.firstName = req.body.firstName;
            newUser.lastName = req.body.lastName;
            newUser.email = req.body.email;
            newUser.dob = req.body.dob;
            newUser.city = req.body.city;
            newUser.state = req.body.state;
            newUser.password = req.body.password;
            newUser.isAdmin = req.body.isAdmin;
            const createUser = await UserModel.saveUser(newUser, req);
            delete createUser.password
            res.status(200).send(createUser);
        } catch (e) {
            console.error("error:",e)
        }
    }

    login = async (req, res) => {
        try {
            
            let findUser = await UserCollection.findOne({
                where:{
                    email: req.body.email,
                    password: req.body.password,
                    isAdmin: true
                }
            })
            console.log(findUser)
            if(findUser) {
                let jwtSecretKey = process.env.JWT_SECRET_KEY;
            let data = {
                time: Date(),
                userId:findUser.id
            }
    
            const token = jwt.sign(data, jwtSecretKey);    
            let newObj = {};
            newObj.token = token
            res.status(200).send(newObj);
            } else {
                res.status(422).send("Invalid email and password !!");
            }
            
        } catch (e) {
            console.error("error:",e);
        }   
    }

    getAllUsers = async(req, res) => {
        try {
            const getUsers = await UserModel.getAllUsers(req, res);
            res.status(200).send(getUsers);
        } catch (e) {
            console.log("error=",e)
        }
    }
}

export default new UserController();