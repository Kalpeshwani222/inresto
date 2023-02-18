const UserNotifi = require("../../model/userNotifiModel");
const createError = require("http-errors");

const getAllNotifications = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    if (!userId) throw createError.NotFound("User not found");
    const notifications = await UserNotifi.find({ user: userId }).populate(
      "user",
      "-password"
    ).sort({createdAt: -1});

    res.send(notifications);
   
  } catch (error) {
    next(error);
  }
};

module.exports = { getAllNotifications };
