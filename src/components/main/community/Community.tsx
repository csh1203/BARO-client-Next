'use client'

import { useState } from "react";
import ScopeBar from "./scopeBar/ScopeBar";
import styles from '@/styles/main/community/community.module.css'
import ArticleBox from "./articles/ArticleBox";

export default function Community() {
    const [ community, setCommunity ] = useState<number>(0);

    return <div className={styles.community}>
        <ScopeBar community={community} setCommunity={setCommunity}/>
        <ArticleBox />
    </div>
}