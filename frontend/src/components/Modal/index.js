import React from 'react';
import "../../assets/css/modal.css";

const Modal = ({open, close, ok, header, children}) => {
  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={(open ? 'opacity-100 flex items-center' : 'hidden') + ' transition-all backdrop-filter backdrop-blur-sm bg-transparent fixed top-0 left-0 right-0 bottom-0 z-50'}>
      {open ? (
        <section className='shadow bg-white rounded-xl overflow-hidden w-11/12 max-w-md mx-auto my-0'>
          <header className='font-medium text-gray-800 text-xl p-4 text-left'>
            {header}
          </header>
          <main className='p-4'>
            {children}
          </main>
          <footer className="bg-gray-100 px-4 py-3 text-right">
            <button className="close text-gray-400 text-sm mr-2 px-5 py-2 rounded cursor-pointer border-0" onClick={close}>취소</button>
            <button className="close text-sm bg-yellow-500 text-white px-5 py-2 rounded cursor-pointer border-0" onClick={ok}>확인</button>
          </footer>
        </section>
      ) : null}
    </div>
  )
}

export default Modal;