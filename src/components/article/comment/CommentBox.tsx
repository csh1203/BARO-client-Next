import styles from '@/styles/article/comment/commentBox.module.css'
import Comment from './Comment'

export default function CommentBox() {
    return <div className={styles.comment_box}>
        <Comment />
        <Comment />
        <Comment />
        <Comment />
        <Comment />
    </div>
}