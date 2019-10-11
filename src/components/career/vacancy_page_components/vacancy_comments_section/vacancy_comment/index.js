import React from 'react';

const VacancyComment = (props) => {
    return (
        <div key={props.id} className="vacancy-comment">
            <img alt="avatar" className="vacancy-avatar" src={props.avatar} />
            <div className="coment-content">
                <div className="commentator-name">
                    {props.commentator_name + (props.position ? ', ' : '')}
                    <div className="position">
                        {props.position}
                    </div>
                </div>
                <div className="comment-text">
                    {props.text}
                </div>
                <div className="comment-date-n-place">
                    {`${props.date}, ${props.place}`}
                </div>
                <div className="answer-link">
                    Ответить
                </div>
            </div>
            <div className="answers">
                {props.answers ? props.answers.map(comment => {
                    return comment;
                }) : undefined}
            </div>
        </div>
    );
};

export default VacancyComment;
