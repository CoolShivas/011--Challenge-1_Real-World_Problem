const EventEmitter = require("events");



const amity = new EventEmitter();

// amity.addListener("user-login", (userID) => {
//     console.log(`${userID} Login Successfully`);
// });


// amity.on("user-purchase", (userName, item) => {
//     console.log(`${userName} purchased ${item}`);
// });


// amity.on("profile-update", (userName, updation) => {
//     console.log(`${userName} profile updated to ${updation} Successfully`);
// });

// amity.addListener("user-logOut", (userName) => {
//     console.log(`${userName} LogOUt Successfully`);
// });


// amity.emit("user-login", "Shiva Chouhan");
// amity.emit("user-purchase", "Shiva Chouhan","Milk");
// amity.emit("profile-update", "Shiva Chouhan", "Shiva Khateek Chouhan");
// amity.emit("user-logOut", "Shiva Khateek Chouhan");


// // // // Here, we are getting the Output on Terminal as :-
// // // // Shiva Chouhan Login Successfully
// // // // Shiva Chouhan purchased Milk
// // // // Shiva Chouhan profile updated to Shiva Khateek Chouhan Successfully
// // // // Shiva Khateek Chouhan LogOUt Successfully

/////**************************************************************************************************************** */
/////------------------------------------------------------------------------------------------------------------------


const emitCounter = {
    "user-logging-In":0,
    "user-Purchase":0,
    "user-Upadation":0,
    "user-logging-Out":0,
};

amity.addListener("user-login", (userID) => {
    emitCounter["user-logging-In"]++;
    console.log(`${userID} Login Successfully`);
});


amity.on("user-purchase", (userName, item) => {
    emitCounter["user-Purchase"]++;
    console.log(`${userName} purchased ${item}`);
});


amity.on("profile-update", (userName, updation) => {
    emitCounter["user-Upadation"]++;
    console.log(`${userName} profile updated to ${updation} Successfully`);
});

amity.addListener("user-logOut", (userName) => {
    emitCounter["user-logging-Out"]++;
    console.log(`${userName} LogOUt Successfully`);
});


amity.addListener("Summary", () => {
    console.log(emitCounter);
});


amity.emit("user-login", "Shiva Chouhan");
amity.emit("user-purchase", "Shiva Chouhan","Milk");
amity.emit("profile-update", "Shiva Chouhan", "Shiva Khateek Chouhan");
amity.emit("user-logOut", "Shiva Khateek Chouhan");
amity.emit("Summary");



// // // // Here, we are getting the Output on Terminal as :-
// // // // Shiva Chouhan Login Successfully
// // // // Shiva Chouhan purchased Milk
// // // // Shiva Chouhan profile updated to Shiva Khateek Chouhan Successfully
// // // // Shiva Khateek Chouhan LogOUt Successfully
// // // // {
// // // //   'user-logging-In': 1,
// // // //   'user-Purchase': 1,
// // // //   'user-Upadation': 1,
// // // //   'user-logging-Out': 1
// // // // }