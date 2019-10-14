import React from 'react';
import Menu from './menus'

export default () => (
  <div className="App Site">
    <section className="has-background-black">
      <div className="container">
        <h2 className="is-size-6-mobile is-size-4-desktop has-text-white">
          <p>
            ORDER NOW! TEL: 512-444-0077
          </p>

        </h2>
      </div>
    </section>
    <main className="Site-content">
      <section className="hero has-background-white">
        <div className="hero-body">
          <div className="container">

            <nav className="breadcrumb is-centered" >
              <ul className="title is-size-1 is-family-secondary">
                <li><a href="#" aria-current="page" className="is-link">Home</a></li>
                <li><a href="#menu" className="is-link">Menu</a></li>
                <li><a href="#contact" className="is-link">Contact</a></li>
              </ul>
            </nav>
            <h2 className="is-size-5 has-text-weight-bold">
              **DINE IN AND TAKE OUT**
            </h2>
            <hr />
            <figure className="image">
              <img src="/img/logo.gif" alt="1stwok logo" />
            </figure>

            <hr />
            <div>
              <h2 className="is-size-2 has-text-weight-bold is-family-secondary"><a id="menu" >Menu</a></h2>
              <Menu />
              <div className='is-italic' style={{margin:"20px 0"}}>
                <div> All entrees served with the white rice only. </div>
                <div> A 15% gratuity will be added to parties of 5 or more. </div>
                <br />
                <div> <span style={{ color: "red" }}>* </span> Hot and Spicy </div>
              </div>

            </div>

            <hr />
          </div>
          <div className="container">
            <h2 className="is-size-2 has-text-weight-bold is-family-secondary" style={{ margin: '20px' }}><a id="contact">Contact</a></h2>
            <div className="columns">
              <div className="column" style={{ width: '800px', height: '600px' }}>
                <h2 className="is-size-4 has-text-weight-bold">Address: </h2>
                <p>603 W. Stassney Lane
              Austin, TX 78745</p>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3448.0228602618067!2d-97.78316468486206!3d30.20789498182318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b4abca6dd1f7%3A0xc2640c2465312402!2s1st%20Wok!5e0!3m2!1sen!2sus!4v1570034810315!5m2!1sen!2sus" width="600" height="450" frameborder="0" style={{ border: 0 }} allowfullscreen=""></iframe>
              </div>
              <div className="column is-one-third-desktop is-full-mobile" style={{ margin: "50px", padding: '15px', border: 'solid 1px black', }}>
                <div>
                  <h2>	Business Hours	</h2>
                  <br />

                  <p>	Mon - Thur:	</p>
                  <p>11:00am-3:00pm</p>
                  <p>4:30pm-9:30pm</p>

                  <p>	Fri - Sat: 	</p>
                  <p> 11am-9:30pm </p>

                  <p>	Sun:	</p>
                  <p> Noon-9:30pm </p>
                  <br />

                  <p style={{ color: "red" }}>	ORDER NOW!	</p>

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
            <li><a href="#" aria-current="page">Home</a></li>
            <li><a href="#menu">Menu</a></li>
            <li><a href="#contact">Contact</a></li>
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