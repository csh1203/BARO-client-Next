import Community from "@/components/main/community/Community";
import UserInfoCard from "@/components/main/infoCard/UserInfoCard";
import styles from '@/styles/main/main.module.css'

export default function Home() {
  return <main className={styles.main}>
    <UserInfoCard />
    <Community />
  </main>
}
