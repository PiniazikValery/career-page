import React from 'react';
import TextField from '@material-ui/core/TextField';

const ProfQuestionarySection = (props) => {
    const RenderQuestions = () => {
        let { questions, onUpdateAnswer, onUpdateAnswerHook } = props;
        return (questions.map((question, index) => {
            return (
                <TextField
                    className="mui-input"
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
        <div className="prof-questionary-section">
            <div className="title">
                Просим заполнить нашу профессиональную анкету
            </div>
            <div className="prof-questions">
                {RenderQuestions()}
            </div>
        </div>
    );
};

export default ProfQuestionarySection;
