import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
    ru: {
        main_questions: [
            { question: "Имя" },
            { question: "Фамилия" },
            { question: "Эл. почта" },
            { question: "Телефон" },
        ],
        questionnaire: [
            { question: "Страна" },
            { question: "Образование" },
            { question: "Дата рождения" },
            { question: "Ссылка не резюме" },
            { question: "Опыт работы" },
            { question: "Качества, которые вы больше всего цените в человеке?" },
            { question: "Какое у вас хобби?" },
            { question: "Ваша идея о счастье?" },
            { question: "Где вам хотелось бы жить?" },
            { question: "Ваши любимые писатели?" },
            { question: "Ваши любимые художники и композиторы?" },
            { question: "Ваша любимая профессиональная литература?" },
            { question: "К каким порокам вы чувствуете наибольшее снисхождение?" }
        ],
        prof_questionnaire: [
            { question: "В каком городе вы живете?" },
            { question: "Ваши любимые герои в реальной жизни?" },
            { question: "Что вам необходимо (какие ресурсы), чтобы быть успешным в нашей компании?" },
            { question: "Что побуждает человека работать с наибольшей отдачей? И что, наоборот, может демотивировать?" },
            { question: "Случалось ли вам допускать ошибки в работе?" },
            { question: "Ваш тип темперамента?" }
        ]
    }
});

export default strings;