import React from 'react';
import TextField from '@material-ui/core/TextField';

const MainQuestionarySection = (props) => {
    const RenderQuestions = () => {
        let { questions, onUpdateAnswer, onUpdateAnswerHook } = props;
        return (questions.map((question, index) => {
            return (
                <TextField
                    className={`mui-input${index === 2 || index === 3 ? ' onhalf' : ''}`}
                    id="outlined-name"
                    multiline
                    key={question.question}
                    onBlur={(event) => onUpdateAnswer(index, event.target.value, onUpdateAnswerHook, questions)}
                    onFocus={(e) => { e.target.placeholder = '' }}
                    label={question.question}
                    placeholder={question.question}
                    margin="normal"
                    variant="outlined"
                />
            );
        }));
    };

    return (
        <div className="main-questionary-section">
            <div className="step-number">
                Шаг 3
            </div>
            <div className="title">
                Анкета
            </div>
            <div className="main-questions">
                {RenderQuestions()}
            </div>
        </div>
    );
};

export default MainQuestionarySection;
