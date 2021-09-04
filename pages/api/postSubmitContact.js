import nodemailer from 'nodemailer'
export default async function postSubmitContact(req, res) {
  if (req.method == 'POST') {
    try{
      var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        auth: {
          type: 'login',
          user: process.env.EMAIL,
          pass: process.env.PASSWORD,
        },
      })
      const mailOptions = {
        from: process.env.EMAIL, // sender address
        to: process.env.EMAIL, // list of receivers
        subject: req.body.firstName || 'Missing Firstname', // Subject line
        html: `<h4>Name - ${req.body.firstName || 'Missing Firstname'}</h4>
            <h4>Email - ${req.body.email || 'Missing Email'}</h4>
            <h4>Message - ${req.body.message || 'Missing Message'}</h4>`, // plain text body
      }
      const result = await transporter.sendMail(mailOptions)
      if (!result.messageId) {
        res
          .status(500)
          .json({ status: 'Something went wrong !', error: 'alert-error' })
      } else {
        res.status(201).json({
          status: 'Message submitted. I will contact you soon.',
          error: 'alert-info',
        })
      }
    }catch(err){
      console.log(err);
      res
        .status(500)
        .json({ status: 'Something went wrong !', error: 'alert-error' })
    }
    
  }
}
