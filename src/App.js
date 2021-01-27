import _default from 'antd/lib/checkbox/Group'
import React from 'react'
import MarketingGoals from './components/marktingGoals'
import MarketingSolution from './components/marketSolution'
import MarketingServices from './components/marketingServices'
import GrowingPresence from './components/growingPresence'
import MarketAgency from './components/marketAgency'
import LatestResourse from './components/latestResourse'
import './App.css'

function  App(){
  return(
    <div>
    <MarketingGoals />
    <MarketingSolution />
    <MarketingServices />
    <GrowingPresence />
    <MarketAgency />
    <LatestResourse />
    </div>
  )
}
export default App;