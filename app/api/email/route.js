const { NextResponse } = require("next/server");
const nodemailer = require("nodemailer");

async function POST(request) {
  const { name, email, company, startDate, details } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)

    subject: `Business Inquiry from ${name} - ${company}`,
    text: `Email:\n${email}\n\nTarget Start Date:\n${startDate}\n\nDetails:\n${details}`,
  };

  const sendMailPromise = () =>
    new Promise((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });

  try {
    await sendMailPromise();
    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

module.exports = {
  POST,
};
