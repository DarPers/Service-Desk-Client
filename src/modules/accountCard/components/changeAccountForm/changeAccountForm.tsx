import React, {FC, useState} from 'react';
import styles from "../../../../components/modal/modal.module.css";
import ParagraphText from "../../../../UI/typography/paragraphText";
import {Button, TextField} from "@mui/material";
import {IUser} from "../../../../types";

interface IChangeAccountFormProps {
    isOpen: boolean;
    onClose: () => void;
    userData: IUser;
    onSubmit: (changedUser: IUser) => void;
}

const ChangeAccountForm: FC<IChangeAccountFormProps> = ({ isOpen, onClose, onSubmit, userData}) => {

    const [userChanged, setUserChanged] = useState<IUser>(userData);

    if (!isOpen) return null;

    return (
        <div className={styles.modal}>
            <article className={styles.modal_content}>
                <div>
                    <ParagraphText>Change account information</ParagraphText>
                    <section className={styles.inputs}>
                        <TextField id="standard-basic" label="First name"
                                   value={userChanged?.firstName}
                                   onChange={(event) =>
                                       setUserChanged({...userChanged, firstName: event.currentTarget.value})}
                                   variant="standard"/>
                        <TextField id="standard-basic" label="Last name"
                                   value={userChanged?.lastName}
                                   onChange={(event) =>
                                       setUserChanged({...userChanged, lastName: event.currentTarget.value})}
                                   variant="standard"/>
                        <TextField id="standard-basic" label="Email" value={userChanged?.email}
                                   onChange={(event) =>
                                       setUserChanged({...userChanged, email: event.currentTarget.value})}
                                   variant="standard"/>
                        <section className={styles.buttons}>
                            <Button onClick={onClose}>Cancel</Button>
                            <Button onClick={() => onSubmit(userChanged)}>Submit</Button>
                        </section>
                    </section>
                </div>
            </article>
        </div>
    );
};

export default ChangeAccountForm;