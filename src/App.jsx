import { useState } from 'react';
import Menu from './assets/Menu.svg';
import Logo from './assets/coca_cola.png';
import Botella from './assets/coca_cola_2.png';
import Slide_original from './assets/slide/slide_original.png';
import Slide_zero from './assets/slide/slide_zero.png';
import Slide_light from './assets/slide/slide_light.png';

import DrawerWithNavigation from './components/drawer.jsx';
import ModelCoca from './components/modelCoca.jsx'

import './App.css';

function App() {
  const objectSlide = [
    { name: 'Zero', src: Slide_zero },
    { name: 'Original', src: Slide_original },
    { name: 'Light', src: Slide_light },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);

  const renderSlide = () => {
    
    return (
      <div className="flex flex-col lg:flex-row">
        {objectSlide.map((element, index) => (
          <div
            key={index}
            className={`transform ${index === selectedIndex ? 'scale-120' : 'scale-100'} mx-2 lg:mx-5`}
            onClick={() => setSelectedIndex(index)}
          >
            <img src={element.src} alt={element.name} className="h-56 my-4 lg:h-96" />
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="w-screen h-screen lg:overflow-hidden">
      <nav className="w-full fixed bg-white/50 z-50 top-0">
        <div className="flex w-full px-12 h-24 justify-between items-center shadow-md">
          <div> <a href="/"><img src={Logo} alt="Logo" /></a></div>
          <div className="w-14"> <img src={Botella} alt="Botella" /></div>
        </div>
      </nav>
      
      <div className="absolute top-2/4 z-50">
        <DrawerWithNavigation/>
      </div>

      <div className="">
        {/* <div className="w-full min-h-[700px] h-[100vh] flex justify-center items-center lg-max:mt-36">
          {renderSlide()}
        </div> */}
        <ModelCoca/>
      </div>
    </div>
  );
}

export default App;
