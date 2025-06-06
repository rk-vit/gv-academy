import express from "express"
import nodemailer from "nodemailer"
import bodyParser from "body-parser";
import cors from "cors"
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, // 465 for SSL, 587 for TLS
    secure: true, // true for 465, false for 587
    auth: {
      user: process.env.EMAIL_USER, // Your Gmail ID
      pass: process.env.EMAIL_PASS, // Use App Password, not your actual Gmail password
    },
  });
  
const corsOptions = {
    origin: ["https://gurukulavriksham.vercel.app","http://localhost:5173","http://localhost:5174","https://www.gurukulavriksham.com"],
    credentials: true,
    methods: "GET,POST,PUT,DELETE"
};
app.use(express.json());
app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:true}));

app.post("/carrersSubmitt" ,async(req,res)=>{
    console.log("requested");
    const content = `
    name: ${req.body.name}
    email: ${req.body.email}
    phone: ${req.body.phone}
    department: ${req.body.department}
    position: ${req.body.position}
    experience:${req.body.experience}
    education: ${req.body.education}
    message:${req.body.message}
    `;
    console.log("Request received from:", req.body.name);
    try {
        const info = await transporter.sendMail({
            from: "gurukulavrikshamacademy@gmail.com", // Sender address
            to: "supriyaravi2007@gmail.com,gurukulavrikshamacademy@gmail.com", // Receivers
            subject: "Gurukula Vriksham:- New Job Application", // Subject line
            text: content, // Plain text body
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
})

app.post("/contactUs", async (req, res) => {
    const content = `
    Name: ${req.body.name}
    Phone Number: ${req.body.phone}
    Email: ${req.body.email}
    Message: 
    ${req.body.message}
    `;

    console.log("Request received from:", req.body.name);

    try {
        const info = await transporter.sendMail({
            from: "gurukulavrikshamacademy@gmail.com", // Sender address
            to: "supriyaravi2007@gmail.com,gurukulavrikshamacademy@gmail.com", // Receivers
            subject: "Gurukula Vriksham:- New Enquiry", // Subject line
            text: content, // Plain text body
        });

        console.log("Message sent: %s", info.messageId);
        res.status(200).json({ success: true, message: "Email sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ success: false, message: "Failed to send email." });
    }
});

app.listen(port,()=>{
    console.log("Server running in port 3000");
})

