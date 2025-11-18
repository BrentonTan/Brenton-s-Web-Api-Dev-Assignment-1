const hotel = require('./functions/Brenton_HotelBooking.js');

//Create rooms
hotel.createRoom(101, "Deluxe", 120.00, ["WiFi", "TV"], true);
hotel.createRoom(102, "Suite", 250.00, ["WiFi", "TV", "Mini Bar"], false);
hotel.createRoom(103, "Standard", 90.00, ["WiFi"], true);
hotel.createRoom(104, "Executive", 180.00, ["WiFi", "TV", "Workspace"], true);
hotel.createRoom(105, "Penthouse", 500.00, ["WiFi", "TV", "Jacuzzi", "Kitchen"], false);

//Retrieve all room numbers
const allRoomNos = hotel.retrieveRooms();
console.log(allRoomNos);

//Delete room 104
const isDeleted = hotel.deleteRoom(104);
console.log(isDeleted ? "Room 104 deleted." : "Room 104 not found.");

//Check updated rooms
const updatedRoom = hotel.retrieveRooms();
console.log(updatedRoom);

//Get details of room by room number
console.log(hotel.roomDetails(105));

//If room is not available
console.log(hotel.roomDetails(104));
console.log(hotel.roomDetails(102));

//Update room details
hotel.amendRoom(102, { nightlyRate: 275, bookedStatus: true, amenities: ["WiFi", "TV", "Mini Bar"] });
console.log("After update:", hotel.roomDetails(102));