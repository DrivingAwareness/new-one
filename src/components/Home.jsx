import React from 'react'
import Content from './Content'
import Main2 from './Main2'
import { Page3 } from './Page3'
import Review2 from './Review2'
import Footer from './Footer'
import Upper from './Upper'

export default function Home() {
  return (
    <div>
      {/* <Upper/> */}
        <Content/>
        <Main2/>
        <Page3/>
        <Review2/>
        <Footer/>
    </div>
  )
}
