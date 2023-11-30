const mongoose = require("mongoose");

const validator = require("validator");

const bookingSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  doctorId: { type: String, required: true },
  date: {
    type: "date",
    default: Date.now,
  },
  docname: { type: String, required: true },
  patientname: { type: String, required: true },
  specality: { type: String, required: true },
  hospital: { type: String, required: true },
  city: { type: String, required: true },
  month: { type: String, required: true },
});

bookingSchema.statics.book = async function (
  userId,
  doctorId,
  docname,
  patientname,
  specality,
  hospital,
  city,
  month
) {
  // Validating
  if (!userId || !doctorId) {
    throw Error("All fields must be filled");
  }

  const response = await this.create({
    userId,
    doctorId,
    docname,
    patientname,
    specality,
    hospital,
    city,
    month,
  });

  return response;
};

bookingSchema.statics.getBooking = async function (user, id) {
  // Validating
  if (!id) {
    throw Error("All fields must be filled");
  }
  let response;
  if (user) response = await this.find({ userId: id });
  else response = await this.find({ doctorId: id });

  return response;
};

module.exports = mongoose.model("Booking", bookingSchema);
