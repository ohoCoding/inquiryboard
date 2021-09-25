import jsend from 'jsend'
import chalk from 'chalk'
import { Inquiry } from '../db/dynamoDB'

export async function isAuthed(req, res, next) {
  // req.params.id => db => open => next()
  // req.params.id => db => not open => password 지정
  console.log(chalk.red('isAuthed HEADER'), req.header('password'));

  let data = (await Inquiry.get({ "id": req.params.id }))
  console.log(data)
  console.log(chalk.red('isAuthed REAL PW'), data.password);

  if (!req.header('password')) return res.status(401).json(jsend.error({ code: 401, message: '잘못된 접근입니다.' }))
  else if (req.header('password') === data.password) { // not open => password 지정된 것을 활용
    return next()
  } else {
    return res.status(401).json(jsend.error({ code: 401, message: '잘못된 접근입니다.' }))
  }
}

export async function isAuthedWhenNotOpen(req, res, next) {
  // req.params.id => db => open => next()
  // req.params.id => db => not open => password 지정
  console.log(chalk.red('isAuthed HEADER'), req.header('password'));

  let data = (await Inquiry.get({ "id": req.params.id }))
  console.log(data)
  console.log(chalk.red('isAuthed REAL PW'), data.password);

  if (data.open) {
    return next()
  } else {
    if (!req.header('password')) return res.status(401).json(jsend.error({ code: 401, message: '잘못된 접근입니다.' }))
    else if (req.header('password') === data.password) { // not open => password 지정된 것을 활용
      return next()
    } else {
      return res.status(401).json(jsend.error({ code: 401, message: '잘못된 접근입니다.' }))
    }
  }
}