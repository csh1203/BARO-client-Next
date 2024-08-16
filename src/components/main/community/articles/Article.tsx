import styles from '@/styles/main/community/articles/article.module.css'
import { ChatLeftFill, CheckCircleFill, PersonFill } from 'react-bootstrap-icons';

interface BaseProps {
    profile: string;
    name: string;
    major: string;
    content: string;
    comment: number;
    type: 0 | 1 | 2;
}

interface ShareProps extends BaseProps {
    type: 0 | 2;
    isfinished: boolean;
}

interface TogetherProps extends BaseProps {
    type: 1;
    totalPeople: number;
    gatheredPeople: number;
}

type ArticleProps = ShareProps | TogetherProps;

export default function Article(props: ArticleProps) {
    const { profile, name, major, content, comment, type } = props;

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
                <ChatLeftFill className={styles.comment_icon} />
                <div>{comment}</div>
            </div>
            {
                type == 0 || type == 2 ? 
                    'isfinished' in props && <CheckCircleFill
                        className={props.isfinished ? styles.checked_icon : styles.check_icon} />
                     :
                    'gatheredPeople' in props &&
                    <div className={`${styles.people_box}
                        ${!(props.totalPeople - props.gatheredPeople)
                            && styles.full_people_box}`}>
                        <PersonFill className={styles.person_icon}/>
                        <div className={styles.total_people}> {props.gatheredPeople}/{props.totalPeople} </div>
                    </div>
            }
        </div>
    </div>
}