import styles from '@/styles/main/community/scopeBar/scopeItem.module.css'

interface ScopeItemProps {
    index: number;
    isSelected: boolean;
    item: string;
    itemHandleClick: (index: number) => void;
}

export default function ScopeItem(props: ScopeItemProps){
    const { isSelected, item, itemHandleClick, index } = props;

    return <div className={`${styles.basic_scope}
            ${isSelected ? styles.selected_scope_item : styles.scope_item}`}
            onClick={() => itemHandleClick(index)}>
        {item}
    </div>

}