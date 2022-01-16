import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { ReactSVG } from 'react-svg';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  function handleOpenNavBar() {
    setIsNavbarOpen(!isNavbarOpen);
  }

  return (
    <div className="App">
      <header>
        <nav className={!isNavbarOpen ? 'hidden': ''}>
          <div className='barbutton d-block d-md-none' onClick={handleOpenNavBar}>
            <i className='fa fa-bars'></i>
          </div>
          <div className='container-lg'>
            <a className='brand' href='http://localhost:3000'>Healthy Food</a>
            <ul>
              <a href='/'>
                <li>
                  Healthy Recipes
                </li>
              </a>
              <a href='/'>
                <li>
                  Blog
                </li>
              </a>
              <a href='/'>
                <li>
                  Join
                </li>
              </a>
              <a className='auth-btn' href='/cadastro'>
                <li>
                  Register
                </li>
              </a>
            </ul>
          </div>
        </nav>
        <div className='container-xxl'>
          <div className='presentation'>
            <div className='col-12 col-lg-6'>
              <div className='search-content'>
                <h1>
                  Ready for <br />
                  Trying a new <br />
                  recipe?
                </h1>

                <div className='search-container'>
                  <input placeholder='Search healthy recipes' />
                  <button type='submit'>
                    <i className='fa fa-search'></i>
                  </button>
                </div>
              </div>
            </div>
            <div className='col-4 col-lg-6 d-none d-xl-block'>
              <ReactSVG src={'/images/illustration.svg'} />
            </div>
          </div>
        </div>
            <div className='background-image d-block d-xl-none'>
              <ReactSVG src={'/images/illustration.svg'} />
            </div>
      </header>

      <div className='best-recipes'>
        <div className='container-xxl'>
          <h3 className='title'>Our Best Recipes</h3>
          <p>Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts.</p>

          <div className='col-12'>
            <div className='row'>
              <div className='col-12 col-lg-6'>
                <div className='recipe-card'>
                  <ReactSVG src='/images/comida_1.svg' />
                  <div className='more'>
                    <h3>Broccoli Salad with Bacon</h3>
                    <a href='/'>See Recipe</a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='recipe-card'>
                  <ReactSVG src='/images/comida_2.svg' />
                  <div className='more'>
                    <h3>Classic Beef Burgers</h3>
                    <a href='/'>See Recipe</a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='recipe-card'>
                  <ReactSVG src='/images/comida_3.svg' />
                  <div className='more'>
                    <h3>Classic Potato Salad</h3>
                    <a href='/'>See Recipe</a>
                  </div>
                </div>
              </div>
              <div className='col-12 col-lg-6'>
                <div className='recipe-card'>
                  <ReactSVG src='/images/comida_4.svg' />
                  <div className='more'>
                    <h3>Cherry Cobbler on the Grill</h3>
                    <a href='/'>See Recipe</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='services-container'>
        <div className='container-xxl'>
          <div className='row'>
            <div className='d-none d-lg-block col-6'>
              <ReactSVG src='/images/bloco_services.svg' />
            </div>
            <div className='col-12 col-lg-6'>
              <div className='content'>
                <h3>The best services ready <br />To serve you</h3>
                <br />
                <p>
                  Far far away, behind the word mountains, far from <br/>
                  the countries Vokalia and Consonantia, there live the<br/>
                  blind texts.
                </p>
                <br/>
                <p>
                  Separated they live in Bookmarksgrove right at the<br/>
                  coast of Semantics, a large language ocean.
                </p>
                <br/>
                <p>
                  A samll river named Duden flows by ther place and<br/>
                  supplies it with the necessary regelialia.
                </p>

                <button className='btn-know-more'>Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='our-blog-container'>
        <div className='container-xxl'>
          <h3 className='title'>Read Our Blog</h3>
          <p>Far far away, behind the word mountains, far from the countries <br />Vokalia and Consonantia, there live the blind texts.</p>
          <br/>
          <div className='cards-container'>
            <div className='keep-scrolling'>
              <i className='fa fa-arrow-right'></i>
            </div>
            <div className='blog-card'>
              <ReactSVG src='/images/blog_image_1.svg' />
              <div className='info'>
                <h4>Quick-start guide to nuts and seeds</h4>
                
                <div className='autor'>
                  <img src='/images/user.png' className='profile-picture' alt='profile' />
                  <p>Kevin Ibrahim</p>
                </div>
              </div>
            </div>
            <div className='blog-card'>
              <ReactSVG src='/images/bloco_image_2.svg' />
              <div className='info'>
                <h4>Nutrition: Tips for Improving Your Health</h4>
                
                <div className='autor'>
                  <img src='/images/user.png' className='profile-picture' alt='profile' />
                  <p>Mike Jackson</p>
                </div>
              </div>
            </div>
            <div className='blog-card'>
              <ReactSVG src='/images/bloco_image_3.svg' />
              <div className='info'>
                <h4>The top 10 benefits of eating helthy</h4>
                
                <div className='autor'>
                  <img src='/images/user.png' className='profile-picture' alt='profile' />
                  <p>Bryan McGregor</p>
                </div>
              </div>
            </div>
            <div className='blog-card'>
              <ReactSVG src='/images/bloco_image_4.svg' />
              <div className='info'>
                <h4>What not to eat for a Healthy life</h4>
                
                <div className='autor'>
                  <img src='/images/user.png' className='profile-picture' alt='profile' />
                  <p>Jash</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container-xxl'>
        <div className='join-us-container'>
          <div className='join-us-content'>
            <h1>
              Join our membership<br />
              to get special offer
            </h1>

            <div className='join-us-search-container'>
              <input placeholder='Enter your email address' />
              <button type='submit'>
                Join
              </button>
            </div>
          </div>
          
          <div className='background-image'>
            <ReactSVG src='/images/bloco_final_image.svg' />
          </div>
        </div>
      </div>

      <footer>
        <div className='container-xxl'>
          <div className='footer-content'>
            <p>© Copyrights 2019 Stack. All Rights Reserved.</p>
            <ul>
              <a href='/'>Privacy Policy</a>
              <a href='/'>Terms and Conditions</a>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
