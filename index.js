const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
  service: 'email-service', // gmail, yahoo
  auth: {
    user: 'youremail@example.com',
    pass: 'password-example'
  }
});
const map = new Map();
const mapEmail = new Map();
const mapName = new Map();
const arrayEmail = [];
const arrayName = [];

map.set("Guest 1", "guest1@email.com");
map.set("Guest 2", "guest2@email.com");
map.set("Guest 3", "guest3@email.com");
map.set("Guest 4", "guest4@email.com");

map.forEach((value, key) => {
  arrayName.push(key);
  arrayEmail.push(value);
});

while(mapEmail.size != map.size){
  const indexEmail = Math.floor(Math.random() * arrayEmail.length);
  const indexName = Math.floor(Math.random() * arrayName.length);
  
  if(!(map.get(arrayName[indexName]) == arrayEmail[indexEmail])){
    if(!mapEmail.has(arrayEmail[indexEmail]) && !mapName.has(arrayName[indexName])){
      mapEmail.set(arrayEmail[indexEmail], "");
      mapName.set(arrayName[indexName], "");

      var mailOptions = {
        from: 'youremail@example.com',
        to: arrayEmail[indexEmail],
        subject: 'Secret Sant',
        text: "Your secret santa is " + arrayName[indexName] + "!"
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
  }
}
