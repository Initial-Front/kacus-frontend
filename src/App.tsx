import { Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './Dashboard/layout'
import AdministratorsTable from './components/AdminTable'
import Home from './Dashboard/Home'
import ListingsPage from './Dashboard/listing'
import TradingPairs from './Dashboard/DerivativeModule/tradingPairs'
import TradePairDetailsPage from './Dashboard/DerivativeModule/tradingDetails'
import ProductContact from './Dashboard/DerivativeModule/ProductContract'
import ProductContractDetailsPage from './Dashboard/DerivativeModule/productContractDetails'
import AllUsers from './Dashboard/UserManagement/AllUsers'
import FlaggedUsers from './Dashboard/UserManagement/FlaggedUsers'
import UserDetailsPage from './Dashboard/UserManagement/AllUsersDetail'
import FlaggedUserDetailsPage from './Dashboard/UserManagement/FlaggedUserDetail'
import TradingMonitoring from './Dashboard/tradingMonitoring'
import TradingAnalytics from './Dashboard/ReportAndAnalytics'
import Document from './Dashboard/Document'
import ApiDev from './Dashboard/ApiDeveloper'
import MarketMarker from './Dashboard/MarketMarker'
import PrivateMarket from './Dashboard/privateMarket'
import PrivateDetailPage from './Dashboard/privateMarket/PrivateDetailsPage'
import OverView from './Dashboard/WalletTreasury/overView'
import WalletMonitoring from './Dashboard/WalletTreasury/WalletMonitoring'
import FundMovement from './Dashboard/WalletTreasury/Fundmovement'
import Messaging from './Dashboard/Messaging'
import Setting from './Dashboard/Settings'

function App() {
  return (
    <Routes>

      <Route path="/" element={<div>Home Page</div>} />


      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/dashboard/Admin" element={<AdministratorsTable />} />
        <Route path="/listing" element={<ListingsPage />} />
        <Route path="/Tradingpairs" element={<TradingPairs />} />
        <Route path="/ProductContact" element={<ProductContact />} />
        <Route path="/ProductContact/:id" element={<ProductContractDetailsPage />} />
        <Route path="/TradePairDetailsPage/:id" element={<TradePairDetailsPage />} />
        <Route path="/AllUsers" element={<AllUsers />} />
        <Route path="/AllUsersDetails/:id" element={<UserDetailsPage />} />
        <Route path='/FlaggedUsers' element={<FlaggedUsers />} />
        <Route path='/FlaggedUsersDetails' element={<FlaggedUserDetailsPage />} />
        <Route path='/TradingMonitoring' element={<TradingMonitoring />} />
        <Route path='/TradingAnalytics' element={<TradingAnalytics />} />
        <Route path='/Documents' element={<Document />} />
        <Route path='/ApiDev' element={<ApiDev />} />
        <Route path='/MarketMarker' element={<MarketMarker />} />
        <Route path='/PrivateMarket' element={<PrivateMarket/>} />
        <Route path='/PrivateMarketDetail/:id' element={<PrivateDetailPage/>} />
         <Route path='/overview' element={<OverView/>} />
        <Route path='/WalletMonitoring' element={<WalletMonitoring/>} />
         <Route path='/FundMovement' element={<FundMovement/>} />
         <Route path='/Message' element={<Messaging/>} />
          <Route path='/Setting' element={<Setting/>} />
      </Route>

    </Routes>
  )
}

export default App
