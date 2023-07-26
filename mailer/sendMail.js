const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
})

await new Promise((resolve, reject) => {
  // verify connection configuration
  transporter.verify(function (error, success) {
    if (error) {
      console.log(error)
      reject(error)
    } else {
      console.log('Server is ready to take our messages')
      resolve(success)
    }
  })
})

const mailOptions = {
  from: {
    name: 'New Email',
    address: 'Your Email', // sender address
  },
  to: 'cawasdn@gmail.com', // list of receivers
  subject: 'From my Portfolio', // Subject line
  text: 'Hello world?', // plain text body
  html: '<b>Hello world?</b>', // html body
}

const sendMail = async () => {
  try {
    await transporter.sendMail(mailOptions)
    console.log('Email has been sent')
  } catch (error) {
    console.error(error)
  }
}
sendMail(transporter, mailOptions)
