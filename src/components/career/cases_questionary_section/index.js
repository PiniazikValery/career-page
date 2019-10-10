import React from 'react';

const CasesQuestionarySection = (props) => {
    const RenderCases = () => {
        let { questions, onUpdateAnswer, onUpdateAnswerHook } = props;
        return (questions.map((question, index) => {
            return (
                <div key={question.question} className="case">
                    <div className="case-question">
                        {`${index + 1}. ${question.question}`}
                    </div>
                    <textarea
                        placeholder="Ваш ответ"
                        className="case-answer"
                        onChange={(event) => onUpdateAnswer(index, event.target.value, onUpdateAnswerHook, questions)}
                    />
                </div>
            );
        }));
    };

    return (
        props.questions ? <div className="cases-questionary-section">
            <div className="step-number">
                Шаг 2
            </div>
            <div className="title">
                Кейсы
            </div>
            {RenderCases()}
        </div>
            : <div />
    );
};

export default CasesQuestionarySection;
