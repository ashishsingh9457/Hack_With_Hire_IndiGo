import React from 'react'
import Layout from '../components/Layout/Layout'
import { Link } from 'react-router-dom'
import FlightTable from '../components/FlightTable'

const Home = () => {
  return (
    <Layout title={'Home Page'}>

<h1 className="text-3xl font-bold text-center my-6" style={{ fontFamily: 'FontName, sans-serif' }}>
  Hi there, where would you like to <span className="text-green-500">IndiGo</span> today?
</h1>
      <FlightTable/>

    </Layout>
  )
}

export default Home