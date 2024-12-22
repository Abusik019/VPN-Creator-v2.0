"use client"

import { useEffect, useState } from "react";
import styles from './style.module.scss';

const ProfitList = () => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        let value = 0;
        const step = 5000;
        const max = 40000;
        const interval = setInterval(() => {
            value += step;
            if (value <= max) {
                setValues((prevValues) => {
                    const newValues = [value, ...prevValues].slice(0, 3);
                    return newValues;
                });
            } else {
                clearInterval(interval);
            }
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <ul className={styles.profit}>
            {values.map((val, index) => (
                <li key={val} className={styles.fadeIn}>
                    + {val}
                </li>
            ))}
        </ul>
    );
};

export default ProfitList;
