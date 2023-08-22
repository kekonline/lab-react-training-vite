import { useState } from "react";
function Carousel(props) {
    const { images } = props;
    const [imgInCarousel, setimgInCarousel] = useState(images[0]);

    const handleButtonClick1 = () => {
        let actuaIndex = images.indexOf(imgInCarousel);
        if (actuaIndex === images.length - 1) {
            actuaIndex = -1;
        }
        console.log(actuaIndex);
        setimgInCarousel(images[actuaIndex + 1]);
    };
    const handleButtonClick2 = () => {
        let actuaIndex = images.indexOf(imgInCarousel);
        if (actuaIndex === 0) {
            actuaIndex = images.length;
        }
        setimgInCarousel(images[actuaIndex - 1]);
    };

    return (
        <div>
            <button onClick={handleButtonClick2}>O</button>
            <img src={imgInCarousel} alt="" />
            <button onClick={handleButtonClick1}>O</button>
        </div>
    );
}

export default Carousel;
