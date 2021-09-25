import { EditHeader, CreateForm } from '../../components'
import { useState } from 'react'

function Detail() {
  const [data, setData] = useState({ data: [] })
  const [addStatus, setAddStatus] = useState(false)


  const addForm = () => {
    setAddStatus(true)
  }

  return (
    <>
      <EditHeader add={addForm} />
      <CreateForm data={data} addStatus={addStatus}/>
    </>
  );
}

export default Detail;
