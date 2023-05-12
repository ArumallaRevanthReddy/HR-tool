import { useRef } from "react";
import { TopBar } from "../../components/top-bar/TopBar";
import styles from './Recruitment.module.css';
import { JobCard } from "./components/JobCard/JobCard";
import { Pagination } from "./components/pagination/Pagination";

export function Recruitment() {
    const enteredSearch = useRef();
    const searchHandler = () => { }
    const jobInfo = { jobTitle: "SOFTWARE DEVELOPER", role: "Frontend Developer", location: "Coimbatore", experience: 1, applicantsCount: 140 }

    return (
        <section className={styles.page}>
            <div className={styles.topContainer}>
                <TopBar page="RECRUITMENT MANAGEMENT" />
                <div className={styles.toolbar}>
                    <span className={styles.toolbarLeft}>
                        <div className={styles.search}>
                            <input type="text" placeholder="search" className={styles.searchInput} ref={enteredSearch} />
                            <span className={styles.searchIcon} onClick={searchHandler}></span>
                        </div>
                    </span>
                    <span>
                        <span className={styles.textSmall}>sort by</span>
                        <select className={styles.dropdown}>
                            <option selected value="null" disabled>Date</option>
                        </select>
                        <button className="btnCreate">+ Create New Job</button>
                    </span>
                </div>
            </div>
            <div className={styles.jobsContainer}>
                <div className={styles.countBar}>
                    <div className={`${styles.countCard} ${styles.openings}`}>
                        <span className={styles.count}>10</span>
                        <span className={styles.textSmall}>openings</span>
                    </div>
                    <div className={`${styles.countCard} ${styles.applicants}`}>
                        <span className={styles.count}>10</span>
                        <span className={styles.textSmall}>applicants</span>
                    </div>
                    <div className={`${styles.countCard} ${styles.interviews}`}>
                        <span className={styles.count}>10</span>
                        <span className={styles.textSmall}>interviews</span>
                    </div>
                    <div className={`${styles.countCard} ${styles.offered}`}>
                        <span className={styles.count}>10</span>
                        <span className={styles.textSmall}>offered</span>
                    </div>
                    <div className={`${styles.countCard} ${styles.declined}`}>
                        <span className={styles.count}>10</span>
                        <span className={styles.textSmall}>declined</span>
                    </div>
                </div>
                <div className={styles.jobCardsContainer}>
                    {/* <div className={styles.row}> */}
                    <JobCard jobInfo={jobInfo} />
                    <JobCard jobInfo={jobInfo} />
                    <JobCard jobInfo={jobInfo} />
                    {/* </div> */}
                    {/* <div className={styles.row}> */}
                    <JobCard jobInfo={jobInfo} />
                    <JobCard jobInfo={jobInfo} />
                    <JobCard jobInfo={jobInfo} />
                    {/* </div> */}
                </div>
            </div>
            <div className={styles.pagination}>
                <Pagination currentPage={1} totalPosts={15} postsPerPage={6}/>
            </div>
        </section>
    )
}