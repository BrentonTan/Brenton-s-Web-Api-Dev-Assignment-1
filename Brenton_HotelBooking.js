let rooms = [];

function createRoom(roomNo, roomType, nightlyRate, amenities = [], bookedStatus = false) {
    rooms.push({ roomNo, roomType, nightlyRate, amenities, bookedStatus });
}

function deleteRoom(roomNo) {
    const index = rooms.findIndex(r => r.roomNo === roomNo);
    if (index === -1) return false;
    rooms.splice(index, 1);
    return true;
}

function amendRoom(roomNo, newDetails = {}) {
    const room = rooms.find(r => r.roomNo === roomNo);
    if (!room) return 'Room was not found.'; // room not found

    // Update only the fields provided in newDetails
    for (let key in newDetails) {
        if (room.hasOwnProperty(key)) {
            room[key] = newDetails[key];
        }
    }
}

function bookRoom(roomNo) {
    const room = rooms.find(r => r.roomNo === roomNo);
    if (!room) { return 'Room was not found.'; } // room not found
    else { 
        room[guestStatus] = True;
        return 'Room has been booked successfully.';
    }
}

function browseRooms() {
    return rooms;
}

function roomDetails(roomNo) {
    // Find the room with matching roomNo
    const room = rooms.find(r => r.roomNo === roomNo);
    if (!room) return 'Room was not found.'; // room not found
    return room;
}

module.exports = {
    rooms,
    createRoom,
    deleteRoom,
    retrieveRoomNos,
    roomDetails,
    amendRoom,
    bookRoom,
    browseRooms
};



