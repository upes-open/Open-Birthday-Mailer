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
      html: `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
      <head>
      <!--[if gte mso 9]>
      <xml>
        <o:OfficeDocumentSettings>
          <o:AllowPNG/>
          <o:PixelsPerInch>96</o:PixelsPerInch>
        </o:OfficeDocumentSettings>
      </xml>
      <![endif]-->
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="x-apple-disable-message-reformatting">
        <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
        <title></title>
        
          <style type="text/css">
            @media only screen and (min-width: 620px) {
        .u-row {
          width: 600px !important;
        }
        .u-row .u-col {
          vertical-align: top;
        }
      
        .u-row .u-col-100 {
          width: 600px !important;
        }
      
      }
      
      @media (max-width: 620px) {
        .u-row-container {
          max-width: 100% !important;
          padding-left: 0px !important;
          padding-right: 0px !important;
        }
        .u-row .u-col {
          min-width: 320px !important;
          max-width: 100% !important;
          display: block !important;
        }
        .u-row {
          width: calc(100% - 40px) !important;
        }
        .u-col {
          width: 100% !important;
        }
        .u-col > div {
          margin: 0 auto;
        }
        }
      body {
        margin: 0;
        padding: 0;
      }
      
      table,
      tr,
      td {
        vertical-align: top;
        border-collapse: collapse;
      }
      
      p {
        margin: 0;
      }
      
      .ie-container table,
      .mso-container table {
        table-layout: fixed;
      }
      
      * {
        line-height: inherit;
      }
      
      a[x-apple-data-detectors='true'] {
        color: inherit !important;
        text-decoration: none !important;
      }
      
      table, td { color: #000000; } a { color: #0000ee; text-decoration: underline; }    </style>
        
        
      
      <!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->
      
      </head>
      
      <body class="clean-body u_body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
        <!--[if IE]><div class="ie-container"><![endif]-->
        <!--[if mso]><div class="mso-container"><![endif]-->
        <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
        <tbody>
        <tr style="vertical-align: top">
          <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
          <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
          
      
      <div class="u-row-container" style="padding: 0px 10px;background-color: rgba(255,255,255,0)">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: #46bb78;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 10px;background-color: rgba(255,255,255,0);" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: #46bb78;"><![endif]-->
            
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
        
      <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Raleway',sans-serif;" align="left">
              
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right: 0px;padding-left: 0px;" align="center">
            
            <img align="center" border="0" src="https://raw.githubusercontent.com/DivijChaudhari/Open-Birthday-Mailer/main/assets/images/image-1.jpeg" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 150px;" width="150"/>
            
          </td>
        </tr>
      </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:16px 20px 8px;font-family:'Raleway',sans-serif;" align="left">
              
        <div style="color: #ffffff; line-height: 120%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 120%;"><strong><span style="font-size: 48px; line-height: 57.6px; font-family: Raleway, sans-serif;">Happy Birthday!</span></strong></p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:22px 0px 0px;font-family:'Raleway',sans-serif;" align="left">
              
      <table width="100%" cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right: 0px;padding-left: 0px;" align="center">
            
            <img align="center" border="0" src="https://github.com/DivijChaudhari/Open-Birthday-Mailer/blob/main/assets/images/image-2.jpeg" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 564px;" width="564"/>
            
          </td>
        </tr>
      </table>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 20px 14px;font-family:'Raleway',sans-serif;" align="left">
              
        <div style="color: #ffffff; line-height: 120%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 120%;"><span style="font-size: 30px; line-height: 36px;">We&rsquo;re going to help you celebrate.</span></p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:10px 20px;font-family:'Raleway',sans-serif;" align="left">
              
        <div style="color: #ffffff; line-height: 130%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 130%;"><span style="font-size: 16px; line-height: 20.8px;">Your birthday comes around only once a year,</span></p>
      <p style="font-size: 14px; line-height: 130%;"><span style="font-size: 16px; line-height: 20.8px;">so let&rsquo;s give it the attention it deserves.</span></p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
      <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 20px 25px;font-family:'Raleway',sans-serif;" align="left">
              
      <div align="center">
        <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Raleway',sans-serif;"><tr><td style="font-family:'Raleway',sans-serif;" align="center"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="" style="height:54px; v-text-anchor:middle; width:187px;" arcsize="18.5%" strokecolor="#ffffff" strokeweight="2px" fillcolor="#3aaee0"><w:anchorlock/><center style="color:#FFF;font-family:'Raleway',sans-serif;"><![endif]-->
          <a href="" target="_blank" style="box-sizing: border-box;display: inline-block;font-family:'Raleway',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #FFF; background-color: #3aaee0; border-radius: 10px;-webkit-border-radius: 10px; -moz-border-radius: 10px; width:auto; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-color: #ffffff; border-top-style: solid; border-top-width: 2px; border-left-color: #ffffff; border-left-style: solid; border-left-width: 2px; border-right-color: #ffffff; border-right-style: solid; border-right-width: 2px; border-bottom-color: #ffffff; border-bottom-style: solid; border-bottom-width: 2px;">
            <span style="display:block;padding:13px 22px;line-height:120%;"><span style="font-size: 24px; line-height: 28.799999999999997px;">CLICK HERE!</span></span>
          </a>
        <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
      </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      
      
      
      <div class="u-row-container" style="padding: 0px 10px;background-color: rgba(255,255,255,0)">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px 10px;background-color: rgba(255,255,255,0);" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
            
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
        
      <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:15px 20px 20px;font-family:'Raleway',sans-serif;" align="left">
              
        <div style="color: #9c9c9c; line-height: 160%; text-align: center; word-wrap: break-word;">
          <p style="font-size: 14px; line-height: 160%;">We hope you have the happiest of birthdays!</p>
      <p style="font-size: 14px; line-height: 160%;">&nbsp;</p>
      <p style="line-height: 160%; font-size: 14px;">Here&rsquo;s to you,</p>
      <p style="line-height: 160%; font-size: 14px;">Team Open</p>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      
      
      
      <div class="u-row-container" style="padding: 30px;background-color: #f0f0f0">
        <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
          <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
            <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 30px;background-color: #f0f0f0;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
            
      <!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
      <div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
        <div style="width: 100% !important;">
        <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
        
      <table style="font-family:'Raleway',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
        <tbody>
          <tr>
            <td style="overflow-wrap:break-word;word-break:break-word;padding:20px;font-family:'Raleway',sans-serif;" align="left">
              
        <div style="line-height: 120%; text-align: left; word-wrap: break-word;">
          <div style="font-family: arial, helvetica, sans-serif;"><span style="font-size: 12px; color: #999999; line-height: 14.399999999999999px;">You received this email because you signed up for UPES-OPEN</span></div>
      <div style="font-family: arial, helvetica, sans-serif;">&nbsp;</div>
      <div style="font-family: arial, helvetica, sans-serif;"><span style="font-size: 12px; color: #999999; line-height: 14.399999999999999px;">Unsubscribe</span></div>
        </div>
      
            </td>
          </tr>
        </tbody>
      </table>
      
        <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
        </div>
      </div>
      <!--[if (mso)|(IE)]></td><![endif]-->
            <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
          </div>
        </div>
      </div>
      
      
          <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
          </td>
        </tr>
        </tbody>
        </table>
        <!--[if mso]></div><![endif]-->
        <!--[if IE]></div><![endif]-->
      </body>
      
      </html>
      `
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