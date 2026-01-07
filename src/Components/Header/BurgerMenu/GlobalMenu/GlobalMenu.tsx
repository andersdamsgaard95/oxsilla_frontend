import Link from 'next/link';
import styles from './styles/GlobalMenu.module.scss';
import menu from '@/JSON/menu/menu.json';

export default function GlobalMenu() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                {menu.map((item, i) => (
                    <li key={i} className={styles.menuItem}>
                        <Link
                            href={item.url}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}