import { createTransport } from "nodemailer";

const transporter = createTransport({
    port: 465,
    host: "smtp.163.com",
    auth: {
        user: "kbws13@163.com",
        pass: "HEUQrjs88jhta8Ju",
    },
    secure: true,
});

export default transporter;