import styles from '@/styles/main/community/articles/article.module.css'
import { ChatLeftFill, CheckCircleFill } from 'react-bootstrap-icons';

interface ArticleProps {
    profile: string;
    name: string;
    major: string;
    content: string;
    comment: number;
    isfinished: boolean;
}

export default function Article({profile, name, major, content, comment, isfinished}: ArticleProps) {
    return <div className={styles.article}>
        <div className={styles.profile_box}>
            <img src={profile} className={styles.profile_image}/>
            <div>
                <div className={styles.name}>{name}</div>
                <div className={styles.major}>{major}</div>
            </div>
        </div>
        <div className={styles.content}>
            {content}
            {content}
        </div>
        <div className={styles.post_info}>
            <div className={styles.comment_box}>
                <ChatLeftFill className={styles.comment_icon}/>
                <div>{comment}</div>
            </div>
            <CheckCircleFill className={isfinished ? styles.checked_icon : styles.check_icon}/>
        </div>
    </div>
}