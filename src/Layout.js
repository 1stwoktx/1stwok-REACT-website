import React from 'react';
import Menu from './menus'

export default () => (
  <div className="App Site">
    <section className="has-background-black">
      <div className="container">
        <h2 className="is-size-6-mobile is-size-4-desktop has-text-white">
          <span>
            603 W Stassney Ln
          </span>

        </h2>
      </div>
    </section>
    <main className="Site-content">
      <section className="hero has-background-white">
        <div className="hero-body">
          <div className="container">
            <figure className="image">
              <img src="/img/logo.gif" alt="1stwok logo" />
            </figure>
            <h1 className="is-size-4 has-text-weight-bold">
              ORDER NOW! TEL: 512-444-0077
              </h1>
            <hr />
            <nav className="breadcrumb is-centered" >
              <ul className="title is-size-1 is-family-secondary">
                <li><a href="#" aria-current="page" className="is-link">Home</a></li>
                <li><a href="#menu" className="is-link">Menu</a></li>
                <li><a href="#contact" className="is-link">Contact</a></li>
                {/* <li><button className="is-primary">Contact</button></li> */}
              </ul>
            </nav>

            <h2 className="is-size-5 has-text-weight-bold">
              **DINE IN AND TAKE OUT**
              </h2>
            <hr />
            <div>
              <h2 className="is-size-2 has-text-weight-bold is-family-secondary"><a id="menu" >Menu</a></h2>
              <Menu />
            </div>


          </div>
          <div className="container">
            <h2 className="is-size-2 has-text-weight-bold is-family-secondary" style={{ margin: '20px' }}><a id="contact">Contact</a></h2>
            <div className="columns">
              <div className="column is-two-thirds-desktop" style={{width: '800px', height: '600px' }}>
                <h2 className="is-size-4 has-text-weight-bold">Address: </h2>
                <p>603 W. Stassney Lane
              Austin, TX 78745</p>
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.022860261808!2d-97.78316468488106!3d30.207894981823145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4abca6dd1f7%3A0xc2640c2465312402!2s1st%20Wok!5e0!3m2!1sen!2sus!4v1570029273691!5m2!1sen!2sus" width="800px" height="600px" style={{ border: 0 }} frameborder="0" allowfullscreen=""></iframe> */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.0228602618067!2d-97.78316468486206!3d30.20789498182318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4abca6dd1f7%3A0xc2640c2465312402!2s1st%20Wok!5e0!3m2!1sen!2sus!4v1570034810315!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
              </div>
              <div className="column" style={{ margin:"50px", padding: '5px', border: 'solid 1px black' }}>
                <div>
                  <h2>	Business Hours	</h2>

                  <p>	Mon - Thur: 11:00am-3:00pm 4:30pm-9:30pm	</p>

                  <p>	Fri - Sat: 11am-9:30pm	</p>

                  <p>	Sun: Noon-9:30pm	</p>

                  <p>	ORDER NOW!	</p>
                  <p>		</p>
                  <p>	TEL: 512-444-0077	</p>

                  <p>	Fax: 512-444-1528	</p>

                </div>
              </div>
            </div>



          </div>
        </div>
      </section>
    </main>



    <footer className="footer has-background-black">
      <div className="container">
        <nav className="breadcrumb is-centered" aria-label="breadcrumbs">
          <ul className="is-size-4 is-light">
            <li className="is-active"><a href="#" aria-current="page">Home</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <div className="patent">
          <p className="is-size-6 has-text-white">
            copyright©1stWok 2019
            </p>
        </div>

      </div>
    </footer>


  </div>
)