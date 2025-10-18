import User from "../models/user.model.js";

export const getUsers = async (req, res, next) => {

    try {

        if (req.user.role !== 'admin') {
            return res.status(401).json({message: "Unauthorized"});
        }

        const users = await User.find();

        res.status(200).json({success: true, data: users});

    } catch(error) {
        next(error)
    }


}

export const getUser = async (req, res, next) => {

    try {

        const user = await User.findById(req.params.id).select("-password");

        if(!user){
            const error = new Error("User not found by id you passed in");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({success: true, data: user});

    } catch(error) {
        next(error)
    }


}

export const updateUser = async (req, res, next) => {

    try {

        if (req.user.id !== req.params.id && req.user.role !== 'admin') {
            return res.status(403).json({message: "Unauthorized"});
        }

        const userUpdated = await User.findByIdAndUpdate(
            req.params.id,
            {...req.body},
            {new: true})

        if (!userUpdated){
            const error = new Error("Unable to update. User not found");
            error.statusCode = 404;
            throw error;
        }

        res.status(200).json({success: true, data: userUpdated});

    } catch (error){
        next(error)
    }
}

export const deleteAllUsers = async (req, res, next) => {
    try {

        if (req.user.role !== 'admin') {
            return res.status(403).json({message: "Unauthorized"});
        }

        const response = await User.deleteMany({});

        res.status(200).json({success: true, data: response});
    } catch (e) {
        next(e);
    }
}