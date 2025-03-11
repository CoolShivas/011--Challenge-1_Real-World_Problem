const EventEmitter = require("events");



const amity = new EventEmitter();

amity.addListener("user-login", (userID) => {
    console.log(`${userID} Login Successfully`);
});


amity.on("user-purchase", (userName, item) => {
    console.log(`${userName} purchased ${item}`);
});


amity.on("profile-update", (userName, updation) => {
    console.log(`${userName} profile updated to ${updation} Successfully`);
});

amity.addListener("user-logOut", (userName) => {
    console.log(`${userName} LogOUt Successfully`);
});


amity.emit("user-login", "Shiva Chouhan");
amity.emit("user-purchase", "Shiva Chouhan","Milk");
amity.emit("profile-update", "Shiva Chouhan", "Shiva Khateek Chouhan");
amity.emit("user-logOut", "Shiva Khateek Chouhan");


// // // // Here, we are getting the output on Terminal as :-
// // // // Shiva Chouhan Login Successfully
// // // // Shiva Chouhan purchased Milk
// // // // Shiva Chouhan profile updated to Shiva Khateek Chouhan Successfully
// // // // Shiva Khateek Chouhan LogOUt Successfully

/////**************************************************************************************************************** */
/////------------------------------------------------------------------------------------------------------------------
