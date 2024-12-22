"use client"

import Image from "next/image";
import { useState } from "react";
import styles from './style.module.scss';

export default function TariffItem({ title, description }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <li onClick={toggleDropdown} className={`${styles.tariffItem} ${isOpen ? styles.open : ""}`}>
            <Image
                src={isOpen ? "/open-arrow.svg" : "/close-arrow.svg"}
                alt="arrow"
                width={24}
                height={24}
            />
            <div className={styles.dropdownText}>
                <h4>{title}</h4>
                <p className={styles.description}>{description}</p>
            </div>
        </li>
    );
}

