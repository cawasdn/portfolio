const nodemailer = require('nodemailer')

export default async (req, res) => {
  const body = JSON.parse(req.body)

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASS,
    },
    secure: true,
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

  const mailData = {
    from: {
      name: `${body.name}`,
      address: `${body.email}`,
    },
    // replyTo: email,
    to: 'cawasdn@gmail.com',
    subject: `From my Portfolio --> ${body.email}`,
    // text: message,
    html: `${body.message}`,
  }

  await new Promise((resolve, reject) => {
    // send mail
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err)
        reject(err)
      } else {
        console.log(info)
        resolve(info)
      }
    })
  })
  res.status(200).json({ status: 'OK' })
}
