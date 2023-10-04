import { useEffect, useState } from "react";

const ToastNotification = (props) => {
  const { showToast, toggleShowToast, variant, message } = props;
  const style = showToast ? { display: 'block' } : { display: 'none' };

  return (
    <div className="toast toast-top toast-center" style={style} >
      <div className={"alert alert-"+variant}>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default ToastNotification