import React from 'react'
import CloseIcon from '@mui/icons-material/CloseOutlined';
import './modal.scss'

const Modal = (props) => {
  const {
    fullName, firstName, lastName, username,
    avatar, email, phone, twitterHandle, bio, closeModal
  } = props

  return (
    <div className="modal1">
      <div className="content-modal1">
        <button className="close" onClick={() => closeModal()}><CloseIcon /></button>
        <img src={avatar} alt='' />
        <p>FullName: <span>{fullName}</span>
        <br />FirstName: <span>{firstName}</span>
        <br />LastName: <span>{lastName}</span>
        <br />Username: <span>{username}</span>
        <br />Email: <span>{email}</span>
        <br />Phone: <span>{phone}</span>
        <br />Twiter: <span>{twitterHandle}</span>
        <br />Bio: <span>{bio}</span></p>
    </div>
    </div >
  )
}

export default Modal