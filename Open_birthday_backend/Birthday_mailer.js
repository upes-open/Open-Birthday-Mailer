var nodemailer = require('nodemailer');
const http = require('http') 
const port = 3000
const fs = require('fs')
const cron = require('node-cron')
const Data = require('./details.json');
const { setInterval } = require('timers/promises');
const internal = require('stream');
require('dotenv').config();

let open_mail = process.env.OPEN_MAIL;
let open_pass = process.env.OPEN_PASS;

cron.schedule("00 00 1-31 1-12 *",function(){
  console.log('cron scheduled')
  const server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'})
  },{
    timezone: "Asia/Kolkata"
  })
  
  server.listen(port, function(error) {
    if(error) {
        console.log("Something went wrong", error)
    } else {
        console.log("Server is listening on port " + port)
    }
  })
  
  var name = Data[0];
  var date = Data[1];
  var mail = Data[2];
  
  var d0 = new Date();
  console.log(d0)
  d0 = [d0.getMonth(),d0.getDate()];
  
  var count = 0;
  var i = 0;
  var pos = [];
  for (let d of date){
    d = new Date(d);
    console.log(d)
    d = [d.getMonth(), d.getDate()];
    if (JSON.stringify(d)==JSON.stringify(d0)){
      pos[count]=i;
      count+=1;
    }
    i+=1;
  }
  if (count==0){
    process.exit(1);
  }
  
  send_name=[];
  send_mail=[];
  for(let j of pos){
    send_name.push(name[j]);
    send_mail.push(mail[j]);
  }
  console.log(send_name);
  console.log(send_mail);
  
  var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: open_mail,
      pass: open_pass
    }
  });
  
  for (let i=0; i<count;i++){
    var mailOptions = {
      from: open_mail,
      to: send_mail[i],
      subject: 'Happy Birthday!',
      text: 'Happy Birthday to you '+send_name+' !',
      html: "<h1>Happy birthday" +send_name+"!<h1>"
    };
  
    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    })
  }
})