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


function retrieveRooms() {
    return rooms.map(room => room.roomNo);
}

function roomDetails(roomNo) {
    // Find the room with matching roomNo
    const room = rooms.find(r => r.roomNo === roomNo);
    if (!room) return 'Room was not found.'; // room not found
    return room;
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

module.exports = {
    rooms,
    createRoom,
    deleteRoom,
    retrieveRooms,
    roomDetails,
    amendRoom
};

