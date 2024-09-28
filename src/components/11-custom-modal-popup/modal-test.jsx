import { useState } from "react";
import Modal from "./modal";
import './modal.css';


export default function ModalTest() {
    const[showModalPopup, setShowModalPopup] =useState(false);

    function handleToggleModalPopup() {
        setShowModalPopup(!showModalPopup)
    }

    function onClose() {
        setShowModalPopup(false)
    }

    return (
        <>
        <h1>11. Custom Pop-up</h1>
        <div className="home">
        <button className="btn" onClick={handleToggleModalPopup} >Open Modal Popup</button>
        {showModalPopup && <Modal onClose={onClose} body={<div>Customized body</div>} />}
        </div>
        </>
    )
}