import styles from '@/styles/main/infoCard/userInfo.module.css'

interface UserProps {
    item: string;
    value: string;
}

export default function UserInfo( props : UserProps) {
    const { item, value } = props;

    return <div className={styles.info_box}>
        <div>{item}</div>
        <div>{value}</div>
    </div>
}