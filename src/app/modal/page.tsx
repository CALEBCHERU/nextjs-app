"use client"
import { useRef } from "react";

export default function ModalComponent() {
    const dialogRef = useRef<HTMLDialogElement>(null); // ✅ Typed properly

    const openModal = () => {
        dialogRef.current?.showModal();
    };

    const closeModal = () => {
        dialogRef.current?.close();
    };

    return (
        <> <h1>THis is a modal</h1>
            <button className={'bg-orange-600 rounded-xl p-2 hover:bg-green-500  '} onClick={openModal}>Open Modal</button>
            <dialog ref={dialogRef} className={'h-80 rounded-2xl w-1/2  p-4'}>
                <p className={'text-green-500 text-xl mb-4'}>Hello from the modal!</p>
                <button className={'bg-orange-600 rounded-xl p-2 hover:bg-green-500'} onClick={closeModal}>Close</button>
            </dialog>
        </>
    );
}
