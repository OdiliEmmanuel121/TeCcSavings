import './Goforgrowth.css'
import { ArrowCircleRight, VerifiedUser, TrendingUp, AccountBalance } from '@mui/icons-material'

const Goforgrowth = () => {
  return (
    <div className='GoforgrowthContainer'>
      {/* Header Section */}
      <div className='GoHeader'>
        <h1 className='MainTitle'>Grow Wealth <span className='TextGradient'>Without Borders</span></h1>
        <p className='SubTitle'>Secure, regulated, and transparent global investing for every African.</p>
      </div>

      <div className='GoFirstSection'>
        {/* Card 1 */}
        <div className='GoCard'>
          <div className='CardIcon'><VerifiedUser /></div>
          <h1>Certified Investment Advisor</h1>
          <p>TeCc is proudly registered in Port Harcourt, Nigeria, as well as in Kenya, Ghana, Canada, and the USA. Our Naira investments are managed through regulated entities, supported by TeCc Technologies—a digital sub-broker licensed by the SEC.</p>
        </div>

        {/* Card 2 */}
        <div className='GoCard highlighted'>
          <div className='CardIcon'><TrendingUp /></div>
          <h1>Empowering Your Wealth</h1>
          <p>Generations of Africans have seen their wealth creation hindered by inflation and devaluation. We bridge that gap by providing everyday people access to global, dollar-denominated investments previously reserved for the elite.</p>
        </div>

        {/* Card 3 */}
        <div className='GoCard'>
          <div className='CardIcon'><AccountBalance /></div>
          <h1>Customized Growth Plans</h1>
          <p>Navigate the investment landscape with ease. Historically, our users see returns ranging from 8% to 15%+. Start your journey with as little as 10 Naira and build a prosperous financial future with our expert guidance.</p>
        </div>
      </div>

      <div className='thirdsection'>
        <a className='cardbutton1' href="#">Start investing <ArrowCircleRight /></a>
        <a className='cardbutton2' href="#">Download app <ArrowCircleRight /></a>
      </div>
    </div>
  )
}

export default Goforgrowth