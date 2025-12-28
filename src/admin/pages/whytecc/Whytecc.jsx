import React, { useState } from 'react'; // Ensure useState is imported
import { CheckCircle, X } from 'lucide-react';
import './Whytecc.css'
import iphone from '../../../assets/iphone.png'
import { ArrowCircleLeft, ArrowCircleRight, Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material'
import adrons from '../../../assets/adrons.jpg'
import hisense from '../../../assets/hisense.jpg'
import wwe from '../../../assets/wwe.png'
import samsung from '../../../assets/samung.png'
import netflix from '../../../assets/netflix.png'
import amazon from '../../../assets/amazon.png'
// import countries from '../../../assets/countries.webp'
import king from '../../../assets/king.JPG'
import queen from '../../../assets/queen.jpg'
import prince from '../../../assets/prince.jpg'
import princess from '../../../assets/princess.jpg'
import billi1 from '../../../assets/billi1.webp'
import billi2 from '../../../assets/billi2.avif'
import billi3 from '../../../assets/billi3.jpg'
import iphone11 from '../../../assets/iphone11.png'
import efx1 from '../../../assets/efx1.png'
import spin from '../../../assets/spin.png'
import savemoney from '../../../assets/savemoney.jpg'
import growmoney from '../../../assets/growmoney.jpg'
import interestmoney from '../../../assets/interestmoney.jpg'
import vacationmoney from '../../../assets/vacationmoney.jpg'
// import { ArrowCircleRight, XCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';



const Whytecc = () => {
  // --- CALCULATOR LOGIC START ---
  const [monthlyEarn, setMonthlyEarn] = useState(5000);
  const [investPercent, setInvestPercent] = useState(20);
  const [years, setYears] = useState(45);
  const [showInvestModal, setShowInvestModal] = useState(false);
  const [showDownloadModal, setShowDownloadModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const handleSubscribe = (e) => {
    e.preventDefault();
    setShowPopup(true);
  };


  // NEW STATE for Join Circle Popup
  const [showJoinModal, setShowJoinModal] = useState(false);

  const annualReturnRate = 0.10; // 10% annual return
  const monthlyInvestment = (monthlyEarn * (investPercent / 100));
  const totalSaved = monthlyInvestment * 12 * years;

  const monthlyRate = annualReturnRate / 12;
  const totalMonths = years * 12;
  const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
  // --- CALCULATOR LOGIC END ---

  const [activeCard, setActiveCard] = useState(null);

  const savingsData = [
    {
      id: 1,
      img: savemoney,
      title: "Effective savings begin with an understanding of your finances",
      text: "Your goals are deeply personal, shaped by your unique aspirations and dreams. More than two million Nigerians turn to Cowrywise to cultivate wealth."
    },
    {
      id: 2,
      img: growmoney,
      title: "Combine smart saving with consistent, long-term investing",
      text: "Pay off high-interest debts, create a budget, open a savings account, and pay yourself first to keep growing."
    },
    {
      id: 3,
      img: interestmoney,
      title: "Millions of customers can't be wrong",
      text: "A trusted partner dedicated to helping individuals cultivate their wealth in a way that reflects their personal journey."
    },
    {
      id: 4,
      img: vacationmoney,
      title: "Save to earn interest over a period of time",
      text: "Savings helps to fund major life goals like education, homes, or retirement without dipping into daily funds."
    }
  ];

  return (
    <div className='whyteccContainer'>

      <div className='firstSection'>
        <h1 className='firstSectionh1'>Naira investment that <br />empower your <br className='growth' />growth</h1>
        <img src={efx1} alt="efx" className='iphoneimg1' />
        <img src={iphone} alt="iphone" className='iphoneimg' />
      </div>

      <div className='secondSection'>
        <p className='secondSectionp'> Tecc gives you access to a carefully selected portfolio of global investment,<br /> across Nigeria stocks, Nigeria real estate and <br />fixed income assests</p>
      </div>

      <div className='thirdsection'>
        <button className='cardbutton1' onClick={() => setShowInvestModal(true)}>
          Start investing <ArrowCircleRight />
        </button>
        <button className='cardbutton2' onClick={() => setShowDownloadModal(true)}>
          Download app <ArrowCircleRight />
        </button>
      </div>
      {/* --- POPUP 1: START INVESTING --- */}
      {showInvestModal && (
        <div className="modal-overlay" onClick={() => setShowInvestModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setShowInvestModal(false)}>×</button>
            <h2>Ready to grow?</h2>
            <p>Join thousands of Nigerians building wealth with Tecc.</p>
            <Link className='GetStartedBtn' to="/getstarted">Get Started</Link>
          </div>
        </div>
      )}

      {/* --- POPUP 2: DOWNLOAD APP --- */}
      {showDownloadModal && (
        <div className="modal-overlay" onClick={() => setShowDownloadModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setShowDownloadModal(false)}>×</button>
            <h2>Get the Mobile App</h2>
            <p>Invest, save, and track your growth on the go.</p>
            <div className="store-flex">
              <a href="https://apple.com" target="_blank" className="store-btn">App Store</a>
              <a href="https://play.google.com" target="_blank" className="store-btn">Play Store</a>
            </div>
          </div>
        </div>
      )}

      <div className='fourthsection'>
        <div className='card1'>
          <div className='cardcontent'>
            <h2 className='cardontenth2'>Our investors globally</h2>
            <div className='cardimages'>
              <img src={adrons} alt="adrons" className='adrons' />
              <img src={hisense} alt="hisense" className='hisense' />
              <img src={wwe} alt="wwe" className='wwe' />
              <img src={samsung} alt="samusung" className='samsung' />
              <img src={netflix} alt="netflix" className='netflix' />
              <img src={amazon} alt="amazon" className='amazon' />
            </div>
          </div>
        </div>
      </div>

      <div className='fifthsection'>
        <div className='beneficials'>
          <h3 className='meet' >Meet our beneficials</h3>
        </div>
        <div className='videosection'>
          <iframe className='video1' width="450" height="315" src="https://www.youtube.com/embed/X-cUEjQ8aas?si=_pgNTA8QY8s5KDut" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          <iframe className='video2' width="450" height="315" src="https://www.youtube.com/embed/y3bQfOAsnY0?si=2VAWU62GTuxxgQFA" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
          <iframe className='video3' width="0" height="315" src="https://www.youtube.com/embed/IWPrGxCMcUc?si=IBVXPQiotpay4OsY" title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>

      <div className='sixthsection'>
        <div className='heading'>
          <h1 className='headingtext1'> Simple. Diversified. Managed by</h1>
          <h1 className='headingtext2'>Professionals</h1>
          <p className='headingtext3'>Explore an array of investment options that offer superior <br />returns, curated and managed by experts, all from the <br /> comfort of your device. Simple, right?</p>
        </div>
      </div>

      <div className='whyteccContainer'>
        <div className='sevensection-container'>
          <div className='seven-track'>
            {/* We render the list twice for a seamless infinite loop */}
            {[...savingsData, ...savingsData].map((item, index) => (
              <div
                key={index}
                className="card001"
                onClick={() => setActiveCard(item)}
              >
                <img src={item.img} alt="money" className="card-image1" />
                <div className="card-content1">
                  <h3 className="card-title1">{item.title}</h3>
                  <p className="card-text1">{item.text.substring(0, 100)}...</p>
                  <span className="view-more">Click to view</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- POPUP MODAL --- */}
        {activeCard && (
          <div className="modal-overlay" onClick={() => setActiveCard(null)}>
            <div className="modal-card" onClick={(e) => e.stopPropagation()}>
              <button className="close-btn" onClick={() => setActiveCard(null)}>×</button>
              <img src={activeCard.img} alt="detail" />
              <div className="modal-info">
                <h3>{activeCard.title}</h3>
                <p>{activeCard.text}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* MODIFIED ELEVENTH SECTION */}
      <section className='eleventhsection'>
        <div className='billi-container'>
          <div className='billi-stack'>
            <img src={billi1} alt="Member 1" className='billi-img billi1' />
            <img src={billi2} alt="Member 2" className='billi-img billi2' />
            <img src={billi3} alt="Member 3" className='billi-img billi3' />
          </div>
          <span className='billi-badge'>Join 5,000+ others</span>
        </div>

        <div className='eleheading'>
          <h2 className='billih1'>What could be better than having just one billionaire?</h2>
          <h1 className='billih12'>A Circle.</h1>
          <p className='billip'>
            Achieve your financial goals more effectively by saving with friends
            through a friendly competition.
          </p>
        </div>

        <div className='join-wrapper'>
          {/* CHANGED: <a> to <button> to trigger the modal */}
          <button className='joincircle' onClick={() => setShowJoinModal(true)}>
            Join a Circle now
          </button>
        </div>
      </section>

      {/* --- NEW JOIN CIRCLE MODAL --- */}
      {showJoinModal && (
        <div className="modal-overlay" onClick={() => setShowJoinModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-x" onClick={() => setShowJoinModal(false)}>×</button>
            <h2>Start Your Circle</h2>
            <p>You need an account to join or create a savings circle.</p>
            {/* Added your Login Link here */}
            <Link className='Login' to="/login" style={{
              display: 'inline-block',
              marginTop: '20px',
              padding: '12px 25px',
              backgroundColor: '#000',
              color: '#fff',
              textDecoration: 'none',
              borderRadius: '8px'
            }}>
              Log in to Continue
            </Link>
          </div>
        </div>
      )}


      {/* --- MODIFIED EIGHTSECTION START --- */}
      <div className='eightsection'>
        <div className='eightcard'>
          <h1 className='startbuilding'>Start building your future</h1>

          <div className="calc-card-internal">
            <div className="input-group">
              <label>How much do you earn monthly?</label>
              <p className="recommend-text">You can type in your exact income in the display field</p>
              <input
                type="number"
                value={monthlyEarn}
                onChange={(e) => setMonthlyEarn(Number(e.target.value))}
                className="calc-input"
              />
            </div>

            <div className="input-group">
              <label>What income % do you want to invest monthly?</label>
              <p className="recommend-text">We recommend 20% but feel free to start lower.</p>
              <input
                type="range" min="1" max="100"
                value={investPercent}
                onChange={(e) => setInvestPercent(Number(e.target.value))}
                className="calc-range"
              />
              <span className="percent-display">{investPercent}%</span>
            </div>

            <div className="input-group">
              <label>For a period of</label>
              <select value={years} onChange={(e) => setYears(Number(e.target.value))} className="calc-select">
                <option value="10">10 years</option>
                <option value="20">20 years</option>
                <option value="30">30 years</option>
                <option value="45">45 years</option>
              </select>
            </div>

            <div className="results-grid">
              <div className="result-item main-result">
                <p>You get</p>
                <h2 className="result-value">${futureValue.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h2>
                <span className="result-duration">in {years} years</span>
              </div>

              <div className="result-sub-grid">
                <div className="result-item">
                  <p>Returns</p>
                  <h4 className="sub-value">${(futureValue - totalSaved).toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
                </div>
                <div className="result-item">
                  <p>Savings</p>
                  <h4 className="sub-value">${totalSaved.toLocaleString(undefined, { maximumFractionDigits: 2 })}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- MODIFIED EIGHTSECTION END --- */}

      {/* Professional 1 */}
      <div className='nightsection'>
        <div className='team-card'>
          <div className='image-container'>
            <img src={king} alt="Oataba Porshe" className='member-img' />
          </div>
          <h2 className='member-name'>Oataba Porshe</h2>
          <p className='member-role'>Web Developer</p>
        </div>

        {/* Professional 2 */}
        <div className='team-card'>
          <div className='image-container'>
            <img src={queen} alt="Odili Toyin" className='member-img' />
          </div>
          <h2 className='member-name'>Odili Toyin</h2>
          <p className='member-role'>Founder, C.E.O</p>
        </div>

        {/* Professional 3 */}
        <div className='team-card'>
          <div className='image-container'>
            <img src={prince} alt="Adams John" className='member-img' />
          </div>
          <h2 className='member-name'>Adams John</h2>
          <p className='member-role'>Co-Founder</p>
        </div>

        {/* Professional 4 */}
        <div className='team-card'>
          <div className='image-container'>
            <img src={princess} alt="Smith Jane" className='member-img' />
          </div>
          <h2 className='member-name'>Smith Jane</h2>
          <p className='member-role'>Executive</p>
        </div>
      </div>


      <div className='twelvesection'>
        <div className='iphoneimage'>
          <img src={iphone11} alt="iphone111" className='iphone11' />
        </div >
        <div className='iphonecard'>
          <h1 className='iphoneh1'>Better interest rates than your bank</h1>
          <h2 className='iphoneh2' >Our amazaing and mouth watering interest rates will get your bank account jelous</h2>
          <p className='iphoneh3'>There's nothing quite like seeing your money grow in real time. By effectively tracking your investments, savings, and returns, you can eliminate guesswork and make informed decisions about your financial future</p>
        </div>
      </div>

      <div className='spinmain'>
        <div className='spindiv1'>
          <img src={spin} alt="spin" className='spin' />
        </div>
        <div className='spindiv2'>
          <h1 className='spinh1'>We manage your finances with responsibility and integrity. Regulated by the SEC, we prioritize transparency in all our operations. Our approach eliminates hidden fees and risky maneuvers, providing you with straightforward access to carefully selected assets designed to help you grow your wealth effectively.</h1>
        </div>
      </div>

      <div className='tenthsection'>
        <div>
          <h1 className='news'>Weekly newsletter</h1>
          <h2 className='fun' >Sign up for our weekly newsletter for fun, finance and more</h2>
        </div>
        <form onSubmit={handleSubscribe}>
          <div className='forminput'>
            <input type="text" className='firstname' placeholder='Firstname' />
            <input type="text" className='lastname' placeholder='Lastname' />
          </div>
          <div>
            <input type="text" className='email' placeholder='Email address' />
            <button className='subscribebutton'>Subscribe</button>
          </div>
        </form>
      </div>
      {/* --- SUCCESS POPUP --- */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-card" onClick={(e) => e.stopPropagation()}>
            <button className="close-popup" onClick={() => setShowPopup(false)}>
              <X size={20} />
            </button>

            <div className="success-icon-wrapper">
              <CheckCircle size={60} color="#00d094" />
            </div>

            <h2 className="popup-title">You're on the list!</h2>
            <p className="popup-text">
              Success! You've officially subscribed to the <strong>Tecc Weekly</strong>.
              Check your inbox every Monday for fun, finance, and wealth-building tips.
            </p>

            <button className="popup-confirm-btn" onClick={() => setShowPopup(false)}>
              Great, thanks!
            </button>
          </div>
        </div>
      )}

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
              <Link to="/about">About us</Link>
              <Link to="/professions">Professions</Link>
              <Link to="/faqs">FAQs</Link>
            </div>

            <div className='FooterColumn'>
              <h3>Resources</h3>
              <Link to="/why-tecc">Why Tecc Savings</Link>
              <Link to="/business">Tecc Business</Link> {/* This links to the new page */}
              <Link to="/developer">Developer</Link>
            </div>

            <div className='FooterColumn'>
              <h3>Official</h3>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/disclosure">Disclosure</Link>
        
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

export default Whytecc;