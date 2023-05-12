import styles from './JobCard.module.css';

export function JobCard({ jobInfo }) {
    return (
        <div className={styles.jobCard}>
            <div className={styles.innerContainer}>
                <div className={styles.flex}>
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
                    <span className={`${styles.flex} ${styles.pointer}`}>
                        <span className={styles.applyText}>Apply</span>
                        <span className={`${styles.icon} ${styles.apply}`}></span>
                    </span>
                </div>
            </div>
        </div>
    )
}