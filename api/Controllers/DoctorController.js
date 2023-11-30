const Booking = require("../Models/BookingSchema");
const Doctor = require("../Models/DoctorSchema");

// Register
const register = async (req, res) => {
  const {
    name,
    email,
    password,
    speciality,
    img,
    patients,
    hospital,
    city,
    gender,
  } = req.body;

  try {
    const doc = await Doctor.register(
      name,
      email,
      password,
      speciality,
      img,
      patients,
      hospital,
      city,
      gender
    );
    res.status(200).json({ doc });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// GET
const getDocData = async (req, res) => {
  try {
    const doctorData = await Doctor.find({});
    if (!doctorData) {
      return res.status(404).send("error in DoctorRoute");
    }
    res.status(200).json(doctorData);
  } catch (error) {
    console.log("Error" + error);
  }
};

//GET
const getDocDataWithEm = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const docdata = await Doctor.findOne({ email: id });
    if (!docdata) {
      return res.status(404).send("error in UserController");
    }
    res.status(200).json(docdata);
  } catch (error) {
    console.log("Error" + error);
  }
};

// POST
const bookDoctor = async (req, res) => {
  const { userId, doctorId, docname,patientname, specality, hospital, city, month } = req.body;
  try {
    const response = await Booking.book(
      userId,
      doctorId,
      docname,
      patientname,
      specality,
      hospital,
      city,
      month
    );
    res.status(200).json({ response });
  } catch (error) {
    console.log("Error" + error);
  }
};

const getBooking = async (req, res) => {
  const id = req.body.userId ? req.body.userId : req.body.doctorId;
  const user = req.body.userId ? true : false;
  try {
    const response = await Booking.getBooking(user, id);
    res.status(200).json({ response });
  } catch (error) {
    console.log("Error" + error);
  }
};

module.exports = {
  register,
  getDocData,
  bookDoctor,
  getBooking,
  getDocDataWithEm,
};
