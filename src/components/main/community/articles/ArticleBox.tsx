import Article from "./Article";
import styles from '@/styles/main/community/articles/articleBox.module.css'

export default function ArticleBox() {
    return <div className={styles.article_box}>
        <Article 
            profile='/images/basic_profile.png'
            name='조서현'
            major='뉴미디어웹솔루션'
            content='오늘 5교시 체육인데 체육복을 안갖고 왔어요ㅜㅠㅠㅠ 2학년 학생 중 점심시간에 체육복 빌려주실 분 구해요ㅜㅜ 6교시에 바로 돌려드릴게요!!!!!!!!!!!!!! 원하시면 빨래까지 해드릴게요ㅠㅠㅠㅠㅠㅠㅠ'
            comment={5}
            isfinished={true} />
        <Article 
            profile='/images/basic_profile.png'
            name='조서현'
            major='뉴미디어웹솔루션'
            content='오늘 5교시 체육인데 체육복을 안갖고 왔어요ㅜㅠㅠㅠ 2학년 학생 중 점심시간에 체육복 빌려주실 분 구해요ㅜㅜ 6교시에 바로 돌려드릴게요!!!!!!!!!!!!!! 원하시면 빨래까지 해드릴게요ㅠㅠㅠㅠㅠㅠㅠ'
            comment={5}
            isfinished={false} />
        <Article 
            profile='/images/basic_profile.png'
            name='조서현'
            major='뉴미디어웹솔루션'
            content='오늘 5교시 체육인데 체육복을 안갖고 왔어요ㅜㅠㅠㅠ 2학년 학생 중 점심시간에 체육복 빌려주실 분 구해요ㅜㅜ 6교시에 바로 돌려드릴게요!!!!!!!!!!!!!! 원하시면 빨래까지 해드릴게요ㅠㅠㅠㅠㅠㅠㅠ'
            comment={5}
            isfinished={true} />
        <Article 
            profile='/images/basic_profile.png'
            name='조서현'
            major='뉴미디어웹솔루션'
            content='오늘 5교시 체육인데 체육복을 안갖고 왔어요ㅜㅠㅠㅠ 2학년 학생 중 점심시간에 체육복 빌려주실 분 구해요ㅜㅜ 6교시에 바로 돌려드릴게요!!!!!!!!!!!!!! 원하시면 빨래까지 해드릴게요ㅠㅠㅠㅠㅠㅠㅠ'
            comment={5}
            isfinished={false} />
        <Article 
            profile='/images/basic_profile.png'
            name='조서현'
            major='뉴미디어웹솔루션'
            content='오늘 5교시 체육인데 체육복을 안갖고 왔어요ㅜㅠㅠㅠ 2학년 학생 중 점심시간에 체육복 빌려주실 분 구해요ㅜㅜ 6교시에 바로 돌려드릴게요!!!!!!!!!!!!!! 원하시면 빨래까지 해드릴게요ㅠㅠㅠㅠㅠㅠㅠ'
            comment={5}
            isfinished={true} />
    </div>
}