import React from 'react'
import { ToastContainer } from 'react-toastify';
import Footer from '../../Components/Util/Footer';
import ResetePasswordContainer from '../../Components/Auth/ResetePasswordContainer';
import ReseteCodeHook from '../../hook/auth/resete-code-hook';
import Navbarr from '../../Components/Util/Navbarr';
import SpinnerContainer from '../../Components/Util/Spinner';

const ResetePasswordPage = () => {

    const [code, handleCode, press, loading, onSubmit] = ReseteCodeHook();
    
  return (
    <div className='min-h-screen relative'>
      {press ? loading ? <div className="flex h-full w-full justify-center items-center absolute top-0 left-0 bg-opacity-50 bg-black z-50"><SpinnerContainer /></div> : null : null}
      <Navbarr />
      <div className="flex flex-col items-center py-10 min-h-full">
        <ResetePasswordContainer code={code} handleCode={handleCode} onSubmit={onSubmit} />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default ResetePasswordPage
