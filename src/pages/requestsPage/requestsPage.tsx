import React from 'react';
import styles from "../accountPage/accountPage.module.css";
import Header from "../../modules/header/header";
import RequestsListCard from "../../modules/requestsListCard/requestsListCard";

const RequestsPage = () => {
    return (
        <div className={styles.background}>
            <Header></Header>
            <RequestsListCard></RequestsListCard>
        </div>
    );
};

export default RequestsPage;