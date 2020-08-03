import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap'

function AddMovie(props) {
  const [show, setShow] = useState(false);
  const [titre, settitre] = useState('')
  const [rate, setrate] = useState(0)
  const [image, setimage] = useState('')
  const handleClose = () => { setShow(false) }
  const handleAdd = (titre, rate, image) => {
    props.AjoutMovie(titre, rate, image);
    setShow(false)

  }
  const handleShow = () => { setShow(true) };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Add MOVIE
        </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add MOVIE</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ display: "flex", flexDirection: "column" }}>


            <input type='text' placeholder='titre' onChange={(e) => settitre(e.target.value)} />

            <input type='number' placeholder='rate' onChange={(e) => setrate(e.target.value)} />
            <input type='text' placeholder='image' onChange={(e) => setimage(e.target.value)} />
          </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
            </Button>
          <Button variant="primary" onClick={() => handleAdd(titre, rate, image)}>
            Add
            </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default AddMovie