import Image from "next/image";
import React, { useEffect, useState } from "react";

const Overlay = ({ overlayInfo }) => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    if (overlayInfo && overlayInfo.length > 0) {
      setElements(overlayInfo);
    } else {
      setElements([]); // Reset elements if overlayInfo is empty or undefined
    }
  }, [overlayInfo]);

  useEffect(() => {
    if (elements.length > 0) {
      console.log(elements[0].img.src);
    } else {
      console.log("Elements array is empty");
    }
  }, [elements]);

  return (
    <div className="absolute w-full h-full pointer-events-none">
      <div className="relative w-48 h-48 bg-red-500 z-20">
        {/* {elements.length > 0 && (
          <Image layout="fill" src={elements[0].img.src} alt={elements[0].img.alt} />
        )} */}
      </div>
    </div>
  );
};

export default Overlay;