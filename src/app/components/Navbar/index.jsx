"use client"

import Image from "next/image";
import { useState } from "react";
import styles from "./style.module.scss";
import Link from "next/link";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleSmoothScroll = (e) => {
        e.preventDefault(); 
        const targetId = e.currentTarget.getAttribute("href").substring(1); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start"}); 
        }
    };

    return (
        <div className={styles.navbar}>
            <Link href="/" className={styles.title}>Creator VPN</Link>
            <ul className={styles.navLinks}>
                <li>
                    <a href="#advantages" onClick={handleSmoothScroll}>О продукте</a>
                </li>
                <li>
                    <a href="#tariffs" onClick={handleSmoothScroll}>Тарифы</a>
                </li>
                <li>
                    <a href="#calculator" onClick={handleSmoothScroll}>Калькулятор прибыли</a>
                </li>
                <li>
                    <a href="#questions" onClick={handleSmoothScroll}>FAQ</a>
                </li>
            </ul>
            <button className={styles.headerTryBtn}>
                <Link href="https://t.me/CreatorVPN_Bot" target="_blank">Попробовать</Link>
            </button>
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
                    <li>
                        <Link 
                            href="#advantages" 
                            onClick={(e) => {
                                setIsOpen(false)
                                handleSmoothScroll(e);
                            }}>О продукте</Link>
                    </li>
                    <li>
                        <Link 
                            href="#tariffs" 
                            onClick={(e) => {
                                setIsOpen(false)
                                handleSmoothScroll(e);
                            }}>Тарифы</Link>
                    </li>
                    <li>
                        <Link 
                            href="#calculator" 
                            onClick={(e) => {
                                setIsOpen(false)
                                handleSmoothScroll(e);
                            }}>Калькулятор прибыли</Link>
                    </li>
                    <li>
                        <Link 
                            href="#questions" 
                            onClick={(e) => {
                                setIsOpen(false)
                                handleSmoothScroll(e);
                            }}>FAQ</Link>
                    </li>
                </ul>
                <button className={styles.tryBtn}><Link href="https://t.me/CreatorVPN_Bot" target="_blank">Попробовать</Link></button>
            </div>
        </div>
    );
}
