import { useRef, useEffect } from 'react';
import { BsArrowUp } from "react-icons/bs";

const ScrollToTop = () => {
 const scrollContainer = useRef(null);

 useEffect(() => {
    const container = scrollContainer.current;
    const content = container.children[0];
    const height = content.offsetHeight;

    setInterval(() => {
      if (container.scrollTop <= 0) {
        container.scrollTop = height;
      } else {
        container.scrollTop -= 1;
      }
    }, 20);
 }, []);

 return (
    <div className="App" ref={scrollContainer}>
      <div className="content">
        {/* Your content goes here */}
        <BsArrowUp className='text-6xl text-orange-500'/>
      </div>
    </div>
 );
};

export default ScrollToTop;