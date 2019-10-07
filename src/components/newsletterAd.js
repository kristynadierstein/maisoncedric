import React from "react";

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
                < Pic2 />
                < Pic1 />
                <div className="newsletter-text-all">
                    <h1 className="newsletter-title">Be the first to know our new...</h1>
                    <p className="newsletter-body">
                    Cédric, Alice, Damien et Mustapha sommes
                    heureux de vous présenter notre sélection 
                    éclectique de pièces du XXe siècle.
                    </p>
                 <div className="newsletter-btns">   
                    <button className="btn-newsletter-subscribe">Subscribe to our Newsletter</button>
                    <button className="btn-newsletter-instagram">Follow us on Instagram</button>
                </div>
                </div>
            </div>
            
        )
    }
}


export default NewsletterAd


