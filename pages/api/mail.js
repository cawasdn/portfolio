// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const nodemailer = require('nodemailer')
require('dotenv').config()

export default function handler(req, res) {
  const body = JSON.parse(req.body)

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

  // const message = `
  //   Name: ${body.name} \r\n
  //   Email: ${body.email}\r\n
  //   Message: ${body.message}
  // `

  const mailOptions = {
    from: {
      name: `Name of the Sender --> ${body.name}`,
      address: `${body.email}`, // sender address
    },
    to: 'cawasdn@gmail.com', // list of receivers
    subject: `From my Portfolio --> ${body.email}`, // Subject line
    // text: 'Hello world?', // plain text body
    html: `${body.message}`, // html body
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

  console.log(body)
  res.status(200).json({ status: 'Ok' })
}
