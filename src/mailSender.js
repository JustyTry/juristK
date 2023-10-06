import { createTransport } from 'nodemailer';
import express from 'express';
import cors from 'cors'
const app = express()
app.use(express.json())
app.use(cors())
app.post('/send-email', (req, res) => {
    const formData = req.body;

    const transporter = createTransport({
        host: 'smtp.mail.ru',
        port: 465,
        secure: true,
        auth: {
            user: 'fallenn2@mail.ru',
            pass: 'MpYBYTFii4b1VLpXjESQ'
        }
    });

    const mailOptions = {
        from: 'JuristK <fallenn2@mail.ru>',
        to: 'amaslak.ru@mail.ru',
        subject: 'Пример отправки почты с помощью Nodemailer',
        text: `Имя: ${formData.name}\nEmail: ${formData.email}\nСообщение: ${formData.message}`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Ошибка при отправке письма:', error);
        } else {
            console.log('Письмо успешно отправлено. ID сообщения:', info.messageId);
        }
    });
})

app.listen(3000, () => {
    console.log(`Example app listening on port 3000`)
})