import React from 'react';
import "../css/footer.css"
import fb from "../images/fb.webp"
import insta from "../images/insta.webp"
import maneIcon from "../images/maneIcon.webp"
import sustainableSalon from "../images/SustainableSalonsLogo.webp"

const Footer = () => {
    return (
        <div className='footer'>

            <div className='ms_footer_links'>
                <section>
                    <img src={maneIcon}></img>   
                    </section>    
                <section>   
                     <h4>Opening Hours(by appoinment)</h4>
                     <p>Mon &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;9am - 3pm <br/>
                     Tues &nbsp; &nbsp; &nbsp; &nbsp; 9am - 3pm <br/>
                     Wed &nbsp; &nbsp; &nbsp; &nbsp;  9am - 3pm <br/>
                     Thrus&nbsp; &nbsp; &nbsp; &nbsp;9am - 7pm <br />
                     Fri &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;9am - 7pm <br/>
                     Sat &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; 9am - 3pm <br/>
                     Sun closed  </p>
                    </section>  
                               
                       <section >
                       <h4 style={{textDecoration:"underline"}}>(07) 5659 1905 </h4>
                       <p>6 / 5-7 Tallebudgera Creek Road,<br/> Burleigh, Queensland</p>
                       <section className='socialMedia'>
                    <img src={fb}></img>
                    <img src={insta}></img>
                 </section>
                       </section>
            
                </div>


                <div className='ms_footer_below'>
                    <img src={sustainableSalon} alt="" />
                    <div className='ms_footer_copyright'>
                        <p>@{new Date().getFullYear()} Mane Ethical Hardressing</p>
                        <section className='ms_footer_copyright'>
                        <p style={{paddingLeft:'50px'}} >Branding + website by </p>
                        <p style={{textDecoration:"underline"}}>&nbsp;Lumo Design Studio</p>
                    </section>
                    </div>
                    
                </div>
         

        </div>
    )
}

export default Footer;