import MailgunClient from './client';
import { InputFormData } from './interfaces/IFormData';
import Options from './interfaces/Options';

export type Client = MailgunClient;

export default class Mailgun {
  static get default(): typeof Mailgun { return this; }
  private formData: InputFormData

  constructor(FormData: InputFormData) {
    this.formData = FormData;
  }

  client(options: Options) : MailgunClient {
    return new MailgunClient(options, this.formData);
  }
}
