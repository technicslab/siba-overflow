import Footer from './Footer'
import Navbar from './Navbar'
import Introduction from './Introduction'
import ServicesDiv from './ServicesDiv'
import ExploreDiv from './ExploreDiv'
import PromotionArea from './PromotionArea'
import LatestUpdateDiv from './LatestUpdateDiv'
import UserDashboardNav from './UserDashboardNav'
import { useLocation } from 'react-router'
export default function HomePage(){

    const location=useLocation()
    return(
        <>
        
            <Navbar />  
            <Introduction />
            <ServicesDiv />
            <ExploreDiv />
            <PromotionArea />
            <LatestUpdateDiv/>
            <Footer />

        </>
    )
}