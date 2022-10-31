import React, { useState } from 'react'

import ModalDialog from 'jsc-modal-oc'

const App = () => {
  const [openModal, setOpenModal] = useState(false)
  const onOpenModal = () => setOpenModal(true)
  const onCloseModal = () => setOpenModal(false)

  const handleClickOpen = () => {
    onOpenModal()
  }
  return (
    <div>
      <h1>Modal Dialog</h1>
      <button type='button' onClick={handleClickOpen}>
        Click to open the dialog modal
      </button>

      {openModal && (
        <ModalDialog
          title='Title of the modal'
          description='Description of the modal'
          closeContent='Close'
          handleCloseModal={onCloseModal}
        />
      )}
    </div>
  )
}

export default App
