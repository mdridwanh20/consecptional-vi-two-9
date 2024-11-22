import React from 'react'
import ModalForm from './ModalForm'

export default function Modal() {
    return (
        <div>

            {/* <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>

            open modal<
            /button> */}

            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <ModalForm></ModalForm>
                </div>

            </dialog>

        </div>
    )
}
