
import styles from '@/styles/article/article.module.css'
import CommentBox from './comment/CommentBox';
import Content from './content/Content';
import CommentInput from '../commentInput/CommentInput';

export default function Article() {
    return <main className={styles.main}>
        <Content />
        <div className={styles.comment_box}>
            <CommentBox />
            <CommentInput />
        </div>
    </main>
}