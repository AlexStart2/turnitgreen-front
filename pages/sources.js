import styles from '@/styles/sources.module.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Link from 'next/link';




function Sources() {

  return (
    <>

      <div className={styles.T_Sources}>
        <p className={styles.Text_Sources}>Sources:</p>
      </div>

      <div className={styles.Sources}>
        <div className={styles.Source_Container}>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.ecb.europa.eu/home/html/index.en.html'}>European Central Bank</Link>
          <Link  className={styles.Source_name} target='_blank'  href={'https://www.fmsg.at/en/'}>FMSG</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.eba.europa.eu/'}>European Banking Authority</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.fma.gv.at/'}>FMA</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.bankingsupervision.europa.eu/home/html/index.en.html'}>ECB Banking Supervision - SSM</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.eib.org/en/index.htm'}>European Investment Bank</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.esma.europa.eu/'}>ESMA</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.efrag.org/'}>EFRAG</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.bis.org/'}>Bank for International Settlements</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.suerf.org/'}>SUERF</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.esrb.europa.eu/home/html/index.en.html'}>European Systemic Risk Board</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.europarl.europa.eu/portal/en'}>European Parliament</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://commission.europa.eu/index_en'}>European Commission</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://eur-lex.europa.eu/'}>EUR-LEX</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.fsb.org/'}>Financial Stability Board</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.srb.europa.eu/en'}>Single Resolution Board</Link>
          <Link  className={styles.Source_name} target='_blank' href={'https://www.oesterreich.gv.at/'}>oesterreich.gv.at</Link>
        </div>
      </div>
    </>
  );
}

export default Sources;
