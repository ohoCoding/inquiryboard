import axios from '../../utils/axios'
import { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom"

function WriteForm({ data, addStatus }) {
  let history = useHistory();
  const [openStatus, setOpenStatus] = useState()
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    title: '',
    email: '',
    status: '',
    timestamp: '',
    content: '',
    password: ''
  });

  useEffect(() => {
    if (addStatus) {
      console.log('create', openStatus)
      let postData = {
        open: openStatus,
        ...inputs
      }
      console.log('create', postData)
      axios.post(`/api/inquiry`, postData).then(v => {
        history.push('/')
      })
    } else {
      setOpenStatus(data.data.open)
      delete data.data.open
      setInputs(data.data)
    }
  }, [addStatus, data.data])

  const { name, title, email, content, password } = inputs

  const onChange = (e) => {
    console.log(e.target);
    const { value, name } = e.target; // 우선 e.target 에서 name 과 value 를 추출
    setInputs({
      ...inputs, // 기존의 input 객체를 복사한 뒤
      [name]: value // name 키를 가진 값을 value 로 설정
    });
  };

  return (
    <div className="flex flex-wrap mt-7 mx-7" style={{ minWidth: '1000px' }}>
      <ul className="w-1/3 flex flex-col border-2 border-yellow-500 rounded-md text-center font-medium">
        <li className="py-2 border-b border-yellow-500">제목</li>
        <li className="py-2 border-b border-yellow-500">이메일</li>
        <li className="py-2 border-b border-yellow-500">이름</li>
        <li className="py-2 border-b border-yellow-500">공개여부</li>
        <li className="py-2 border-b border-yellow-500 h-28">내용</li>
        <li className="py-2">비밀번호</li>
      </ul>
      <ul className="flex-1 flex flex-col border-2 border-yellow-500 rounded-md text-center">
        <li>
          <input className="p-2 border-b border-yellow-500 w-full outline-none rounded-t-md" name="title" onChange={onChange} value={title} />
        </li>
        <li>
          <input className="p-2 border-b border-yellow-500 w-full outline-none" name="email" onChange={onChange} value={email} />
        </li>
        <li>
          <input className="p-2 border-b border-yellow-500 w-full outline-none" name="name" onChange={onChange} value={name} />
        </li>
        <li className="p-2 border-b border-yellow-500 w-full text-left">
          <label className="inline-flex items-center mr-4">
            <span className="mr-2">공개</span>
            <input type="radio" name="open" checked={openStatus} onClick={() => setOpenStatus(true)} className="form-radio rounded border-gray-300 text-yellow-500 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50" />
          </label>
          <label className="inline-flex items-center ml-4">
            <span className="mr-2">비공개</span>
            <input type="radio" name="notopen" checked={!openStatus} onClick={() => setOpenStatus(false)} className="form-radio rounded border-gray-300 text-yellow-500 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50" />
          </label>
        </li>
        <li className="h-28">
          <textarea className="p-2 border-b border-yellow-500 w-full outline-none h-28 resize-none" name="content" onChange={onChange} value={content} />
        </li>
        <li>
          <input className="p-2 w-full outline-none rounded-b-md" name="password" onChange={onChange} value={password} placeholder="0000"/>
        </li>
      </ul>
    </div>
  )
}

export default WriteForm;