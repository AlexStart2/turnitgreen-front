import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import styles from '@/styles/CSRD-Calculator.module.css';
import back from '@/public/icons8-меньше-чем-50.png'
import Image from 'next/image';


var order = [];

export function CSRDcalculator() {

    const [NumberQuestion, setNumberQuestion] = useState(1);
    const [displayBackButton,setDisplayBackButton]=useState(false);
    const [displayRetryButton,setDisplayRetryButton]=useState(false);
    const [answer,setAnswer]=useState(0);

    function ShowAnswer(e) {
        setAnswer(e);
        setDisplayBackButton(false);
        setDisplayRetryButton(true);
    }

    function nextQuestion(e, answerValue) {
        if (e === 1) {
            order.push(1);
            if (answerValue === 'Yes') {
                setNumberQuestion(2);
            } else {
                setNumberQuestion(3);
            }
            setDisplayBackButton(true);
        } else if (e === 2) {
            order.push(2);
            if (answerValue === 'Yes') {
                setNumberQuestion(0);
                ShowAnswer(1);
            } else {
                setNumberQuestion(4);
            }
        } else if (e === 3) {
            order.push(3);
            setNumberQuestion(0);
            if (answerValue === 'Yes') {
                ShowAnswer(2);
            } else {
                ShowAnswer(3);
            }
        } else if (e === 4) {
            order.push(4);
            if (answerValue === 'Yes') {
                setNumberQuestion(0);
                ShowAnswer(4);
            } else {
                setNumberQuestion(5);
            }
        } else if (e === 5) {
            order.push(5);
            if (answerValue === 'Yes') {
                setNumberQuestion(0);
                ShowAnswer(5);
            } else {
                setNumberQuestion(6);
            }
        } else if (e === 6) {
            order.push(6);
            setNumberQuestion(0);
            if (answerValue === 'Yes') {
                ShowAnswer(6);
            } else {
                ShowAnswer(7);
            }
        }
    }

    function previosQuestion() {
        var n = order.pop();
        setNumberQuestion(n);
        if (n === 1) {
            setDisplayBackButton(false);
        }
    }

    function retryButton() {
        setNumberQuestion(1);
        order = [];
        setAnswer(0);
        setDisplayRetryButton(false);
    }

    return (
        <>
            <div className={styles.CSRD_CalculatorRelativ}>
                <div className={styles.CSRD_Form}>
                    {NumberQuestion === 1 ? <div id='Q1' className={styles.question_active}>
                        <p>Is your company's parent/headquarter located in the EU?
                        </p>
                    </div> : NumberQuestion === 2 ? <div id='Q2' className={styles.question_active}>
                        <p>Is your company a public-interest entity with over 500 employees
                            and already subject to the non-financial reporting directive?
                        </p>
                    </div> : NumberQuestion === 3 ? <div id='Q3' className={styles.question_active}>
                        <p>	Does your company have more than €150 million in global turnover?
                        </p>
                    </div> : NumberQuestion === 4 ? <div id='Q4' className={styles.question_active}>
                        <p>Is your company a Large undertaking? Does your company
                            exceed two out of 3 following criteria: more than 250
                            employees and/or €40 million in turnover and/or €20
                            million in total assets?
                        </p>
                    </div> : NumberQuestion === 5 ? <div id='Q5' className={styles.question_active}>
                        <p>Is your company an SME undertaking? Does your company
                            exceed the following criteria: - more than 10
                            employees - €2 million in turnover or €2 million in total assets?
                        </p>
                    </div> : NumberQuestion === 6 ? <div id='Q6' className={styles.question_active}>
                        <p>Is your company a Micro undertaking? Does your company
                            exceed two out of 3 following criteria: - more than
                            10 employees and/or €700,000 in turnover and/or €350,000 in total assets?
                        </p>
                    </div> : <></>}

                </div>


                <div className='AnswersBlock'>
                    {answer===1?<div id='ans1' className={styles.answer}>Your company should report
                        under CSRD/ESRS starting
                        with 2025 for the reporting
                        year 2024.</div>:answer===2?<div id='ans2' className={styles.answer}>Your company should report
                        under CSRD/ESRS starting
                        with 2029 for the reporting
                        year 2028.</div>:answer===3?<div id='ans3' className={styles.answer}>Your company does not fall under
                        CSRD/ESRS reporting scope.</div>:answer===4?<div id='ans4' className={styles.answer}>Your company should report
                        under CSRD/ESRS starting
                        with 2026 for the reporting
                        year 2025.</div>:answer===5?<div id='ans5' className={styles.answer}>Your company should report
                        under CSRD/ESRS starting
                        with 2027 for the reporting
                        year 2026.<br />But it has also an
                        opt-out option of two years.</div>:answer===6?<div id='ans6' className={styles.answer}>
                        Your company should report
                        under CSRD/ESRS starting
                        with 2027 for the reporting
                        year 2026.<br />But it has also an
                        opt-out option of two years.
                    </div>:answer===7?<div id='ans7' className={styles.answer}>
                        Your company does not fall under
                        CSRD/ESRS reporting scope.
                    </div>:<></>}
            
                </div>



                <div className={styles.buttonsBlock}>
                    {displayBackButton===true?<button id='buttonBack' className={styles.buttonBack} onClick={() => { previosQuestion() }}><Image src={back} alt='back' className={styles.back} /></button>:<></>}
                    {answer===0?<button id='answerYes' className={styles.answerButton} onClick={() => { nextQuestion(NumberQuestion, 'Yes') }}>Yes</button>:<></>}
                    {answer===0?<button id='answerNo' className={styles.answerButton} onClick={() => { nextQuestion(NumberQuestion, 'No') }}>No</button>:<></>}
                    {displayRetryButton===true?<button id='retryButton' className={styles.retryButton} onClick={() => { retryButton() }}>Retry</button>:<></>}
                </div>
                
            </div>
        </>
    );
}
