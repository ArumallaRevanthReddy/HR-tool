import styles from './TopBar.module.css';

export function TopBar({ page, message }) {
    return (
        <div className={styles.infoBar}>
            <span className={styles.infoLeft}>
                <span className={styles.message}>{message}</span>
                <span className={styles.pageName}>{page}</span>
            </span>
            <span className={styles.profile}>
                <span className={`${styles.notification}`}></span>
                <span className={styles.username}>John HR</span>
                <span className={`${styles.dp}`}></span>
            </span>
        </div>
    )
}