import React, { useState } from 'react';
import questions from '../pages/questionary_page/page_content';
import vacanciesContent from '../pages/vacancy_page/page_content';
import ContactInfoQuestionarySection from '../contact_info_questionary_section';

const QuestionarySection = (props) => {
    const [contactInfoAnswers, setContactInfoAnswers] = useState(questions.main_questions);
    const [questionaryAnswers, setQuestionaryAnswers] = useState(questions.questionnaire);
    const [profQuestionaryAnswers, setProfQuestionaryAnswers] = useState(questions.prof_questionnaire);
    const [vacancyCases, setVacancyCases] = useState(vacanciesContent[props.vacancy].questionaryCases);

    const onAnswersUpdate = (questionIndex, questionAnswer, hookFunction, questions) => {
        hookFunction(questions.map((answer, index) => {
            if (index == questionIndex) {
                answer.answer = questionAnswer;
            }
            return answer;
        }));
    };

    return (
        <div className="questionary-section">
            <div className="content">
                <ContactInfoQuestionarySection
                    questions={contactInfoAnswers}
                    onUpdateAnswer={onAnswersUpdate}
                    onUpdateAnswerHook={setContactInfoAnswers}
                />
                <button onClick={() => {
                    console.log(contactInfoAnswers);
                }}>Кнопка</button>
            </div>
        </div>
    );
};

export default QuestionarySection;
