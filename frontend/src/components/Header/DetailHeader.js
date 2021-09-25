import { useState } from 'react'
import { useHistory } from "react-router-dom";
import { Link } from 'react-router-dom'
import axios from '../../utils/axios'
import { Modal } from '../../components'

function DetailHeader({ id, edit }) {
  let history = useHistory();

  const Delete = (event) => {
    axios.delete(`/api/inquiry/${id}`).then(v => {
      history.push('/')
    })
  }

  const [modalOpen1, setModal1Open] = useState(false);
  const [modalOpen2, setModal2Open] = useState(false);
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const openModal1 = () => {
    setModal1Open(true);
  }
  const closeModal1 = () => {
    setModal1Open(false);
  }
  const setHeaderPassword_edit = () => {
    axios.defaults.headers.common.password = password1
    edit()
    closeModal1()
  }

  const openModal2 = () => {
    delete axios.defaults.headers.common.password
    setModal2Open(true);
  }
  const closeModal2 = () => {
    delete axios.defaults.headers.common.password
    setModal2Open(false);
  }
  const setHeaderPassword_delete = () => {
    axios.defaults.headers.common.password = password2
    Delete()
    closeModal2()
  }


  return (
    <>
      <Modal open={modalOpen1} close={closeModal1} ok={setHeaderPassword_edit} header="비밀번호 입력">
        <input type="text" value={password1} onChange={(e) => setPassword1(e.target.value)} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" />
      </Modal>
      <Modal open={modalOpen2} close={closeModal2} ok={setHeaderPassword_delete} header="비밀번호 입력">
        <input type="text" value={password2} onChange={(e) => setPassword2(e.target.value)} className="form-input mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" />
      </Modal>
      <div className="mx-7 mt-7">
        <ul className="inline-flex bg-yellow-500 text-white font-bold rounded-xl">
          <li className="px-20 py-2">
            <Link to="/">
              Home
            </Link>
          </li>
          <li className="px-20 py-2 cursor-pointer" onClick={openModal1}>
            Edit
          </li>
          <li className="px-20 py-2 cursor-pointer" onClick={openModal2}>
            Delete
          </li>
        </ul>
      </div>
    </>
  );
}

export default DetailHeader;
