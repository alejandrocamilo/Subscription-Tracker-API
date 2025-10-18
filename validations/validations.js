

export const checkAdminPermission = (req, res) => {
    if (req.user.role !== 'admin') {

        return res.status(403).json({message: "Only the admin have permission to perform this action"});
    }
}

export const checkSubscriptionOwnership = (subscription, req, res) => {
    if (subscription.user._id.toString() !== req.user.id) {
        return res.status(403).json({message: "You do not have permission to perform this action"})
    }
}
