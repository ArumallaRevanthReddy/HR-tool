import styles from './TopBar.module.css';

export function TopBar({ page }) {
    return (
        <div className={styles.infoBar}>
            <span className={styles.pageName}>{page}</span>
            <span className={styles.profile}>
                <span className={`${styles.notification}`}></span>
                <span className={styles.username}>John HR</span>
                <span className={`${styles.profile}`}></span>
            </span>
        </div>
    )
}