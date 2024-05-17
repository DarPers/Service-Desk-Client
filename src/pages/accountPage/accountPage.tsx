import React from "react";
import styles from "./accountPage.module.css"
import Header from "../../modules/header/header";
import AccountCard from "../../modules/accountCard/accountCard";

const AccountPage = () => {
    return (
        <div className={styles.background}>
            <Header></Header>
            <AccountCard></AccountCard>
        </div>
    );
}

export default AccountPage;