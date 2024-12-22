"use client"

import Image from "next/image";
import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.navbar}>
            <Link href="/" className={styles.title}>Creator VPN</Link>
            <ul className={styles.navLinks}>
                <li><Link href="#advantages">О продукте</Link></li>
                <li><Link href="#tariffs">Тарифы</Link></li>
                <li><Link href="#calculator">Калькулятор прибыли</Link></li>
                <li><Link href="#questions">Q&A</Link></li>
            </ul>
            <button className={styles.headerTryBtn}><Link href="https://t.me/CreatorVPN_Bot" target="_blank">Попробовать</Link></button>
            <button
                className={styles.burgerMenu}
                onClick={() => setIsOpen(true)}
            >
                <Image
                    src="/burger-menu.svg"
                    alt="burger menu"
                    width={42}
                    height={42}
                />
            </button>
            <div
                className={`${styles.sideNav} ${
                    isOpen ? styles.sideNavOpen : ""
                }`}
            >
                <button
                    className={styles.closeMenu}
                    onClick={() => setIsOpen(false)}
                >
                    <Image
                        src="/krestik.svg"
                        alt="close menu"
                        width={42}
                        height={42}
                    />
                </button>
                <ul>
                    <li><Link href="#advantages" onClick={() => setIsOpen(false)}>О продукте</Link></li>
                    <li><Link href="#tariffs" onClick={() => setIsOpen(false)}>Тарифы</Link></li>
                    <li><Link href="#calculator" onClick={() => setIsOpen(false)}>Калькулятор прибыли</Link></li>
                    <li><Link href="#questions" onClick={() => setIsOpen(false)}>Q&A</Link></li>
                </ul>
                <button className={styles.tryBtn}><Link href="https://t.me/CreatorVPN_Bot" target="_blank">Попробовать</Link></button>
            </div>
        </div>
    );
}
