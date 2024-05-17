import React, {useState} from "react";
import styles from "./accountCard.module.css"
import AvatarIcon from "../../components/avatarIcon";
import HeaderText from "../../UI/typography/headerText";
import ParagraphText from "../../UI/typography/paragraphText";
import PlainText from "../../UI/typography/plainText";
import {deepPurple} from "@mui/material/colors";
import Modal from "../../components/modal/modal";
import {Button} from "@mui/material";
import ChangeAccountForm from "./components/changeAccountForm/changeAccountForm";
import {IUser} from "../../types";

const AccountCard = () => {

    const [userData, setUserData] = useState<IUser>(
        {id: "1",
        firstName: "Daria",
        lastName: "Errorova",
        email: "darpers@gmail.com"});

    const [isDeleteFormOpen, setIsDeleteFormOpen] = useState(false);
    const [isChangeFormOpen, setIsChangeFormOpen] = useState(false);

    const openDeleteForm = () => {
        setIsDeleteFormOpen(true);
    };

    const closeDeleteForm = () => {
        setIsDeleteFormOpen(false);
    };

    const handleSubmitDeleteForm = () => {
        //удаление аккаунта
        setIsDeleteFormOpen(false);
    }

    const openChangeForm = () => {
        setIsChangeFormOpen(true);
    };

    const closeChangeForm = () => {
        setIsChangeFormOpen(false);
    };

    const handleSubmitChangeForm = (changedUser: IUser) => {
        setUserData(changedUser);
        setIsChangeFormOpen(false);
    }

    return (
        <article className={styles.card}>
            <AvatarIcon
                sx={{bgcolor: deepPurple[900], width: 75, height: 75}}
                firstName="Daria"
                lastName="Erohova"/>
            <section>
                <HeaderText>Personal details</HeaderText>
                <ParagraphText>Name</ParagraphText>
                <PlainText>{userData.firstName + " " + userData.lastName}</PlainText>
                <ParagraphText>Email</ParagraphText>
                <PlainText >{userData.email}</PlainText>
                <Button
                    onClick={openChangeForm}
                    className={styles.button}
                    variant="outlined">Change account information</Button>
                <ChangeAccountForm isOpen={isChangeFormOpen} onSubmit={handleSubmitChangeForm} onClose={closeChangeForm} userData={userData}/>
                <Button
                    onClick={openDeleteForm}
                    className={styles.button}
                    variant="outlined">Delete account</Button>
                <Modal isOpen={isDeleteFormOpen}
                       onSubmit={handleSubmitDeleteForm}
                       onClose={closeDeleteForm}
                       message="Are you sure, that you want to delete your account?"/>
            </section>
        </article>
    );
}

export default AccountCard;