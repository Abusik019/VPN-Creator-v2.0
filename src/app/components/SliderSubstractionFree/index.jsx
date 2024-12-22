import { Slider } from "antd";

const SliderSubstractionFree = () => {

    return (
        <>
            <Slider 
                defaultValue={199} 
                disabled={true} 
                min={149}
                max={399}
                tooltip={{
                    open: true,
                    formatter: (value) => `${value} ₽`, 
                }}
            />
        </>
    );
};

export default SliderSubstractionFree;
