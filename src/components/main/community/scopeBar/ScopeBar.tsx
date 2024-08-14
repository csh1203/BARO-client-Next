import Hr from '@/components/common/Hr'
import styles from '@/styles/main/community/scopeBar/scopeBar.module.css'
import ScopeItem from './ScopeItem';

interface ScopeBarProps {
    community: number;
    setCommunity: (value: number) => void;
}

export default function ScopeBar(props: ScopeBarProps) {
    const {community, setCommunity} = props;
    const scopeItems = ['나누기', '같이하기', '배우기'];

    const itemHandleClick = (index: number): void => {
        setCommunity(index);
    }

    return <div>
        <div className={styles.scope_bar}>
            {
                scopeItems.map((elm, index) => (
                    <ScopeItem
                        key={index}
                        isSelected={community == index}
                        item={elm}
                        itemHandleClick={itemHandleClick}
                        index={index}
                    />
                ))
            }
        </div>
        <Hr />
    </div>
}