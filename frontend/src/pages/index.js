import { MainHeader, Table } from '../components'
import { useState, useEffect } from 'react'
import queryString from 'query-string'
import axios from '../utils/axios'

function Index({location}) {
  const [data, setData] = useState({ data: [] });

  useEffect(() => {
    let completed = false;
    let { search, type } = queryString.parse(location.search);

    function matchSearch(value) {
      console.log(value, search)
      return value?.indexOf(search) !== -1;
  }

    async function get() {
      const response = await axios.get(`/api/inquiry`);
      if (type==='작성자') response.data.data = response.data.data.filter(v => matchSearch(v.name))
      if (type==='제목') response.data.data = response.data.data.filter(v => matchSearch(v.title))
      if (!completed) setData(response.data);
    }
    get()
    return () => {
      completed = true;
    };

  }, [location.search]);

  return (
    <>
      <MainHeader/>
      <Table data={data}/>
    </>
  );
}

export default Index;
