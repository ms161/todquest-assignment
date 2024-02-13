import './LandingPage.css'
import logo from './images/logo.png'
import searchIcon from './images/Vector.png'
import saleImage from './images/image.png'
import amazonlogo from './images/image 12.png'
import fashion from './images/fashion.png'
import food from './images/food.png'
import beauty from './images/beauty care.png'
import toys from './images/toys.png'
import cloud from './images/hosting.png'
import gaming from './images/gaming.png'
import phones from './images/travel.png'
import movies from './images/movies.png'
import image10 from './images/image 10.png'
import offer1 from './images/offer1.png'
import image14 from './images/image 14.png'
import image16 from './images/image 16.png'
import offerr1 from './images/offer1 (1).png'
import newsletterImg from './images/form-img.png'
import singupIcon from './images/icon.png'
import coupon from './images/icon (1).png'
import grabCoupon from './images/icon (2).png'
import vector from './images/Vector 1.png'
import vector2 from './images/Vector 2.png'
import phone1 from './images/Phone.png'
import phone2 from './images/Phone (1).png'
import appleLogo from './images/image 64.png'
import playLogo from './images/image 64 (1).png'
import container from './images/container.png'
import fLogo from './images/logo (1).png'
import arrow from './images/arrow.png'
import image65 from './images/image 65.png'
function LandingPage() {
    const arrayEmpty = [1, 2, 3, 4, 5, 6, 7, 8]
    const fourE = [1, 2, 3, 4]
    const ctg = ['Flight', 'Bus', 'Entertainment', 'Jewellery', 'Medicines', 'Hosting', 'Flowers', 'Beauty', 'OTT', 'Bills', 'Kids', 'Travel', 'Food', 'Eyewear', 'Lifestyle',
        'Kitchen', 'Rechare', 'Electronics', 'Hotel', 'Footwear', 'Lab', 'Education', 'Services', 'Furniture', 'Fashion', 'Pizza', 'Bike', 'Novelties']

    const imagePaths = {
        fashion,
        food,
        beauty,
        toys,
        cloud,
        gaming,
        phones,
        movies,
    };

    return (
        <>
            <div className='head' >
                <img src={logo} alt="" />
                <div>
                    <img className='search' src={searchIcon} alt="" />
                    <input type="text" placeholder='Search For brand, category, coupon' />
                </div>
                <button>LOGIN / SIGN UP</button>
            </div>

            <nav className='navbar'>
                <p>Home</p>
                <p>Deals</p>
                <p>Coupon</p>
                <p>Stores</p>
                <p>Contact us</p>
            </nav>

            <div className='saleImage'>
                <img src={saleImage} alt="" />
            </div>
            <div className='boxes'>

                {
                    arrayEmpty.map(() => {
                        return (
                            <>
                                <div className='item'>
                                    <div>
                                        <p>Upto 60% off on
                                            Appliances</p>
                                        <img src={amazonlogo} alt="" />
                                        <p>Upto 60% off on summer Appliances</p>
                                        <button>Grab Now</button>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>

            <div className='under'>
                <p className='deals'>Deals Of The Day</p>

                <div className='underline'></div>

            </div>
            <div className='boxes2'>

                {
                    fourE.map(() => {
                        return (
                            <>
                                <div className='item2'>
                                    <div>

                                        <img src={amazonlogo} alt="" />
                                        <p>amazon</p>
                                        <p>Flat 30% Off</p>
                                        <button>Grab Now</button>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }
            </div>
            <div className='under'>

                <p className='deals'>Coupon By Categories</p>
                <div className='underline'></div>
            </div>

            <div className='pBoxes3'>


                <div className="image-container">
                    {Object.keys(imagePaths).map((key) => (
                        <div className='image-container-item'>

                            <img key={key} src={imagePaths[key]} alt={key} />
                            <p>{key}</p>
                        </div>
                    ))}

                </div>
                <div className='boxes3'>

                    {
                        fourE.map(() => {
                            return (
                                <>
                                    <div className='item3'>
                                        <div>

                                            <img src={amazonlogo} alt="" />
                                            <p>amazon</p>
                                            <p>Flat 30% Off</p>
                                            <button>Grab Now</button>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }
                </div>
            </div>
            <div className='sung'>

                <img src={image10} alt="" />
            </div>

            <div className='under'>
                <p className='deals'>Popular Membership</p>
                <div className='underline'></div>
            </div>

            <div className='membership'>

                <div className='offer1'><img src={offer1} alt="" /></div>
                <div className='offerBg'>
                <div className='boxes4'>

{
    fourE.map(() => {
        return (
            <>
                <div className='item4'>
                    <div>
                        <img src={amazonlogo} alt="" />
                        <p>amazon</p>
                        <p>Flat 30% Off</p>
                        <button>Grab Now</button>
                    </div>
                </div>

            </>
        )
    })
}
</div>
                </div>

                <div className='offer1'><img src={image14} alt="" /></div>
                <div className='offer1'><img src={image16} alt="" /></div>
            </div>


            <div className='newsletter'>
                <div><img src={newsletterImg} alt="" /></div>
                <div>
                    <p >Subscribe to our Newsletter!</p>
                    <p>Be the first to get exclusive offers ands the latest news</p>
                    <div>
                        <input type="text" placeholder='Enter you email address' />
                    </div>
                    <button>SUBSCRIBE</button>

                </div>

            </div>

            <div className='under'>

                <p className='deals'>How It Works?</p>
                <div className='underline'></div>
            </div>

            <div className='hiw'>
                <div className='hiwItem'>
                    <img className='vector' src={vector} alt="" />
                    <div><img src={singupIcon} alt="img" /></div>
                    <p>Signup</p>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p>
                </div>
                <div className='hiwItem'>
                    <img className='vector' src={vector2} alt="" />

                    <div><img src={coupon} alt="img" />
                    </div>
                    <p>Choose Coupon</p>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p></div>
                <div className='hiwItem2'>

                    <div><img src={grabCoupon} alt="img" /></div>
                    <p>Grab Coupon</p>
                    <p>If you are going to use a passage of Lorem Ipsum, you need to be sure there</p></div>
            </div>
            <div className='mob'>
                <div className='mobItem1'>
                    <p>Want to be a part of our team</p>
                    <p>Be a part of best site of discount coupons</p>
                    <div className='dIcons'>

                        <div className='apple'><img src={appleLogo} alt="" />  Download From App Store</div>
                        <div className='apple'><img src={playLogo} alt="" />Download From Play Store</div>
                    </div>

                </div>
                <div className='mobItem2'>
                    <img src={phone1} alt="" />
                    <img src={phone2} alt="" />
                </div>

            </div>
            {/* <div className='pop'><img src={container} alt="" /></div> */}



            <div className='ctg'>
                <div><img src={image65} alt="" /></div>
                <div className='ctgIt'>
                    <p>Popular Categories</p>
                    <div className='ctgUn'></div>
                    <div className='ctgItems'>

                        {
                            ctg.map((e) => {
                                return (
                                    <>
                                        <div className='ctgItem'>
                                            {e}
                                        </div>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

            </div>

            <div className='footer'>
                <div className='item1'>

                    <div className='fLogo'><img src={fLogo} alt="" /></div>
                    <p>Lorem Ipsum is simply dummy of the printing and type setting.</p>

                    <div className='apple'><img src={appleLogo} alt="" />  Download From App Store</div>
                    <div className='apple'><img src={playLogo} alt="" />Download From Play Store</div>
                </div>

                <div className='fitem2'>
                    <div>Company</div>
                    <p><img src={arrow} alt="" />About Us</p>
                    <p><img src={arrow} alt="" />Privacy Policy</p>
                    <p><img src={arrow} alt="" />Terms</p>
                    <p><img src={arrow} alt="" />Blogs</p>
                    <p><img src={arrow} alt="" />Branding</p>
                    <p><img src={arrow} alt="" />Carrer</p>
                </div>
                <div className='fitem2'>
                    <div>GENERAL</div>
                    <p><img src={arrow} alt="" />Partner With us</p>
                    <p><img src={arrow} alt="" />Write to us</p>
                    <p><img src={arrow} alt="" />Mobile App</p>
                    <p><img src={arrow} alt="" />Site Map</p>
                </div>
                <div className='fitem2'>
                    <div>PAGES</div>
                    <p><img src={arrow} alt="" />Amazon Offer</p>
                    <p><img src={arrow} alt="" />Google Pay Offers</p>
                    <p><img src={arrow} alt="" />PayPal Offers</p>
                    <p><img src={arrow} alt="" />PhonePe Offers</p>
                    <p><img src={arrow} alt="" />Festival Offers</p>
                    <p><img src={arrow} alt="" />Bank Offers</p>
                </div>
                <div className='fitem2'>
                    <div>Company</div>
                    <p><img src={arrow} alt="" />City Offers</p>
                    <p><img src={arrow} alt="" />Brand Offers</p>
                    <p><img src={arrow} alt="" />Product Deals</p>
                    <p><img src={arrow} alt="" />Gift Cards</p>
                </div>
            </div>
        </>
    )
}

export default LandingPage