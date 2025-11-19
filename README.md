# Assignment 1

## Hotel Room Booking Module

A lightweight Node.js module for managing hotel or property rooms.
Provides functions for creating, updating, deleting, browsing, booking, and retrieving room information.

This module uses a simple in-memory array (no external database), making it ideal for demos, prototyping, or small applications.

## Features

Create rooms
Delete rooms
Update room information
Book rooms
Browse all rooms
Retrieve specific room details
In-memory, simple, and easy to extend

## Installation

const {
    rooms,
    createRoom,
    deleteRoom,
    amendRoom,
    bookRoom,
    browseRooms,
    roomDetails
} = require('./rooms');

## Data Structure

Each room is stored as:
{
    roomNo: Number | String,
    roomType: String,
    nightlyRate: Number,
    amenities: Array,
    bookedStatus: Boolean
}

## Module Functions

### 1. createRoom(roomNo, roomType, nightlyRate, amenities = [], bookedStatus = false)

Creates and stores a new room object.
Parameters:
roomNo (Number/String): Unique room identifier
roomType (String): Type of the room (e.g., "Deluxe", "Suite")
nightlyRate (Number): Price per night
amenities (Array, optional): List of amenities
bookedStatus (Boolean, optional): Booking status

Example:
createRoom(101, "Deluxe", 150, ["WiFi", "TV"], false);

### 2. deleteRoom(roomNo)

Deletes a room by its room number.
Returns:
true if the room was successfully deleted
false if the room does not exist

Example:
deleteRoom(101);

### 3. amendRoom(roomNo, newDetails)

Updates the fields of an existing room.
Only fields provided in newDetails will be modified.
Returns:
Room has been updated. if successful
Room was not found. if unsuccessful

Example:
amendRoom(101, { nightlyRate: 200, roomType: "Premium Deluxe" });

### 4. bookRoom(roomNo)

Marks a room as booked.
Returns:
"Room has been booked successfully."
"Room was not found."

Example:
bookRoom(101);
//'Room has been booked successfully.'

### 5. browseRooms()

Returns a full list of all room objects.

Example:
const allRooms = browseRooms();

### 6. roomDetails(roomNo)

Returns full details for a specific room.
Returns:
The room object
"Room was not found." if the room doesn’t exist

Example:
roomDetails(101);

# References
This is my inspiration page: [https://sg.trip.com/?locale=en-sg](https://sg.hotels.com/?locale=en_SG&pos=HCOM_SG&siteid=300000040)
