"use client"

import { useState } from "react";
import { Slider } from "antd";

const SliderFollowers = ({ setFollowers }) => {
    // const [disabled, setDisabled] = useState(false);
    const [value, setValue] = useState();

    const handleChange = (val) => {
        // setDisabled(checked);
        setValue(val); 
        setFollowers(val);
    };

    return (
        <>
            <Slider 
                defaultValue={500} 
                disabled={false} 
                value={value}
                onChange={handleChange}
                min={100}
                max={10000}
                step={100}  
                tooltip={{
                    open: true,
                }}
            />
        </>
    );
};

export default SliderFollowers;
