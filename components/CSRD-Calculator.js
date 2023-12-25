import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './CSRD-Calculator.css';
import back from '../Images/icons8-меньше-чем-50.png';
import Image from 'next/image';


var order = [];

export function CSRDcalculator() {

    const [NumberQuestion, setNumberQuestion] = useState(1);

    function ShowAnswer(e) {
        document.getElementById(`ans${e}`).classList.add('active');
        document.getElementById(`buttonBack`).classList.remove('active');
        document.getElementById('answerYes').classList.add('hidden');
        document.getElementById('answerNo').classList.add('hidden');
        document.getElementById('retryButton').classList.add('active');
    }

    function nextQuestion(e, answerValue) {
        if (e === 1) {
            order.push(1);
            if (answerValue === 'Yes') {
                setNumberQuestion(2);
            } else {
                setNumberQuestion(3);
            }
            document.getElementById(`buttonBack`).classList.add('active');
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
            document.getElementById(`buttonBack`).classList.remove('active');
        }
    }

    function retryButton() {
        setNumberQuestion(1);
        order = [];
        document.getElementById('answerYes').classList.remove('hidden');
        document.getElementById('answerNo').classList.remove('hidden');
        document.getElementById('retryButton').classList.remove('active');
        const a = document.getElementsByClassName('answer active');
        a[0].classList.remove('active');
    }

    return (
        <>
            <div className='CSRD-CalculatorRelativ'>
                <div className='CSRD-Form'>
                    {NumberQuestion === 1 ? <div id='Q1' className='question active'>
                        <p>Is your company's parent/headquarter located in the EU?
                        </p>
                    </div> : NumberQuestion === 2 ? <div id='Q2' className='question active'>
                        <p>Is your company a public-interest entity with over 500 employees
                            and already subject to the non-financial reporting directive?
                        </p>
                    </div> : NumberQuestion === 3 ? <div id='Q3' className='question active'>
                        <p>	Does your company have more than €150 million in global turnover?
                        </p>
                    </div> : NumberQuestion === 4 ? <div id='Q4' className='question active'>
                        <p>Is your company a Large undertaking? Does your company
                            exceed two out of 3 following criteria: more than 250
                            employees and/or €40 million in turnover and/or €20
                            million in total assets?
                        </p>
                    </div> : NumberQuestion === 5 ? <div id='Q5' className='question active'>
                        <p>Is your company an SME undertaking? Does your company
                            exceed the following criteria: - more than 10
                            employees - €2 million in turnover or €2 million in total assets?
                        </p>
                    </div> : NumberQuestion === 6 ? <div id='Q6' className='question active'>
                        <p>Is your company a Micro undertaking? Does your company
                            exceed two out of 3 following criteria: - more than
                            10 employees and/or €700,000 in turnover and/or €350,000 in total assets?
                        </p>
                    </div> : <></>}

                </div>


                <div className='AnswersBlock'>
                    <div id='ans1' className='answer'>Your company should report
                        under CSRD/ESRS starting
                        with 2025 for the reporting
                        year 2024.</div>
                    <div id='ans2' className='answer'>Your company should report
                        under CSRD/ESRS starting
                        with 2029 for the reporting
                        year 2028.</div>
                    <div id='ans3' className='answer'>Your company does not fall under
                        CSRD/ESRS reporting scope.</div>
                    <div id='ans4' className='answer'>Your company should report
                        under CSRD/ESRS starting
                        with 2026 for the reporting
                        year 2025.</div>
                    <div id='ans5' className='answer'>Your company should report
                        under CSRD/ESRS starting
                        with 2027 for the reporting
                        year 2026.<br />But it has also an
                        opt-out option of two years.</div>
                    <div id='ans6' className='answer'>
                        Your company should report
                        under CSRD/ESRS starting
                        with 2027 for the reporting
                        year 2026.<br />But it has also an
                        opt-out option of two years.
                    </div>
                    <div id='ans7' className='answer'>
                        Your company does not fall under
                        CSRD/ESRS reporting scope.
                    </div>
                </div>



                <div className='buttonsBlock'>
                    <button id='buttonBack' className='buttonBack' onClick={() => { previosQuestion() }}><Image src={back} alt='back' id='back' /></button>
                    <button id='answerYes' className='answerButton' onClick={() => { nextQuestion(NumberQuestion, 'Yes') }}>Yes</button>
                    <button id='answerNo' className='answerButton' onClick={() => { nextQuestion(NumberQuestion, 'No') }}>No</button>
                    <button id='retryButton' className='retryButton' onClick={() => { retryButton() }}>Retry</button>
                </div>
                
            </div>
        </>
    );
}
