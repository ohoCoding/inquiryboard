import { DetailHeader, EditHeader, ViewForm, EditForm } from '../../components'
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react'
import axios from '../../utils/axios'

function Detail({ match }) {
  let history = useHistory();
  const [data, setData] = useState({ data: [] })
  const [editStatus, setEditStatus] = useState(false)
  const [addStatus, setAddStatus] = useState(false)
  const [notCorrectPassword, setNotCorrectPassword] = useState(true)

  useEffect(() => {
    let id = match.params.id
    let completed = false

    async function get() {
      setNotCorrectPassword(true)
      try {
        const response = await axios.get(`/api/inquiry/${editStatus?'pw/':''}${id}`)
        setNotCorrectPassword(false)
        console.log(notCorrectPassword)
        if (!completed) {setData(response.data)}
      } catch (e) {
        history.push('/')
        alert('비밀번호가 올바르지 않습니다.')
      }
    }
    get()
    return () => {
      completed = true
    }
  }, [editStatus])

  const editFormStatus = () => {
    setEditStatus(true)
  }

  const addForm = () => {
    setAddStatus(true)
  }

  return (
    <>
      {!notCorrectPassword ? 
        <>
          {!editStatus ? <DetailHeader id={data.data.id} edit={editFormStatus}/> : <EditHeader id={data.data.id} add={addForm}/> }
          {!editStatus ? <ViewForm data={data} /> : <EditForm data={data} addStatus={addStatus} createStatus={false}/>}
        </>
      :null}
    </>
  );
}

export default Detail;
