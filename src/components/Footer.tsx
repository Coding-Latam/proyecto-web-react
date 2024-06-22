import { Button } from "./Button";
import footerLogo from "../assets/images/logo/logo-light.svg";

export function Footer() {
  return (
    <footer>
      <div className="container footer-container">
        <h2>
          Join our community by using our services and grow your business.
        </h2>
        <Button content="Try it for free" href="/try" />
        <hr/>
     </div>
     <div className="container">    
        <div className="footer-info">
            <div className="footer-content">
            <div className="logo">
                <img src={footerLogo} alt="Footer-logo"/>
            </div>
            <div className="footer-rights">
            <p className="footer-p">© Sandbox.</p>
            <p className="footer-p">All rights reserved.</p>
          </div>
         </div>
         <div className="footer-content">
            <h4>Get in Touch</h4>
            <p className="footer-p">Moonshine St. 14/05 Light City, London,United Kingdom</p>
            <p className="footer-p">info@email.com 00 (123) 456 78 90</p>
         </div>
         <div className="footer-content">
            <h4>Learn More</h4>
            <ul className="footer-links">
                <li><a href="/" >About us</a></li>
                <li><a href="/" >Our Story</a></li>
                <li><a href="/" >Projects</a></li>
                <li><a href="/" >Terms of Use</a></li>
                <li><a href="/" >Privacy Policy</a></li>
            </ul>
         </div>
         <div className="footer-content">
            <h4>Our newsletter</h4>
            <p className="footer-p">Subscribe to our newsletter to get our news & deals delivered to you.</p>
            <form action="">
                <div className="newsletter">
                    <div className="input-email">
                        <input type="email" placeholder="Email Address" name ="email" className="footer-email"  autoComplete='off'/>
                    </div>
                    <div className="input-button">
                        <input type="submit" value="Join"  className="footer-join"/>
                    </div>
                </div>
            </form>
          </div>
        </div>
     </div>
 </footer>
  );
}
