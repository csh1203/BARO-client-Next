import Hr from '@/components/common/Hr'
import styles from '@/styles/article/comment/comment.module.css'

export default function Comment() {
    return <div className={styles.comment}>
        <div className={styles.profile_box}>
            <img src="/images/basic_profile.png" className={styles.profile_image} />
            <div className={styles.info_box}>
                <div className={styles.name}>조서현</div>
                <div className={styles.major}>뉴미디어웹솔루션</div>
            </div>
        </div>
        <div className={styles.content}>
            제가 빌려드릴까요? 대신 돈 주세요
        </div>
        <div className={styles.date}>2024. 08. 14.</div>
        <Hr />
    </div>
}