import React from "react";


const Footer  = () => {
  return(
    <React.Fragment>
      <section className="footer">
          <div className="footer-contact">
              <p id="footer-heading">Maison Cédric</p>
              <p id="footer-email">contact@maisoncedric</p>
              <p>+33 6 24 55 52 51</p>
          </div>
          <div className="footer-department">
              <p>75009 - Paris</p>
          </div>
      </section>
    </React.Fragment>
  )
}

export default Footer;
