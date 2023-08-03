import mongoose from 'mongoose';
const {Schema, model} = mongoose;

const bookingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  numberOfAdults: {
    type: Number,
    required: true
  },
  roomType: {
    type: String,
    required: true
  },
  numberOfChildren: {
    type: Number,
    default: 0
  },
  numberOfRooms: {
    type: Number,
    required: true
  }
});

const Booking = model('Booking', bookingSchema);

export default Booking;
