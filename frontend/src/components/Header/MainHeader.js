import { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

function MainHeader() {
  let history = useHistory();
  const [search, setSearch] = useState("");
  const [type, setType] = useState("작성자")

  const handleSearchChange = ({ target: { value } }) => setSearch(value);
  const handleTypeChange = ({ target: { value } }) => setType(value);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (search) history.push(`/?search=${search}&type=${type}`)
    else history.push('/')
  }

  return (
    <div className="flex justify-between my-7" style={{minWidth: '1200px'}}>
      <ul className="flex bg-yellow-500 text-white font-bold rounded-r-xl">
        <li className="px-40 py-2">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="px-40 py-2">
          <Link to="/add">
            Add
          </Link>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="flex gap-6">
          <label>
            <select onChange={handleTypeChange} className="form-select block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50">
              <option value="작성자">작성자</option>
              <option value="제목">제목</option>
            </select>
          </label>
          <label>
            <input placeholder="검색어를 입력해주세요" value={search} onChange={handleSearchChange} className="form-input block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-300 focus:ring focus:ring-yellow-200 focus:ring-opacity-50" />
          </label>
          <label className="mr-6">
            <button type="submit" className="text-white bg-yellow-500 rounded-md w-16 font-medium h-full">검색</button>
          </label>
        </div>
      </form>
    </div>
  );
}

export default MainHeader;
