import React from 'react'
import Header from '../../Header/Header'
import {heroBlockText} from './../../../assets/constants'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

interface heroBlockText{
  title:string;
  subTitle:string;
  btnTextPrimary:string;
  btnTextSecondary:string;

}


const HeroBlock = () => {
    return (
        <div className="heroblock">
      <Container>
        <Header />
        <Container>
          <h1 className="title">{heroBlockText.title}</h1>
          <h4 className="sub-title">
            {heroBlockText.subTitle}
          </h4>

          <div className="btn-section">
            <Button variant="primary">{heroBlockText.btnTextPrimary}</Button>
            <Button variant="secondary">{heroBlockText.btnTextSecondary}</Button>
          </div>
        </Container>
      </Container>
        </div>
    )
}

export default HeroBlock
