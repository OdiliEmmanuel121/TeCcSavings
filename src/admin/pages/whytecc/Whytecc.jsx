import React, { useState } from 'react'; // Ensure useState is imported
import './Whytecc.css'
import iphone from '../../../assets/iphone.png'
import { ArrowCircleLeft, ArrowCircleRight } from '@mui/icons-material'
import adrons from '../../../assets/adrons.jpg'
import hisense from '../../../assets/hisense.jpg'
import wwe from '../../../assets/wwe.png'
import samsung from '../../../assets/samung.png'
import netflix from '../../../assets/netflix.png'
import amazon from '../../../assets/amazon.png'
import countries from '../../../assets/countries.webp'
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

const Whytecc = () => {
  // --- CALCULATOR LOGIC START ---
  const [monthlyEarn, setMonthlyEarn] = useState(5000);
  const [investPercent, setInvestPercent] = useState(20);
  const [years, setYears] = useState(45);

  const annualReturnRate = 0.10; // 10% annual return
  const monthlyInvestment = (monthlyEarn * (investPercent / 100));
  const totalSaved = monthlyInvestment * 12 * years;
  
  const monthlyRate = annualReturnRate / 12;
  const totalMonths = years * 12;
  const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate);
  // --- CALCULATOR LOGIC END ---

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
        <a className='cardbutton1' href="#">Start investing  < ArrowCircleRight /> </a>
        <a className='cardbutton2' href="#">Download app < ArrowCircleRight /> </a>
      </div>

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

      <div className='sevensection'>
        <h1 className='numbers'>Check our numbers</h1>
        <div className='headingseven'>
          <h1 className='headh1' >900k +</h1>
          <h1 className='headh2'  >#42m +</h1>
          <h1 className='headingsevenh1'>5 <img className='countries' src={countries} alt="countries" /> </h1>
        </div>
        <div className='headingseven2'>
          <h1 className='headh3' >Users</h1>
          <h1 className='headh4'  >Paid out to users</h1>
          <h1 className='headh5'  >Countries</h1>
        </div>
      </div>

      <div className='eleventhsection' >
        <div className='billi1img'>
          <img src={billi1} alt="billonaire" className='billi1' />
          <img src={billi2} alt="billonaire" className='billi2' />
          <img src={billi3} alt="billonaire" className='billi3' />
        </div>
        <div className='eleheading'>
          <h1 className='billih1'>What could be better than having just one billionaire?</h1>
          <h1 className='billih12'>A Circle.</h1>
          <p className='billip'>Achieve your financial goals more effectively by saving with friends through a friendly competition</p>
        </div>
        <div className='joinheading'>
          <a className='joincircle' href="#">Join a Circle now</a>
        </div>
      </div>

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
                <h2 className="result-value">${futureValue.toLocaleString(undefined, {maximumFractionDigits: 2})}</h2>
                <span className="result-duration">in {years} years</span>
              </div>

              <div className="result-sub-grid">
                <div className="result-item">
                  <p>Returns</p>
                  <h4 className="sub-value">${(futureValue - totalSaved).toLocaleString(undefined, {maximumFractionDigits: 2})}</h4>
                </div>
                <div className="result-item">
                  <p>Savings</p>
                  <h4 className="sub-value">${totalSaved.toLocaleString(undefined, {maximumFractionDigits: 2})}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* --- MODIFIED EIGHTSECTION END --- */}

      <div className='nightsection'>
        <div className='professionals'>
          <h1 className='meetpro'>Meet the Professionals</h1>
          <img src={king} alt="kingimage" className='king' />
          <img src={queen} alt="queenimage" className='queen' />
          <img src={prince} alt="princeimage" className='prince' />
          <img src={princess} alt="princessimage" className='princess' />
        </div>
        <div className='names'>
          <h2 className='name1'>Oataba Porshe</h2>
          <h2 className='name2' >Odili Toyin</h2>
          <h2 className='name3' >Adams John</h2>
          <h2 className='name4' >Smith Jane</h2>
        </div>
        <div className='namesrole'>
          <h2 className='position1'>Web-developer</h2>
          <h2 className='position2' >Founder,C.E.O</h2>
          <h2 className='position3' >Co-Founder</h2>
          <h2 className='position4' >Eecutives</h2>
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
        <div>
          <input type="text" className='firstname' placeholder='Firstname' />
          <input type="text" className='lastname' placeholder='Lastname' />
        </div>
        <div>
          <input type="text" className='email' placeholder='Email address' />
          <button className='subscribebutton'>Subscribe</button>
        </div>
      </div>

      <div className='footersection'>
        <div className='footermain1'>
          <h1 className='footerheading1'>Tecc Savings</h1>
          <h1 className='footersecondheading5'>Global naira <br /> investment made <br /> easy</h1>
        </div>
        <div className='footermain2'>
          <div className='footersplit'>
            <div className='footersecondheadingdiv1'>
              <h1 className='footerheading2'>Company</h1>
              <a className='footeranc1' href="#">About us </a>
              <a className='footeranc1' href="#">Professions</a>
              <a className='footeranc1' href="#">FAQs</a>
              <a className='footeranc1' href="#">Weekly newsletter</a>
            </div>
            <div className='footersecondheadingdiv2'>
              <h1 className='footerheading3'>Resources</h1>
              <a className='footeranc2' href="#">Why Tecc</a>
              <a className='footeranc2' href="#">Tecc business</a>
              <a className='footeranc2' href="#">Developer</a>
            </div>
            <div className='footersecondheadingdiv3'>
              <h1 className='footerheading4'>Official</h1>
              <a className='footeranc3' href="#">Private Policy</a>
              <a className='footeranc3' href="#">Dislosure</a>
              <a className='footeranc3' href="#">Go for growth</a>
            </div>
            <div className='footersecondheadingdiv4'>
              <h1 className='footerheading5'>Contact us</h1>
              <a className='footeranc4' href="#">0700 2374 2356</a>
              <a className='footeranc4' href="#">Hello@teccgrowth</a>
            </div>
          </div>
        </div>
        <p className='footertext'>&copy; 2024 Tecc Savings. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Whytecc;