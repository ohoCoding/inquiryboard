import { InquiryService } from '../../service'
export default class InquiryController {
  FindAll = async (req, res) => {
    try {
      let data = await InquiryService.findAll()
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
    }
  }

  FindOne = async (req, res) => {
    try {
      let data = await InquiryService.findOne(req.params.id)
      res.status(200).json(data)
    } catch (err) {
      console.log(err);
    }
  }

  FindOnePW = async (req, res) => {
    try {
      let data = await InquiryService.findOnePW(req.params.id)
      res.status(200).json(data)
    } catch (err) {
      console.log(err);
    }
  }

  Create = async (req, res) => {
    try {
      let data = await InquiryService.create(req.body)
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
    }
  }

  Update = async (req, res) => {
    try {
      let data = await InquiryService.update(req.body)
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
    }
  }

  Delete = async (req, res) => {
    try {
      let data = await InquiryService.delete(req.params.id)
      res.status(200).json(data)
    } catch (err) {
      console.log(err)
    }
  }
}
