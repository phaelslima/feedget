import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'
import 'dotenv/config'

const transport = nodemailer.createTransport({
  host: process.env.NODEMAILER_HOST,
  port: 2525,
  auth: {
    user: process.env.NODEMAILER_USERNAME,
    pass: process.env.NODEMAILER_PASSWORD
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'User <user@mail.com>',
      subject,
      html: body
    })
  }
}