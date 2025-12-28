import './Blog.css'
import { ArrowCircleLeft, ArrowCircleRight, Facebook, Instagram, LinkedIn, Twitter, WhatsApp } from '@mui/icons-material'
import blogimg1 from '../../../assets/blogimg1.jpg'
import blogimg2 from '../../../assets/blogimg2.jpg'
import blogimg3 from '../../../assets/blogimg3.jpg'
import blogimg4 from '../../../assets/blogimg4.jpg'
import blogimg5 from '../../../assets/blogimg5.jpg'
import blogimg6 from '../../../assets/blogimg6.jpg'

import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div>
      <div className='BlogContainer'>
        <div className='BlogHeader'>
          <h1>Bulletin & Networthy</h1>
          <p>Valuable money management tips to consider.</p>
        </div>

        <div className='BlogGrid'>
          {/* Card 1 */}
          <div className='BloCard'>
            <div className="img-container">
              <img src={blogimg1} alt="Liquidity Ratio" />
            </div>
            <div className="card-content">
              <a className='Development' href="#">Finance Development</a>
              <h3>Exploring the Liquidity Ratio: A Comprehensive Guide</h3>
              <p>In the realm of personal and business finance, the liquidity ratio serves as an invaluable tool for evaluating how easily you can convert your assets into cash...</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className='BloCard'>
            <div className="img-container">
              <img src={blogimg2} alt="CBN Limits" />
            </div>
            <div className="card-content">
              <a className='Development' href="#">Money Tip</a>
              <h3>CBN's New Cash Withdrawal Limits: 2026 Guide</h3>
              <p>This document provides a comprehensive overview of the Central Bank of Nigeria's newly implemented cash withdrawal limits...</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className='BloCard'>
            <div className="img-container">
              <img src={blogimg3} alt="CBN Limits" />
            </div>
            <div className="card-content">
              <a className='Development' href="#">Miscellaneous</a>
              <h3>Detty December and the January Broke Syndrome: 2025/2026 Guide</h3>
              <p>Detty December and the January Broke Syndrome: A Comprehensive Guide to Achieving a Debt-Free New Year
                As the festive season approaches, many people indulge in spending during “Detty December,” often leading to financial strain in January, commonly referred to as the "January Broke Syndrome." This guide aims to provide you with practical strategies to maintain financial stability, avoid debt, and set the foundation for a debt-free new year. Learn how to budget effectively, make wise spending choices during the holidays, and implement strategies to recover financially in January and beyond. With the right planning and mindset, you can enjoy the festivities while staying on track with your financial goals.</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className='BloCard'>
            <div className="img-container">
              <img src={blogimg4} alt="CBN Limits" />
            </div>
            <div className="card-content">
              <a className='Development' href="#">Finance Scope</a>
              <h3>Strategic Wedding Planning: Dont break the bank</h3>
              <p>Detty December and the January Broke Syndrome: A Comprehensive Guide to Achieving a Debt-Free New Year
                As the festive season approaches, many people indulge in spending during “Detty December,” often leading to financial strain in January, commonly referred to as the "January Broke Syndrome." This guide aims to provide you with practical strategies to maintain financial stability, avoid debt, and set the foundation for a debt-free new year. Learn how to budget effectively, make wise spending choices during the holidays, and implement strategies to recover financially in January and beyond. With the right planning and mindset, you can enjoy the festivities while staying on track with your financial goals.</p>
            </div>
          </div>

          {/* Card 5 */}
          <div className='BloCard'>
            <div className="img-container">
              <img src={blogimg5} alt="CBN Limits" />
            </div>
            <div className="card-content">
              <a className='Development' href="#">Tax Reform Escape plan</a>
              <h3>Understanding the Impact of New Tax Laws on Your Salary, Savings, and Investments by 2026:</h3>
              <p>Understanding the Impact of New Tax Laws on Your Salary, Savings, and Investments by 2026
                As we approach 2026, it is essential to consider how the recent changes in tax legislation could significantly influence various aspects of personal finance, including your salary, savings, and investment strategies. The new tax laws may introduce adjustments to tax brackets, deductions, and credits, which could alter the amount you take home from your paycheck.
                For instance, if tax rates are increased for higher income brackets, those earning substantial salaries could see a reduction in their disposable income, affecting their ability to save and spend. Conversely, reductions in tax rates for lower-income brackets could provide additional cash flow, potentially encouraging increased consumer spending.
                In terms of savings, changes in the treatment of retirement accounts may arise, influencing how much you choose to contribute to 401(k)s or IRAs. New tax incentives or limits on contributions could either motivate higher savings rates or present challenges in building a secure financial future. Furthermore, understanding any potential tax implications related to capital gains and dividends is crucial for those engaged in investing, as these factors can dictate overall return on investment.
                In summary, as we look ahead to 2026, it's vital to stay informed about how legislative shifts in tax policy could affect your financial landscape, enabling you to make well-informed decisions regarding your income, savings plans, and investment portfolio.</p>
            </div>
          </div>

          {/* Card 6 */}
          <div className='BloCard'>
            <div className="img-container">
              <img src={blogimg6} alt="CBN Limits" />
            </div>
            <div className="card-content">
              <a className='Development' href="#">A Journey to Bridge the Childhood Literacy Gap</a>
              <h3>Building a Financial Education App for Kids: </h3>
              <p>Through carefully crafted modules, young users will encounter challenges that allow them to make financial decisions, helping to reinforce the lessons learned. The app incorporates quizzes, games, and rewards to keep children motivated and excited about their progress in financial literacy, In essence, this initiative is not only about imparting knowledge but also about closing the childhood literacy gap by instilling confidence and competence in handling finances—empowering children to navigate their futures with greater assurance and skill.</p>
            </div>
          </div>
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

export default Blog