const CircularJSON = require('circular-json');

const chat = {
    
        isGroupChat: false,
        users: [
          {
            name: "Ayush Shah",
            email: "john@example.com",
          },
          {
            name: "Ayushhhh",
            email: "piyush@example.com",
          },
        ],
        _id: "457094758239211@1",
        chatName: "Ayush SHah",
      
      
};
chat.self = chat; // Creating a circular reference

const jsonString = CircularJSON.stringify(chat);





const { json } = require("express")

const chat1=[
    
]
// const c=JSON.stringify(chat)
module.exports={jsonString}