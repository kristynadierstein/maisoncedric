import React from "react";
import { Link } from 'gatsby';

//import placeholder imagery
import Pic1 from '../../src/images/pic1.svg'
import Pic2 from '../../src/images/pic2.svg'

class NewsletterAd extends React.Component{
    constructor(props){
        super(props);
    }

    render (){
        return(
            <div className="newsletter-ad">
                <section className="newsletter-imgs">
                    < Pic2 className="newsletter-pic1"/>
                    < Pic1 className="newsletter-pic2"/>
                </section>
                <div className="newsletter-text-all">
                    <h1 className="newsletter-title">Be the first to know our new...</h1>
                    <p className="newsletter-body">
                    Cédric, Alice, Damien et Mustapha sommes
                    heureux de vous présenter notre sélection 
                    éclectique de pièces du XXe siècle.
                    </p>
                    <div className="newsletter-btns">   
                    <Link to="#">
                            <button className="btn-newsletter-subscribe">
                                Subscribe to our Newsletter
                            </button>
                        </Link>
                        <Link to="#">
                            <button className="btn-newsletter-instagram">
                                Follow us on Instagram
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            
        )
    }
}


export default NewsletterAd


