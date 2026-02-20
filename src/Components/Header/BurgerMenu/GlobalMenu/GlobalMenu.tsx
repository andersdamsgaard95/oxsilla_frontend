import Link from 'next/link';
import styles from './styles/GlobalMenu.module.scss';
import menu from '@/JSON/menu/menu.json';

interface GlobalMenuProps {
    closeMenu: () => void;
}

export default function GlobalMenu(props: GlobalMenuProps) {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {menu.map((item, i) => (
                    <li key={i} className={styles.menuItem}>
                        <Link
                            href={item.url}
                            onClick={() => props.closeMenu()}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}