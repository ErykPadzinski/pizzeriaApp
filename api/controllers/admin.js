import Admin from "../models/Admin.js";

//UPDATE
export const updateAdmin = async (req, res, next) => {
  try {
    const updatedAdmin = await Admin.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedAdmin);
  } catch (err) {
    next(err);
  }
};
//DELETE
export const deleteAdmin = async (req, res, next) => {
  try {
    await Admin.findByIdAndDelete(req.params.id);
    res.status(200).json("Admin has been deleted");
  } catch (err) {
    next(err);
  }
};
//GET
export const getAdmin = async (req, res, next) => {
  try {
    const admin = await Admin.findById(req.params.id);
    res.status(200).json(admin);
  } catch (err) {
    next(err);
  }
};
//GET ALL
export const getAllAdmins = async (req, res, next) => {
  try {
    const allAdmins = await Admin.find();
    res.status(200).json(allAdmins);
  } catch (err) {
    next(err);
  }
};
