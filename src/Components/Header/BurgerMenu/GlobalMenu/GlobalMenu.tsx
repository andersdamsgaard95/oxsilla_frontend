import Link from 'next/link';
import styles from './styles/GlobalMenu.module.scss';
import menu from '@/JSON/menu/menu.json';

interface GlobalMenuProps {
    setMenuIsShown: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GlobalMenu(props: GlobalMenuProps) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {menu.map((item, i) => (
                    <li key={i} className={styles.menuItem}>
                        <Link
                            href={item.url}
                            onClick={() => props.setMenuIsShown(false)}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}