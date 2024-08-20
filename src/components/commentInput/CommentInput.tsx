import styles from '@/styles/article/commentInput/commentInput.module.css'

export default function CommentInput(){
    return <div className={styles.comment_box}>
                <textarea placeholder='댓글을 입력하세요' className={styles.comment_input}/>
                <button className={styles.comment_button}>댓글 쓰기</button>
    </div>
}