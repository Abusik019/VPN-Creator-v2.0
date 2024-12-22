"use client"

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";

export default function AnimationCup() {
    const imgRef = useRef(null);
    const [isMirrored, setIsMirrored] = useState(false);

    useEffect(() => {
        const imgElement = imgRef.current;

        const handleAnimationIteration = () => {
            setIsMirrored((prev) => !prev);
        };

        if (imgElement) {
            imgElement.addEventListener("animationiteration", handleAnimationIteration);
        }

        return () => {
            if (imgElement) {
                imgElement.removeEventListener("animationiteration", handleAnimationIteration);
            }
        };
    }, []);

    useEffect(() => {
        if (imgRef.current) {
            imgRef.current.style.setProperty("--mirror-scale", isMirrored ? "scaleX(-1)" : "scaleX(1)");
        }
    }, [isMirrored]);

    return (
        <div className={styles.cup}>
            <Image
                src="/steam.svg"
                alt="steam"
                ref={imgRef}
                width={86}
                height={138}
                className={styles.steam}
            />
            <Image 
                src="/cup.png" 
                alt="cup" 
                width={78} 
                height={75} 
                className={styles.cupItem}
            />
        </div>
    );
}
