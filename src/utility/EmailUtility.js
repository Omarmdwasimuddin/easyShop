import nodemailer from 'nodemailer';

export async function SendEmail(EmailTo, EmailText, EmailSubject) {
  let Transport = nodemailer.createTransport({
    host: "smtp.gmail.com",                
    port: 587,
    secure: false,                         
    auth: {
      user: "mdwasimu015@gmail.com",       
      pass: "ofos efaj tzlj arpp",      
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOption = {
    from: "EasyShop Support <mdwasimu015@gmail.com>", 
    to: EmailTo,
    subject: EmailSubject,                          
    text: EmailText
  };

  return await Transport.sendMail(mailOption);
}