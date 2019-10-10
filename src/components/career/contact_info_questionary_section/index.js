import React from 'react';
import TextField from '@material-ui/core/TextField';

const ContactInfoQuestionarySection = (props) => {

    const RenderQuestions = () => {
        let { questions, onUpdateAnswer, onUpdateAnswerHook } = props;
        return (questions.map((question, index) => {
            return (
                <TextField
                    className="mui-input"
                    id="outlined-name"
                    key={question.question}
                    onChange={(event) => onUpdateAnswer(index, event.target.value, onUpdateAnswerHook, questions)}
                    label={question.question}
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

export default ContactInfoQuestionarySection;
