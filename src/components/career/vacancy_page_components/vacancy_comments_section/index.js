import React from 'react';
import VacancyComment from './vacancy_comment';
import { Mobile } from '../../../../responsive_design';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../../responsive_design/device_sizes';
import TextField from '@material-ui/core/TextField';

let comments = [
    {
        id: 1,
        avatar: 'vacancyImgs/unknown_user_ava.png',
        commentator_name: 'Кристина',
        position: undefined,
        text: 'Уже заполняла анкету на вашем сайте, но комментарий еще я не получила.',
        date: '31 марта',
        place: 'Одесса',
        answers: [
            {
                id: 2,
                avatar: 'vacancyImgs/tile_expert_user_ava.png',
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
        avatar: 'vacancyImgs/unknown_user_ava.png',
        commentator_name: 'Наталия',
        position: undefined,
        text: 'Здравствуйте,\nя не переводчик, но свободно владею в/у языками, т.к. высшее образование я получила в России, а работала в Польше. Кроме того, свободно понимаю украинский, но не говорю на нем.Прошу уточнить, работа на дому, или в офисе, т.к. я проживаю в Варшаве.\nСпасибо .',
        date: 'Вчера',
        place: 'Катовице',
        answers: [
            {
                id: 4,
                avatar: 'vacancyImgs/tile_expert_user_ava.png',
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
    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });

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
        <div className={`vacancy-comments-section${isMobile ? ' mobile' : ''}`}>
            <div className="vacancy-comments-content">
                <div className="answers-and-questions">
                    <div className="text">
                        Вопросы и ответы
                    </div>
                    <Mobile>
                        <div className="line-between" />
                        <div className="ask-questions">
                            Задать вопросы
                        </div>
                    </Mobile>
                </div>
                {RenderComments(comments)}
                <div className="send-comment-section">
                    <TextField
                        className="mui-input name"
                        id="outlined-name"
                        label="Имя"
                        margin="normal"
                        variant="outlined"
                    />
                    <TextField
                        className="mui-input email"
                        id="outlined-name"
                        label="Эл. почта (не будет показываться на сайте)"
                        margin="normal"
                        variant="outlined"
                    />
                    <div className="message">
                        <textarea
                            placeholder="Сообщение"
                        />
                    </div>
                </div>
                <div className="send-button-wrapper">
                    <div className="send-button">Отправить</div>
                </div>
            </div>
        </div>
    );
};

export default VacancyCommentsSection;
