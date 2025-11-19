# Assignment 1

##Rooms Management Module

A simple Node.js module for managing hotel or property rooms.
This module provides CRUD-style operations for creating, retrieving, updating, and deleting room records, stored in an in-memory array. It’s suitable for small projects, prototypes, or as part of a larger booking system.

## Features

Create new rooms
Delete rooms by room number
Retrieve all room numbers
View full room details
Amend room information
In-memory storage (no database required)

##Installation
const { 
    rooms, 
    createRoom, 
    deleteRoom, 
    retrieveRooms, 
    roomDetails, 
    amendRoom 
} = require('./rooms');

##Module Functions
###1. createRoom(roomNo, roomType, nightlyRate, amenities = [], bookedStatus = false)

Creates and stores a new room object.
Parameters:
roomNo (Number/String): Unique room identifier
roomType (String): Type of the room (e.g., "Deluxe", "Suite")
nightlyRate (Number): Price per night
amenities (Array, optional): List of amenities
bookedStatus (Boolean, optional): Booking status

Example:
createRoom(101, "Deluxe", 150, ["WiFi", "TV"], false);

###2. deleteRoom(roomNo)

Deletes a room by its room number.
Returns:
true if the room was successfully deleted
false if the room does not exist

Example:
deleteRoom(101);

###3. retrieveRooms()

Returns an array of all room numbers.

Example:
const list = retrieveRooms();
// [101, 102, 103]

###4. roomDetails(roomNo)

Retrieves full details of a room.
Returns:
Room object
"Room was not found." if it doesn’t exist

Example:
roomDetails(101);
// { roomNo: 101, roomType: "Deluxe", nightlyRate: 150, ... }

###5. amendRoom(roomNo, newDetails)

Updates specific fields of a room.
Only keys provided in newDetails will be updated.

Example:
amendRoom(101, { nightlyRate: 180, bookedStatus: true });

##Data Structure

Each room is stored as:
{
    roomNo: Number | String,
    roomType: String,
    nightlyRate: Number,
    amenities: Array,
    bookedStatus: Boolean
}

# References
This is my inspiration page: [https://sg.trip.com/?locale=en-sg](https://sg.hotels.com/?locale=en_SG&pos=HCOM_SG&siteid=300000040)
