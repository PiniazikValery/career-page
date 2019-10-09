import React from 'react';
import TextField from '@material-ui/core/TextField';

const ContactInfoQuestionarySection = (props) => {

    const RenderQuestions = () => {
        let { questions, onUpdateAnswer, onUpdateAnswerHook } = props;
        return (questions.map((question, index) => {
            return (
                <TextField
                    className="mui-input name"
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
        <div className="contact-info-questions">
            <div className="step-number">
                Шаг 1
            </div>
            {RenderQuestions()}
        </div>
    );
};

export default ContactInfoQuestionarySection;
