import { useState, useEffect } from "react";
import { motion } from "framer-motion";
// import img1 from "../../assets/slidAuto/img1.png";
import img2 from "../../assets/slidAuto/img2.png";
import img3 from "../../assets/slidAuto/img3.png";
import img4 from "../../assets/slidAuto/img4.png";

const images = [img2, img3, img4];

export default function ImageSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-lg mx-auto overflow-hidden ">
      <motion.img
        key={index} // لإعادة تشغيل الأنيميشن عند كل تغيير للصورة
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="w-full h-auto object-cover"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </div>
  );
}
