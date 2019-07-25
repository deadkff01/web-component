import React from 'react'
import { Link } from 'react-router-dom'
import Title from '../Common/Title'
// import Button from '../Common/Button'

const Page1 = () => (
  <>
    <Title>This is the Page1 component</Title>
    <Link to="/page2">Go to Page2</Link>
  </>
)

export default Page1
