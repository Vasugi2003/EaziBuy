import React from 'react';
import '../style/ConfirmationModal.css';

function ConfirmationModal({ show, onClose, onConfirm }) {
  if (!show) {
    return null;
  }

  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>Confirm Purchase</h2>
        <p>Do you agree to proceed?</p>
        <div className='modal-buttons'>
          <button onClick={onConfirm} className='confirm-button'>Yes</button>
          <button onClick={onClose} className='cancel-button'>No</button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
