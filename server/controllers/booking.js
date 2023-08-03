import Booking from "../models/Booking.js";

export const newbooking = async(req,res) =>{
    try {
        const {
          name,
          phone,
          email,
          numberOfAdults,
          roomType,
          numberOfChildren,
          numberOfRooms
        } = req.body;
    

        const newBooking = new Booking({
          name,
          phone,
          email,
          numberOfAdults,
          roomType,
          numberOfChildren,
          numberOfRooms
        });
    
        const savedBooking = await newBooking.save();
    
        res.status(201).json(savedBooking);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const deletebooking = async(req,res) =>{
    try {
        const bookingId = req.params.id;
    
        const deletedBooking = await Booking.findByIdAndDelete(bookingId);
    
        if (!deletedBooking) {
          return res.status(404).json({ msg: 'Booking not found' });
        }
    
        res.status(200).json({ msg: 'Booking deleted successfully', deletedBooking });
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}