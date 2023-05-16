import styles from './JobCard.module.css';
import { useState } from 'react';
import { NewCandidate } from '../../popups/NewCandidate/NewCandidate';
import { useNavigate } from 'react-router';

export function JobCard({ jobInfo }) {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const openModalHandler = () => {
        setOpenModal(true);
    }

    const applicantsHandler = (role) => {
        navigate('/recruitment/applicants');
    }

    return (
        <div className={styles.jobCard}>
            {openModal && <NewCandidate setOpenModal={setOpenModal} />}
            <div className={styles.innerContainer}>
                <div className={styles.flex} onClick={applicantsHandler(jobInfo.role)}>
                    <span>{jobInfo.jobTitle}</span>
                    <span className={`${styles.icon} ${styles.edit}`}></span>
                </div>
                <div className={styles.textSmall}>{jobInfo.role}</div>
                <div className={styles.grayContainer}>
                    <span className={styles.graybox }>
                        <span className={`${styles.icon} ${styles.location}`}></span>
                        <span>{jobInfo.location}</span>
                    </span>
                    <span className={styles.graybox}>
                        <span className={`${styles.icon} ${styles.experience}`}></span>
                        <span>{jobInfo.experience} year exp</span>
                    </span>
                </div>
                <span className={styles.countValue}>{jobInfo.applicantsCount}</span>
                <div className={styles.flex}>
                    <span className={styles.textSmall}>applicants</span>
                    <span className={`${styles.flex} ${styles.pointer}`} onClick={openModalHandler}>
                        <span className={styles.applyText}>Apply</span>
                        <span className={`${styles.icon} ${styles.apply}`}></span>
                    </span>
                </div>
            </div>
        </div>
    )
}