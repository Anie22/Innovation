import { useState, useEffect } from 'react'
import Peter from './assets/unsplash.png'
import FirstWorker from './assets/Web Const Worker.jpg'
import SecondWorker from './assets/Web Const Worker1.jpg'
import ThirdWorker from './assets/Web Const Worker2.jpg'
import FourthWorker from './assets/Web Const Worker3.jpg'
import roadConstruct from './assets/WebImage.jpg'
import Facebook from './assets/Facebook.jpg'
import Instagram from './assets/Vector.jpg'
import Linkedin from './assets/Linkedin.jpg'
import Twitter from './assets/Twitter.jpg'
import Pinterest from './assets/Pinterest.jpg'
import Construct from './assets/ConstructConnect - png.jpg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)
  const toggleNav = () => {
    setToggleMenu(!toggleMenu)
  }
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener('resize', changeWidth)

    return () => {
        window.removeEventListener('resize', changeWidth)
    }

  }, [])

  return (
    <div className="w-100">
      <section className="home">
        <div className="lg:bg-blue-950/75 h-full w-100 flex flex-col gap-8 sm-color md:bg-purple-950/75">
          <div className="nav-holder">
            <nav className="flex justify-between text-white p-8 items-center">
              <div className="logo">I<sub>Novate</sub></div>
              <div className="nav-content flex items-center gap-5">
                <div onClick={toggleNav} className="hamburger">
                  <div className="tweet">
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                  </div>
                </div>
                {(toggleMenu || screenWidth > 600) && (
                  <div onClick={toggleNav} className="nav-tweet-holder nav-fixed">
                    <div className="sub-nav-tweet">
                      <ul className='flex gap-5'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Project</li>
                        <li>Blog</li>
                        <li>Contact</li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </nav>
          </div>
          <div className="home-content px-8 flex items-center justify-between">
            <div className="content-1">
              <div className="text-white flex flex-col gap-5">
                <h3 className='text'>Innovation</h3>
                <div className="group">
                  <div className="border-width"></div>
                  <p>Constructure</p>
                </div>
              </div>
              <div className="text-white">
                <p className='paragraph'>Hi, I am Peter, a constructor at Phlox Group Construction Company in China. I am an enthusiatic worker with 5 years experience in Civil Engineering.</p>
              </div>
              <div className="flex items-center justify-center bg-yellow-400 text-center h-10 w-40 rounded-full">
                <button>Read More</button>
              </div>
            </div>
            <div className="content-2">
              <div className="eclispe rounded-full bg-yellow-600/75  "></div>
              <img src={Peter} alt="" className="img-con" />
            </div>
          </div>
        </div>
      </section>
      <section className="about p-12 flex">
        <div className="about-img">
          <div className="first-img-holder">
            <div className="first">
              <div className="img-color"></div>
            </div>
          </div>
          <div className="second-img">
            <img src={roadConstruct} alt="" />
          </div>
        </div>
        <div className="about-text">
          <div className="title">
            <div className="border"></div>
            <h1>About Phlox Group</h1>
          </div>
          <div className="sub-title">
            <p>We are the leaders in construction</p>
          </div>
          <div className="about-paragraph">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum accusamus et iusto, laboriosam, vitae nobis eligendi cumque labore aliquam soluta cum dolores pariatur, distinctio quam harum cupiditate sed debitis possimus!</p>
          </div>
          <div className="sub-about-paragraph">
            <div className="inner-about">
              <div className="sub-abt"></div>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore est sunt tempore earum facilis quam veniam fuga corporis. Omnis, perferendis eos voluptate saepe minus cumque. Perferendis, accusamus. Repellendus, doloremque tempora.</p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-yellow-400 text-center h-10 w-40 rounded-full">
            <button>Learn More</button>
          </div>
        </div>
      </section>
      <section className="meet px-12">
        <div className="meet-header">
          <div className="meet-text">
            <div className="meet-border"></div>
            <p>Our Team</p>
          </div>
          <div className="meet-heading">
            <p>Meet With Phlox Team Members</p>
          </div>
        </div>
        <div className="meet-img">
          <div className="m-images">
            <img src={FirstWorker} alt="" />
            <div className="meet-text-holder">
              <div className="m-text">
                <h4>Founder And Thinker</h4>
                <p>Jane Mane</p>
              </div>
              <div className="m-icons-holder">
                <div className="m-border"></div>
                <div className="m-icons">
                  <div className="facebook">
                    <img src={Facebook} alt="" />
                  </div>
                  <div className="instagram">
                    <img src={Instagram} alt="" />
                  </div>
                  <div className="twitter">
                    <img src={Twitter} alt="" />
                  </div>
                  <div className="pinterest">
                    <img src={Pinterest} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-images">
            <img src={SecondWorker} alt="" />
            <div className="meet-text-holder">
              <div className="m-text">
                <h4>Founder And Thinker</h4>
                <p>Jane Mane</p>
              </div>
              <div className="m-icons-holder">
                <div className="m-border"></div>
                <div className="m-icons">
                  <div className="facebook">
                    <img src={Facebook} alt="" />
                  </div>
                  <div className="instagram">
                    <img src={Instagram} alt="" />
                  </div>
                  <div className="twitter">
                    <img src={Twitter} alt="" />
                  </div>
                  <div className="pinterest">
                    <img src={Pinterest} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-images">
            <img src={ThirdWorker} alt="" />
            <div className="meet-text-holder">
              <div className="m-text">
                <h4>Founder And Thinker</h4>
                <p>Jane Mane</p>
              </div>
              <div className="m-icons-holder">
                <div className="m-border"></div>
                <div className="m-icons">
                  <div className="facebook">
                    <img src={Facebook} alt="" />
                  </div>
                  <div className="instagram">
                    <img src={Instagram} alt="" />
                  </div>
                  <div className="twitter">
                    <img src={Twitter} alt="" />
                  </div>
                  <div className="pinterest">
                    <img src={Pinterest} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="m-images display m-m">
            <img src={FourthWorker} alt="" />
            <div className="meet-text-holder">
              <div className="m-text">
                <h4>Founder And Thinker</h4>
                <p>Jane Mane</p>
              </div>
              <div className="m-icons-holder">
                <div className="m-border"></div>
                <div className="m-icons">
                  <div className="facebook">
                    <img src={Facebook} alt="" />
                  </div>
                  <div className="instagram">
                    <img src={Instagram} alt="" />
                  </div>
                  <div className="twitter">
                    <img src={Twitter} alt="" />
                  </div>
                  <div className="pinterest">
                    <img src={Pinterest} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="footer p-12">
        <footer>
          <div className="footer-content">
            <div className="f-content-1">
              <div className="f-img-text">
                <img src={Construct} alt="construct" />
                <div className="f-text">
                  <h1>Constructure</h1>
                  <p>Phlox Group</p>
                </div>
              </div>
              <div className="f-sm-text">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna.</p>
              </div>
              <div className="f-icons">
                <div className="facebook">
                  <img src={Facebook} alt="" />
                </div>
                <div className="twitter">
                  <img src={Twitter} alt="" />
                </div>
                <div className="linkedin">
                  <img src={Linkedin} alt="" />
                </div>
                <div className="instagram">
                  <img src={Instagram} alt="" />
                </div>
              </div>
            </div>
            <div className="f-content-2">
              <div className="f-con-text">
                <div className="f-border"></div>
                <div className="f2-text">
                  <h1>Useful Links</h1>
                </div>
              </div>
              <div className="f-con-sm-text">
                <div className="f-con-1">
                  <div className="c-border"></div>
                  <p>Lorem ipsum dolor sit Ipsum dolor sit.</p>
                </div>
                <div className="f-con-1">
                  <div className="c-border"></div>
                  <p>Lorem ipsum dolor sit consectetur sit dolor.</p>
                </div>
                <div className="f-con-1">
                  <div className="c-border"></div>
                  <p>Lorem ipsum dolor sit amet sit dolor ipsum.</p>
                </div>
                <div className="f-con-1">
                  <div className="c-border"></div>
                  <p>Lorem ipsum dolor sit ipsum dolor Lorem.</p>
                </div>
              </div>
            </div>
            <div className="f-content-3">
              <div className="f-con-text">
                <div className="f-border"></div>
                <div className="f2-text">
                  <h1>Contact Us</h1>
                </div>
              </div>
              <div className="f-con-sm-text">
                <div className="f-con-1">
                  <div className="c-border"></div>
                  <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut.</p>
                </div>
                <div className="f-con-1">
                  <div className="c-border"></div>
                  <p>Lorem ipsum dolor.</p>
                </div>
                <div className="f-con-1">
                  <div className="c-border"></div>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                </div>
              </div>
            </div>
            <div className="f-content-4">
              <div className="f-con-text">
                <div className="f-border"></div>
                <div className="f2-text">
                  <h1>Newsletter</h1>
                </div>
              </div>
              <div className="f-sm-text">
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit.</p>
              </div>
              <div className="f-e-input">
                <input type="text" placeholder='Your email address' />
                <button type="submit"></button>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </div>
  )
}

export default App
