import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import { Itoast } from '../interfaces';
import 'react-toastify/dist/ReactToastify.css';

function Toast(msg: Itoast) {
  useEffect(() => {
    if (msg.title === 'Success') toast.success(msg.body);
    else if (msg.title === 'Error') toast.error(msg.body);
  }, []);

  return (
    <div>
      <ToastContainer autoClose={2000} />
    </div>
  );
}

export default Toast;
