import { Link } from 'react-router-dom'

function EditHeader({ add }) {
  return (
    <>
    <div className="mx-7 mt-7">
      <ul className="inline-flex bg-yellow-500 text-white font-bold rounded-xl">
        <li className="px-20 py-2">
          <Link to="/">
            Home
          </Link>
        </li>
        <li className="px-20 py-2 cursor-pointer" onClick={add}>
          Add
        </li>
      </ul>
    </div>
    </>
  );
}

export default EditHeader;
