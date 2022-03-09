import React from 'react';
import { useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';

import { Istate, Itoast } from '../interfaces';
import Loading from './Loading';
import Toast from './Toast';

function Alert() {
  // const alert: Ialert = useSelector((state) => state);
  const alert = useSelector((state: Istate) => state.alert);
  return (
    <div>
      {alert.loading && <Loading />}
      {alert.success && <Toast title="Success" body={alert.success} />}
      {alert.error && <Toast title="Error" body={alert.error} />}
    </div>
  );
}

export default Alert;
