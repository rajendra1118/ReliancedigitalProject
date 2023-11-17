import React from 'react'
import { Link } from 'react-router-dom'
import facebook from '../assest/facebook.png'
import twitter from '../assest/twitter.png'
import youtubelogo from '../assest/youtubelogo.png'
import playstore from '../assest/playstore.png'
import applestore from '../assest/playstore.png'


const Footer = () => {
    return (
        <div className='maiFndiv' >


            <div className='topDiv'>

                <div className='category'>
                    <div>
                        <h5>PRODUCT CATEGORIES</h5>
                        <Link to="/mobile" >SmartPhone</Link>
                        <Link to="/computers">Laptops</Link>
                        <Link to="tv">Telivision</Link>
                        <Link to="/homeappli" >Air Conditiones</Link>
                        <Link to="/homeappli" >Refirigerators</Link>
                        <Link to="/kitchan" >Kitchan Appliancs</Link>
                        <Link to="/accessories" >Accessories</Link>
                        <Link to="/personal" > Personal care & Grooming</Link>
                    </div>
                    <div>
                        <h5>Site Info</h5>
                        <Link to="/">About Reliance Digital</Link>
                        <Link to="/">resQ Services</Link>
                        <Link to="/">Site Map</Link>
                        <Link to="/">Gift Cards</Link>
                        <Link to="/">Corporate Enquires</Link>
                        <Link to="/">Contact Us</Link>
                    </div>


                    <div>
                        <h5>RESOURCE CENTRE</h5>
                        <Link to="/" >Product Reviews </Link>
                        <Link to="/" >Buying Guides</Link>
                        <Link to="/" >Featured Stories</Link>
                        <Link to="/" >Events & Happenings</Link>
                        <Link to="/" >Nearest Store</Link>
                        <Link to="/" >How Tos</Link>
                    </div>
                    <div>
                        <h5>POLICIES</h5>
                        <Link to="/">Terms of Use</Link>
                        <Link to="/">FAQs</Link>
                        <Link to="/">Cancellation and Return Policy</Link>
                        <Link to="/">Pricing and Payments Policy</Link>
                        <Link to="/">Shipping and Delivery Policy</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">E-waste Recycling Policy</Link>
                        <Link to="/">EMI and Additional Cashback T&C</Link>
                        <Link to="/">RelianceOne Loyalty Program T&C</Link>
                        <Link to="/">Caution Notice</Link>

                    </div>
                </div>
                <div className='experincelogo'>
                    <div>
                        <h4>FOLLOW US</h4>
                        <img src={facebook} alt="" />
                        <img src={twitter
                        } alt="" />
                        <img src={youtubelogo} alt="" />
                    </div>
                    <div>
                        <h3>
                            EXPERIENCE RELIANCE DIGITAL APP ON MOBILE</h3>
                        <img src={playstore} alt="" />
                        <img src={applestore} alt="" />
                    </div>
                </div>

            </div>

            <div className='BottomDiv'>

                <div>
                    <h4>Disclaimer</h4>
                    <p>Product prices, offers and availability are subject to change from time to time. All prices are inclusive of taxes. Product colours & images are only for illustration and they may not exactly match with the actual product. Product specs are subject to change & may vary from actual product. While every care is taken to avoid inaccuracies in content, these are provided as is, without warranty of any kind.</p>
                </div>

                <div>
                    <p> © 2023 Reliance Digital. All Rights Reserved.</p>
                </div>
            </div>





        </div>
    )
}


export { Footer }