import Link from 'next/link'
import styles from '@/styles/common/nav.module.css'

const Nav = () => {
    return <div className={styles.nav}>
        <div className={styles.title_box}>
            <Link href="/" style={{ textDecoration: "none" }}>
                <div className={styles.baro_logo}>BARO</div>
            </Link>
            <input placeholder="게시글을 검색하세요" className={styles.search_input}/>
        </div>
        <div className={styles.button_box}>
            <div>글쓰기</div>
            <div>마이페이지</div>
        </div>
    </div>
}

export default Nav;