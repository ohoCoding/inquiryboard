import { useState } from 'react' 
import { useHistory } from "react-router-dom";
import { Modal } from '../../components'
import axios from '../../utils/axios'

function Table({ data }) {
  let history = useHistory();
  const [pageId, setPageId] = useState()
  console.log(data)
  const tableHead = ['번호', '이름', '제목', '상태', '등록일', '공개']
  const isOpen = (bool) => {
    return bool ? 'YES' : 'NO'
  }
  const handleRowClick = (row) => {
    console.log(row.id)
    setPageId(row.id)
    if (!row.open) {
      openModal()
    } else {
      history.push(`/detail/${row.id}`)
    }
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [password, setPassword] = useState('')

  const openModal = () => {
    delete axios.defaults.headers.common.password
    console.log('password', axios.defaults.headers.common.password)
    setModalOpen(true);
  }
  const closeModal = () => {
    setModalOpen(false);
  }
  const setHeaderPassword = () => {
    axios.defaults.headers.common.password = password
    history.push(`/detail/${pageId}`)
    closeModal()
  }

  return (
    <>
      <Modal open={modalOpen} close={closeModal} ok={setHeaderPassword} header="비밀번호 입력">
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" />
      </Modal>
      <div className="flex flex-col" style={{ minWidth: '1200px' }}>
        <div className="-my-2 overflow-x-auto">
          <div className="py-2 align-middle inline-block min-w-full">
            <div className="overflow-hidden border-b border-yellow-500">
              <table className="min-w-full divide-y divide-yellow-500 text-center">
                <thead className="border-yellow-500 border-b-2 border-t-2">
                  <tr>
                    {tableHead.map(th => <th
                      scope="col"
                      className="px-6 py-3 text-sm font-medium text-gray-800 uppercase tracking-wider"
                    >
                      {th}
                    </th>)}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-yellow-500">
                  {data.data?.map((inquiry, index) => (
                    <tr key={inquiry.id} onClick={() => handleRowClick(inquiry)} className="cursor-pointer">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.id}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.title}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.status}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{inquiry.timestamp.slice(0,10)}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{isOpen(inquiry.open)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Table;