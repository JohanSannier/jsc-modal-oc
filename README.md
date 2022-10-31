# jsc-modal-oc

> Modal dialog package created for the 14th project of the OpenClassrooms&#x27; frontend development program

[![NPM](https://img.shields.io/npm/v/jsc-modal-oc.svg)](https://www.npmjs.com/package/jsc-modal-oc) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save jsc-modal-oc
```

## Usage

```jsx
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
    <>
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
    </>
  )
}

export default App
```

## License

MIT © [JohanSannier](https://github.com/JohanSannier)
