import styles from './Pagination.module.css';

export function Pagination({ currentPage, totalPosts, postsPerPage }) {
    let pages = [];
    let totalPages = Math.ceil(totalPosts / postsPerPage);
    for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
    }
    const previousButtonHandler = () => { }
    const nextButtonHandler = () => { }

    return (
        <div className={styles.pagination}>
            <div className={styles.leftIcon} onClick={previousButtonHandler}></div>
            {pages.map(page => {
                return (
                    <div className={`${styles.pageNo} ${styles.select}`}>{page}</div>
                )
            })}
            <div className={styles.rightIcon} onClick={nextButtonHandler}></div>
        </div>
    )
}