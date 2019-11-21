// external librairies
import React from "react"
import { Link } from 'gatsby'

// import placeholder imagery
import Insta from '../../static/jpgs/img--ad--instagram.png'
import Mail from '../../static/jpgs/img--ad--mail.png'

class NewsletterAd extends React.Component{
  render (){
    return(
      <React.Fragment>
        <section className="newsletter-ad">
          <div className="newsletter-ad-container">
            <section className="newsletter-imgs">
             <img src={Mail} alt="mail" className="newsletter-pic1" />
             <img src={Insta} alt="insta" className="newsletter-pic2" />
            </section>
            <div className="newsletter-text-all">
              <h1 className="newsletter-title">
                Be the first to know our new...</h1>
              <p className="newsletter-body">
                Cédric, Alice, Damien et Mustapha sommes
                heureux de vous présenter notre sélection
                éclectique de pièces du XXe siècle.
              </p>
              <div className="newsletter-btns">
              <Link to="/">
                  <button className="btn-newsletter-subscribe">
                    Subscribe to our Newsletter
                  </button>
                </Link>
                <Link to="/">
                  <button className="btn-newsletter-instagram">
                    Follow us on Instagram
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    )
  }
}

export default NewsletterAd
