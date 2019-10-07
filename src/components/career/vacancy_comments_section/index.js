import React from 'react';
import VacancyComment from './vacancy_comment';

let comments = [
    {
        id: 1,
        avatar: '/vacancyImgs/unknown_user_ava.png',
        commentator_name: 'Кристина',
        position: undefined,
        text: 'Уже заполняла анкету на вашем сайте, но комментарий еще я не получила.',
        date: '31 марта',
        place: 'Одесса',
        answers: [
            {
                id: 2,
                avatar: '/vacancyImgs/tile_expert_user_ava.png',
                commentator_name: 'Дмитрук Станислав',
                position: 'HR менеджер',
                text: 'Кристина, здравствуйте! Опросник получили. Рассмотрим и я обязательно напишу в почту о результате',
                date: '31 марта',
                place: 'Киев',
            },
        ]
    },
    {
        id: 3,
        avatar: '/vacancyImgs/unknown_user_ava.png',
        commentator_name: 'Наталия',
        position: undefined,
        text: 'Здравствуйте,\nя не переводчик, но свободно владею в/у языками, т.к. высшее образование я получила в России, а работала в Польше. Кроме того, свободно понимаю украинский, но не говорю на нем.Прошу уточнить, работа на дому, или в офисе, т.к. я проживаю в Варшаве.\nСпасибо .',
        date: 'Вчера',
        place: 'Катовице',
        answers: [
            {
                id: 4,
                avatar: '/vacancyImgs/tile_expert_user_ava.png',
                commentator_name: 'Дмитрук Станислав',
                position: 'HR менеджер',
                text: 'Здравствуйте! Наталия, ответили вам в почту',
                date: 'Сегодня',
                place: 'Киев',
            },
        ]
    },
];

const VacancyCommentsSection = () => {
    const RenderComments = (comments) => {
        return (comments.map(comment => {
            return (
                <VacancyComment
                    key={comment.id}
                    id={comment.id}
                    avatar={comment.avatar}
                    commentator_name={comment.commentator_name}
                    position={comment.position}
                    text={comment.text}
                    date={comment.date}
                    place={comment.place}
                    answers={comment.answers ? RenderComments(comment.answers) : undefined}
                />
            );
        }));
    };

    return (
        <div className="vacancy-comments-section">
            <div className="vacancy-comments-content">
                <div className="answers-and-questions">
                    <div className="text">
                        Вопросы и ответы
                    </div>
                </div>
                {RenderComments(comments)}
            </div>
        </div>
    );
};

export default VacancyCommentsSection;
