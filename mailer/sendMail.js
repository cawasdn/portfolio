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
