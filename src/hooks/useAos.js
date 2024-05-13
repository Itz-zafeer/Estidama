import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const useAos = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true
    });
  }, []);
};

export default useAos;
