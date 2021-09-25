import { useState, useEffect } from 'react'

function EditForm({ data }) {
  const [openStatus, setOpenStatus] = useState()
  const [inputs, setInputs] = useState({
    id: '',
    name: '',
    title: '',
    email: '',
    status: '',
    timestamp: '',
    open: openStatus,
    content: '',
  });

  useEffect(() => {
    setInputs(data.data)
  }, [data.data])

  const { name, title, email, content } = inputs

  return (
    <div className="flex flex-wrap mt-7 mx-7" style={{ minWidth: '1000px' }}>
      <ul className="w-1/3 flex flex-col border-2 border-yellow-500 rounded-md text-center font-medium">
        <li className="py-2 border-b border-yellow-500">제목</li>
        <li className="py-2 border-b border-yellow-500">이메일</li>
        <li className="py-2 border-b border-yellow-500">이름</li>
        <li className="py-2 border-b border-yellow-500">공개여부</li>
        <li className="py-2 border-b border-yellow-500 h-28">내용</li>
      </ul>
      <ul className="flex-1 flex flex-col border-2 border-yellow-500 rounded-md text-center">
        <li>
          <input className="p-2 border-b border-yellow-500 w-full outline-none rounded-t-md" value={title} readOnly/>
        </li>
        <li>
          <input className="p-2 border-b border-yellow-500 w-full outline-none" value={email} readOnly/>
        </li>
        <li>
          <input className="p-2 border-b border-yellow-500 w-full outline-none" value={name} readOnly/>
        </li>
        <li className="p-2 border-b border-yellow-500 w-full text-left">
          <label className="inline-flex items-center mr-4">
            <span className="mr-2">공개</span>
            <input type="radio" readOnly checked={inputs.open} className="form-radio rounded border-gray-300 text-yellow-500 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50" />
          </label>
          <label className="inline-flex items-center ml-4">
            <span className="mr-2">비공개</span>
            <input type="radio" readOnly checked={!inputs.open} className="form-radio rounded border-gray-300 text-yellow-500 shadow-sm focus:border-yellow-300 focus:ring focus:ring-offset-0 focus:ring-yellow-200 focus:ring-opacity-50" />
          </label>
        </li>
        <li className="h-28">
          <textarea className="p-2 border-b border-yellow-500 w-full outline-none h-28 resize-none" value={content} readOnly/>
        </li>
      </ul>
    </div>
  )
}

export default EditForm;