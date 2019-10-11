import React from 'react';
import AppBar from '../../layout/app_bar';
import QuestionarySection from '../../questionnaire_page_components/questionnaire_section';

const QuestionnairePage = (props) => {
    return (
        <div className="page">
            <AppBar />
            <div className="content">
                <QuestionarySection vacancy={props.vacancy} />
            </div>
        </div>
    );
};

export default QuestionnairePage;
