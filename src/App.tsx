import React from 'react';
import HeroBlock from './components/Blocks/HeroBlock/HeroBlock';
import ContentBlock from './components/Blocks/ContentBlock/ContentBlock';
import ImageBlock from './components/Blocks/ImageBlock/ImageBlock';
import Footer from './components/Footer/Footer';

function App() {
  
  return (
    <div>      
      
      <HeroBlock/>
    <ImageBlock isRightImage={true}/>
    <ContentBlock/>
    <ImageBlock isRightImage={false}/>
    <Footer/>
    
    </div>

    
  );
}

export default App;
