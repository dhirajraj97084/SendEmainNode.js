const nodemailer=require("nodemailer");
const transpoter=nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "dhirajraj97084@gmail.com",
      pass: "dhiraj@407",
    }, 
})
const mailOption={
    from: 'dhirajraj97084@gmail.com', // sender address
    to: "dhirajraj97084@gmail.com", // list of receivers
    subject: "Hello  bhai kaise ho", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // html body
}
transpoter.sendMail(mailOption,(err,info)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("email will be send",info.response)
    }
})