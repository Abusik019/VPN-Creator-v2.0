"use client"

import { useState } from "react";
import { Slider } from "antd";

const SliderSubstraction = ({ setPremiumSubstraction=199 }) => {
    const [value, setValue] = useState(199);

    const handleChange = (val) => {
        setValue(val); 
        setPremiumSubstraction(val);
    };

    return (
        <>
            <Slider 
                defaultValue={199} 
                value={value}
                onChange={handleChange}
                min={149}
                max={399}
                step={1}
                tooltip={{
                    open: true,
                    formatter: (value) => `${value} ₽`, 
                }}
            />
        </>
    );
};

export default SliderSubstraction;
