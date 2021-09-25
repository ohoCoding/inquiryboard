import { Inquiry } from '../../db/dynamoDB'
import moment from 'moment'
import { v1 } from 'uuid';
import axios from 'axios';

export default class InquiryService {
  findAll = async () => {
    try {
      let data
      data = await Inquiry.scan().exec()
      return {
        data: data.map(v => {
          delete v.password
          return v
        })
      }
    } catch (err) {
      console.log(err);
    }
  }

  findOne = async (id) => {
    try {
      const data = await Inquiry.get({ "id": id });
      delete data.password
      return { data }
    } catch (err) {
      console.log(err)
    }
  }

  findOnePW = async (id) => {
    try {
      const data = await Inquiry.get({ "id": id });
      return { data }
    } catch (err) {
      console.log(err)
    }
  }

  create = async (body) => {
    // console.log(moment().format("YYYY-MM-DD"))
    await Inquiry.create({
      "id": v1(),
      "timestamp": moment().format("YYYY-MM-DD"),
      "name": body.name,
      "title": body.title,
      "email": body.email,
      "status": '답변대기',
      "open": body.open || false,
      "content": body.content,
      "password": body.password || '0000'
    })
    await axios.post('https://hook.dooray.com/services/2176713984240089307/3058632000359169078/-mbeT-PkR4OhVC5gbPfrhg', {
      "botName": "MyBot",
      "botIconImage": "https://static.dooray.com/static_images/dooray-bot.png",
      "text": '비밀번호: ' + body.password,
      "attachments": [{
        "title": '[CREATE] ' + body.title,
        "titleLink": `http://localhost:3000?search=${body.title}&type=제목`,
        "text": body.content,
        "color": "red"
      }]
    })

    return { }
  }

  update = async (body) => {
    await Inquiry.update({
      "id": body.id
    }, {
      "name": body.name,
      "title": body.title,
      "email": body.email,
      "status": '답변대기',
      "open": body.open,
      "content": body.content,
      "password": body.password || '0000'
    })
    await axios.post('https://hook.dooray.com/services/2176713984240089307/3058632000359169078/-mbeT-PkR4OhVC5gbPfrhg',
      {
        "botName": "MyBot",
        "botIconImage": "https://static.dooray.com/static_images/dooray-bot.png",
        "text": '비밀번호: ' + body.password,
        "attachments": [{
          "title": '[UPDATE] ' + body.title,
          "titleLink": `http://localhost:3000?search=${body.title}&type=제목`,
          "text": body.content,
          "color": "green"
        }]
      })
    return { }
  }

  delete = async (id) => {
    try {
      await Inquiry.delete(id);
      return { }
    } catch (err) {
      console.log(err)
    }
  }
}
