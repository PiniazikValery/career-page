import React from 'react';
import AppBar from '../../app_bar';
import QuestionarySection from '../../questionary_section';

const QuestionaryPage = (props) => {
    return (
        <div className="page">
            <AppBar />
            <div className="content">
                <QuestionarySection vacancy={props.vacancy} />
            </div>
        </div>
    );
};

export default QuestionaryPage;
