const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const doctorSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  speciality: { type: String, required: true },
  img: { type: String },
  patients: { type: String },
  hospital: { type: String, required: true },
  city: { type: String, required: true },
  gender: { type: String, required: true },
  verified: { type: Boolean, default: false },
});

doctorSchema.statics.register = async function (
  name,
  email,
  password,
  speciality,
  img,
  patients,
  hospital,
  city,
  gender
) {
  // Validating
  if (!email || !name || !password) {
    throw Error("All fields must be filled");
  }
  const exists = await this.findOne({ email });
  if (exists) {
    throw Error("User already exists");
  }
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const doctor = await this.create({
    name: name,
    email: email,
    password: hash,
    speciality: speciality,
    img: img,
    patients: patients,
    hospital: hospital,
    city: city,
    gender: gender,
  });

  return doctor;
};

doctorSchema.statics.login = async function (email, password) {
  // Validating
  if (!email || !password) {
    throw Error("All fields must be filled");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw Error("Doctor does not exist");
  }
  if(!user.verified){
    throw Error("Doctor is not verified");
  }
  const match = await bcrypt.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect Password");
  }

  return user;
};

module.exports = mongoose.model("Doctor", doctorSchema);
