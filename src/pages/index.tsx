import Button from '@/components/atoms/Button';
import HorizontalMenu from '@/components/atoms/HorizontalMenu';
// import Paragraph from '@/components/atoms/Paragraph';
import React from 'react'

const Home: React.FC = () => {
  return (
    <div style={{width: '100vw', height: '100vh', display: 'block'}}>
      {/* <Paragraph color='primary'>OOOO OOO SEXO É BOM</Paragraph> */}
      {/* <Button label='Acessar blog' weight={700} event={() => console.log('AIAIAIAI')}></Button> */}
      <HorizontalMenu></HorizontalMenu>
    </div>
  )
}

export default Home