import { useState } from 'react';
import Menu from './assets/Menu.svg';
import Logo from './assets/coca_cola.png';
import Botella from './assets/coca_cola_2.png';
import Slide_original from './assets/slide/slide_original.png';
import Slide_zero from './assets/slide/slide_zero.png';
import Slide_light from './assets/slide/slide_light.png';

import Banner1 from './assets/banner/ban1.png';
import Banner2 from './assets/banner/ban2.png';
import Banner3 from './assets/banner/ban3.png';
import Banner4 from './assets/banner/ban4.png';

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
    <div className="w-screen h-screen lg:overflow-hidden flex items-stretch pt-24">
      <nav className="w-full fixed bg-white z-50 top-0">
        <div className="flex w-full px-12 h-24 justify-between items-center shadow-md">
          <div> <a href="/"><img src={Logo} alt="Logo" /></a></div>
          <div className="w-14"> <img src={Botella} alt="Botella" /></div>
        </div>
      </nav>
      
      <div className="absolute top-2/4 z-50">
        <DrawerWithNavigation/>
      </div>

      <div className="flex flex-col lg:flex-row items-center lg:items-stretch w-full justify-around  flex-wrap">
        {/* <div className="w-full min-h-[700px] h-[100vh] flex justify-center items-center lg-max:mt-36">
          {renderSlide()}
        </div> */}
        <div className="min-w-[30%] flex flex-col justify-evenly">
          <div className="px-4">
            <h1 className="font-semibold text-3xl text-white">Open hapiniess with a Coca-Cola</h1>
            <h2 className="text-1xl mt-3 text-white"> Look for me in restaurants, drink machines, and more sites. </h2>
          </div>
          <div className="hidden justify-evenly items-center lg:flex">
            <img src={Banner1} alt="ban1" className="max-w-[20%] w-[100px]"/>
            <img src={Banner2} alt="ban2" className="max-w-[20%] w-[100px]"/>
            <img src={Banner3} alt="ban3" className="max-w-[20%] w-[100px]"/>
            <img src={Banner4} alt="ban4" className="max-w-[20%] w-[100px]"/>
          </div>
        </div>
        <div className="shadow-lg bg-white p-6 rounded-full w-60 h-60 lg:w-80 lg:h-80 my-4 lg:my-9 flex justify-center items-center">
          <ModelCoca/>
        </div>
        <div>
          <div className="flex justify-evenly py-4 items-center lg:hidden w-full">
            <img src={Banner1} alt="ban1" className="max-w-[20%] w-[100px]"/>
            <img src={Banner2} alt="ban2" className="max-w-[20%] w-[100px]"/>
            <img src={Banner3} alt="ban3" className="max-w-[20%] w-[100px]"/>
            <img src={Banner4} alt="ban4" className="max-w-[20%] w-[100px]"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
