import { useEffect, useState } from 'react';
import '../App.css';
import pic from '../images/axle.JPG';

function Square() {
    const [isVisible, setIsVisible] = useState('');
    const handleClick = (e)=>{
        setIsVisible('');

    }
    useEffect(() => {
        const timer = setInterval(() => {
          setIsVisible('visible');
        }, (Math.floor(Math.random()*15)*1000));
                   // clearing interval
        return () => clearInterval(timer);
      });
    

  return (
    <div className="square">
      <img src={pic} alt="" onClick={handleClick} className={isVisible}/>
    </div>
  );
}

export default Square;