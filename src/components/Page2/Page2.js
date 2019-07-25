import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../Common/Title'
//import Button from '../Common/Button'

const Page2 = () => (
  <>
    <Title>This is the Page2 component</Title>
    <Link to="/page1">Go back to Page1</Link>
  </>
)

export default Page2
