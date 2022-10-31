import React from 'react'

function ModalDialog({ title, description, closeContent, handleCloseModal }) {
  const modalStyle = {
    border: '1px solid black',
    borderRadius: 20,
    backgroundColor: 'white',
    padding: '0.67rem',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: 400
  }
  return (
    <div className='modal' style={modalStyle}>
      <h3>{title}</h3>
      <p>{description}</p>
      <button style={{ cursor: 'pointer' }} onClick={handleCloseModal}>
        {closeContent}
      </button>
    </div>
  )
}

export default ModalDialog
