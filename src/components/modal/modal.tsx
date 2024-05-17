import React, {FC} from 'react';
import styles from "./modal.module.css"
import {Button} from "@mui/material";
import PlainText from "../../UI/typography/plainText";

interface IModalFormProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: () => void;
    message: string;
}

const Modal: FC<IModalFormProps> = ({ isOpen, onClose, onSubmit, message}) => {
    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <article className={styles.modal_content}>
                <div>
                    <PlainText>{message}</PlainText>
                    <br/>
                    <section className={styles.buttons}>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={onSubmit}>Submit</Button>
                    </section>
                </div>
            </article>
        </div>
    );
};

export default Modal;