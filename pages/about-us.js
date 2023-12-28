import styles from '@/styles/about-us.module.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import AboutUsImage from '@/public/Get in contact.png';
import Image from 'next/image';



function AboutUs() {


    return (
        <>

            <div className={styles.StartPage}>
                <Image src={AboutUsImage} className={styles.AboutUsImage} alt='AboutUs' />
            </div>

            <div className={styles.AboutUs}>

                <div className={styles.AboutUsText}>
                    <h2 className={styles.About_Us}>About Us</h2>
                    <hr className={styles.HR_AboutUs} />
                    We are a dedicated team of ESG (Environmental, Social, and Governance) experts with a shared
                    passion for sustainability and a profound commitment to making a positive impact on the business landscape.
                    <br /><br />
                    <strong>Our Mission</strong><br />
                    At our core, we are driven by a singular mission: to empower businesses to transition towards a
                    more sustainable and environmentally responsible future. We understand that the pursuit of profits and the
                    preservation of our planet are not mutually exclusive goals. In fact, we firmly believe that they are intrinsically
                    connected, and it is our duty to help businesses recognize and embrace this connection.
                    <br /><br />
                    <strong>Join Us on the Sustainability Journey</strong><br />
                    The transition to a more sustainable world is an ongoing and collective effort. We invite you
                    to join us on this journey towards a brighter, cleaner, and more responsible future.
                    Let's work together to ensure that your business thrives while making a positive impact on our planet.
                    <br /><br />
                    <strong>Together, we can create a world we're proud to pass on to future generations.</strong>
                </div>

                <div className={styles.contact_Info}>
                    <p className={styles.WriteEmail}>Write us an Email</p>
                    <hr className={styles.HR_AboutUs_contact} />
                    <p className={styles.ResponseInOneDay}>We normally respond within one working day</p>
                    <p className={styles.email}>Email: office@turnitgreen.eu</p>
                </div>
            </div>

        </>
    );
}

export default AboutUs;
