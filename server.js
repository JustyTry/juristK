import { createTransport } from 'nodemailer';
import express from 'express';
import cors from 'cors'
import 'dotenv/config'

const app = express()
app.use(express.json())
app.use(cors());

app.post('/send-email', (req, res) => {
    const formData = req.body;

    const transporter = createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: process.env.USERMAIL,
            pass: process.env.USERPASS
        }
    });

    const mailOptions = {
        from: `JuristK <${process.env.USERMAIL}>`,
        to: formData.email,
        subject: 'Пример отправки почты с помощью Nodemailer',
        text: `Имя: ${formData.name}\nФамилия: ${formData.fullname}\nEmail: ${formData.email}\nНомер: ${formData.number}\nСообщение: ${formData.description}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Ошибка при отправке письма:', error);
        } else {
            console.log('Письмо успешно отправлено. ID сообщения:', info.messageId);
        }
    });
})

app.listen(process.env.PORT, () => {
    console.log(`server is running on ${process.env.PORT}`)
})