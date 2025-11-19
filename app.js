const hotel = require('./Brenton_HotelBooking.js');

//Create rooms
hotel.createRoom(101, "Deluxe", 120.00, ["WiFi", "TV"], true);
hotel.createRoom(102, "Suite", 250.00, ["WiFi", "TV", "Mini Bar"], false);
hotel.createRoom(103, "Standard", 90.00, ["WiFi"], true);
hotel.createRoom(104, "Executive", 180.00, ["WiFi", "TV", "Workspace"], true);
hotel.createRoom(105, "Penthouse", 500.00, ["WiFi", "TV", "Jacuzzi", "Kitchen"], false);

//Browse all rooms
console.log(hotel.browseRooms());

//Delete room 104
const isDeleted = hotel.deleteRoom(104);
console.log(isDeleted ? "Room 104 deleted." : "Room 104 not found.");

//Check for deleted room
console.log(hotel.browseRooms());

//Get details of room by room number
console.log(hotel.roomDetails(102));

//If room is not available
console.log(hotel.roomDetails(104));

//Update room details
hotel.amendRoom(102, { nightlyRate: 275, amenities: ["WiFi", "TV", "Mini Bar"] });
console.log("After update:", hotel.roomDetails(102));

//Book a room
console.log(hotel.roomDetails(105));
hotel.bookRoom(105);
console.log(hotel.roomDetails(105));

