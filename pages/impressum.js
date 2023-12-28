import styles from '@/styles/impressum.module.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';





function Impressum() {


    return (
        <>

            <div className={styles.disclaimer_box}>
                <h2>Impressum</h2>
                <div className={styles.disclaimer_content}>
                    Offenlegung gemäß § 25 Mediengesetz (MedienG)<br />
                    Medieninhaber und Herausgeber (Publisher and Editor):<br />
                    Turn It Green<br />
                    Vienna, Austria<br />
                    office(at)turnitgreen.eu<br /><br />

                    Unternehmensgegenstand (Business Purpose, if applicable): Information on ESG Regulations and
                    Related Services.<br /><br />

                    [Reference any applicable professional regulations, if applicable. Example: &quot;Rechtsanwaltsordnung
                    (RAO) - www.ris.bka.gv.at.&quot;]<br /><br />

                    <strong>Haftungsausschluss</strong> (Disclaimer):<br />
                    This website provides information on ESG (Environmental, Social, and Governance) regulations and
                    related topics. While we strive to provide accurate and up-to-date information, we do not guarantee
                    the accuracy, completeness, or reliability of the content. The information provided on this website
                    should not be considered a substitute for professional advice. We do not assume any liability for the
                    use or interpretation of the content.<br /><br />

                    <strong>Copyright (Urheberrecht):</strong><br />
                    All content on this website, including text, images, and other materials, is protected by copyright and
                    may not be reproduced or distributed without prior written permission.<br /><br />

                    <strong>Datenschutz (Privacy):</strong><br />
                    Information about how we collect, use, and protect your personal data can be found in our Privacy
                    Policy.<br /><br />

                    <strong>Änderungen (Changes):</strong><br />
                    We may update this Impressum from time to time to reflect changes in our practices or legal
                    requirements. We encourage you to review this Impressum periodically to stay informed about our
                    policies.<br /><br />

                    <strong>Kontakt (Contact):</strong><br />
                    If you have any questions or concerns about this Impressum or any other aspect of our website,
                    please contact us at office(at)turnitgreen.eu.
                </div>
            </div>
        </>
    );
}

export default Impressum;
