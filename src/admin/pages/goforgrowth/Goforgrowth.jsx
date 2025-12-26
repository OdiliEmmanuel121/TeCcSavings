import './Goforgrowth.css'
import { VerifiedUser, TrendingUp, AccountBalance, LinkedIn } from '@mui/icons-material'
import { ArrowCircleLeft, ArrowCircleRight, Facebook, Instagram, Twitter, WhatsApp } from '@mui/icons-material'


const Goforgrowth = () => {
  return (
    <div>
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


        <div className='tenthsection'>
          <div>
            <h1 className='news'>Weekly newsletter</h1>
            <h2 className='fun' >Sign up for our weekly newsletter for fun, finance and more</h2>
          </div>
          <div>
            <input type="text" className='firstname' placeholder='Firstname' />
            <input type="text" className='lastname' placeholder='Lastname' />
          </div>
          <div>
            <input type="text" className='email' placeholder='Email address' />
            <button className='subscribebutton'>Subscribe</button>
          </div>
        </div>
      </div>
      
       <footer className='FooterSection'>
             <div className='FooterContainer'>
               {/* Brand Section */}
               <div className='FooterBrand'>
                 <h2 className='FooterLogo'>Tecc Savings</h2>
                 <p className='FooterTagline'>Global naira investment <br /> made easy.</p>
               </div>
     
               {/* Links Grid */}
               <div className='FooterLinksGrid'>
                 <div className='FooterColumn'>
                   <h3>Company</h3>
                   <a href="#">About us</a>
                   <a href="#">Professions</a>
                   <a href="#">FAQs</a>
                   <a href="#">Weekly newsletter</a>
                 </div>
     
                 <div className='FooterColumn'>
                   <h3>Resources</h3>
                   <a href="#">Why Tecc</a>
                   <a href="#">Tecc business</a>
                   <a href="#">Developer</a>
                 </div>
     
                 <div className='FooterColumn'>
                   <h3>Official</h3>
                   <a href="#">Privacy Policy</a>
                   <a href="#">Disclosure</a>
                   <a href="#">Go for growth</a>
                 </div>
     
                 <div className='FooterColumn'>
                   <h3>Contact us</h3>
                   <a href="tel:070023742356">0700 2374 2356</a>
                   <a href="mailto:Hello@teccgrowth.com">Hello@teccgrowth.com</a>
                 </div>
               </div>
             </div>
     
             {/* --- ADDED DOWNLOAD SECTION HERE --- */}
             <div className="FooterDownloadArea">
               <a href="https://play.google.com/store" target="_blank" rel="noreferrer" className="footer-store-btn">
                 Download from Playstore
               </a>
               <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer" className="footer-store-btn">
                 Download from App Store
               </a>
             </div>
     
             <div className='FooterBottom'>
               <p>&copy; 2026 Tecc Savings Technology. All rights reserved.</p>
               <div className='SocialLinks'>
                 {/* Replace the '#' with your actual social media profile URLs */}
                 <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" className='SocialIcon1'>
                   <Facebook size={10} />
                 </a>
                 <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" className='SocialIcon2'>
                   <Instagram size={10} />
                 </a>
                 <a href="https://twitter.com/yourprofile" target="_blank" rel="noreferrer" className='SocialIcon3'>
                   <Twitter size={10} />
                 </a>
                 <a href="https://wa.me/23470023742356" target="_blank" rel="noreferrer" className='SocialIcon4'>
                   <WhatsApp size={10} />
                 </a>
                 <a href="https://linkedin.com/company/yourprofile" target="_blank" rel="noreferrer" className='SocialIcon5'>
                   <LinkedIn size={10} />
                 </a>
               </div>
             </div>
           </footer>
    </div>
  )
}

export default Goforgrowth