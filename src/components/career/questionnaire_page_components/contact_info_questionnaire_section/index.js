import React from 'react';
import TextField from '@material-ui/core/TextField';

const ContactInfoQuestionnaireSection = (props) => {

    const RenderQuestions = () => {
        let { questions, onUpdateAnswer, onUpdateAnswerHook } = props;
        return (questions.map((question, index) => {
            return (
                <TextField
                    className="mui-input"
                    id="outlined-name"
                    multiline
                    rowsMax={1}
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
        <div className="contact-info-questions-section">
            <div className="step-number">
                Шаг 1
            </div>
            <div className="title">
                Контактная информация
            </div>
            <div className="contact-info-questions">
                {RenderQuestions()}
            </div>
        </div>
    );
};

export default ContactInfoQuestionnaireSection;
