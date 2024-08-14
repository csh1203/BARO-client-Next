import styles from '@/styles/main/infoCard/userInfoCard.module.css'
import UserInfo from './UserInfo'
import Hr from '../../common/Hr'

export default function UserInfoCard() {
    return <div className={styles.card}>
        <div className={styles.profile_box}>
            <img src="/images/basic_profile.png" className={styles.profile_image}/>
            <div className={styles.name_box}>
                <div className={styles.name}>조서현</div>
                <div className={styles.major}>뉴미디어웹솔루션</div>
            </div>
        </div>
        <Hr/>
        <div className={styles.level_box}>
            <UserInfo item="나의 등급" value="Lv. 1 거북이"/>
            <UserInfo item="도움 받은 횟수" value="6회"/>
            <UserInfo item="도움 준 횟수" value="1회"/>
        </div>
        <Hr />
        <div className={styles.article_box}>
            <UserInfo item="나누기 글" value="1개"/>
            <UserInfo item="같이하기 글" value="2개"/>
            <UserInfo item="배우기 글" value="1개"/>
        </div>
        <Hr />
        <div className={styles.my_box}>
            <UserInfo item="프로필 편집" value=""/>
            <UserInfo item="로그아웃" value=""/>
        </div>
    </div>
}