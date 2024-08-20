import { ChatLeftFill, CheckCircleFill, HandThumbsUpFill } from 'react-bootstrap-icons';
import styles from '@/styles/article/content/content.module.css'

export default function Content() {
    return <div>
<div className={styles.profile_box}>
            <img src="/images/basic_profile.png" className={styles.profile_image}/>
            <div className={styles.name_box}>
                <div className={styles.name}>조서현</div>
                <div className={styles.major}>뉴미디어웹솔루션</div>
            </div>
        </div>
        <div className={styles.article_box}>
            <div className={styles.content}>
                오늘 5교시 체육인데 체육복을 안갖고 왔어요ㅜㅠㅠㅠ <br/>
                2학년 학생 중 점심시간에 체육복 빌려주실 분 구해요ㅜㅜ 6교시에 바로 돌려드릴게요!!!!!!!!!!!!!! <br/>
                원하시면 빨래까지 해드릴게요ㅠㅠㅠㅠㅠㅠㅠ <br/>
                간절하게 부탁드립니다 😱
            </div>
            <div className={styles.info_box}>
                <div className={styles.like_box}>
                    <HandThumbsUpFill className={styles.like_icon}/>
                    <div className={styles.like}>5</div>
                </div>
                <div className={styles.comment_box}>
                    <ChatLeftFill className={styles.comment_icon}/>
                    <div className={styles.comment}>5</div>
                </div>
                <CheckCircleFill className={styles.check_icon}/>
            </div>
        </div>
    </div>
}