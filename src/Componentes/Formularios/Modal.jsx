import React from 'react';
import estilosModal from '../Estilos/Modal.module.css';

const Modal = ({ isOpen, onClose, titulo, mensaje }) => {
    // Si no está abierto, no renderizamos nada en el DOM
    if (!isOpen) return null;

    return (
        <div className={estilosModal.overlay}>
            <div className={estilosModal.modalContainer}>
                <h3 className={estilosModal.titulo}>{titulo || 'Aviso'}</h3>
                <p className={estilosModal.mensaje}>{mensaje}</p>
                <button onClick={onClose} className={estilosModal.botonCerrar}>
                    Aceptar
                </button>
            </div>
        </div>
    );
};

export default Modal;