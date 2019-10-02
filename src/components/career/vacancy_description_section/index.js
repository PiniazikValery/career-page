import React from 'react';
import { BackArrow, PinterestIcon, FacebookIcon, TwitterIcon, OptionPoint } from './icons';
import { HashLink as Link } from 'react-router-hash-link';

var testString = 'Если вы любите общаться с людьми, выявлять их мотивы и желания, получаете интеллектуальное и эмоциональное удовольствие от решения сложных ситуаций и задач, сглаживания конфликтов, видя, как на глазах человек из обеспокоенного становится счастливым, то вам у нас будет комфортно и нескучно.\nВы усовершенствуете свои навыки и станете экспертом в сфере клиентского обслуживания в соответствии с лучшими мировыми практиками';
var listBlocks = [
    {
        id: 'php_first_block',
        title: 'Для начала сотрудничества и поиска точек соприкосновения от вас потребуется',
        options: [
            'знание польского языка на уровне носителя (не ниже С1)',
            'опыт работы с клиентами от 1 года (опыт работы переводчиком будет плюсом)',
            '«удочка» (компьютер, интернет, гарнитура)'
        ]
    },
    {
        id: 'php_second_block',
        title: 'Что будет занимать основную часть рабочего времени',
        options: [
            'общение с клиентами на польском языке (в чате, по почте/телефону) — консультирование по продукту, помощь, прием пожеланий/замечаний относительно работы с сайтом',
            'работа с заказами в 1С (научим)',
            'забота о клиентах, требующих повышенного внимания (при возникновении жалоб/рекламаций)',
            'переводы блогов для сайта и описаний коллекций плитки (что поможет глубже изучить лексику и важные детали, подчеркивающие экспертность знаний)'
        ]
    },
    {
        id: 'php_third_block',
        title: 'Надеемся, вам будут интересны',
        options: [
            'стабильная зарплата от 1000 EUR + премии в виде % от прибыли по обработанным заказам+ бонусы за положительные отзывы клиентов/подачу идей по развитию сайта/поиск баговкорпоративы в Италии',
            'ежедневное использование польского языка',
            'работа на дому за счет удаленного режима и современных технологий',
            'официальное сотрудничество и оплачиваемый отпуск',
            'график с 09 до 18:00 по Варшаве с понедельника по пятницу (не совмещение, не подработка)',
            'развитие по желанию в любом понравившемся отделе компании'
        ]
    }
];

const VacancyDescriptionSection = () => {

    const RenderBlocks = () => {
        return (listBlocks.map(block => (
            <div key={block.id} className="req-block">
                <div className="title">
                    {`${block.title}:`}
                </div>
                <ul>
                    {block.options.map((option, index) => <div className="option-wrapper" key={index}><OptionPoint className="option-point" /><li>{option}</li></div>)}
                </ul>
            </div>
        )));
    }

    return (
        <div className="vacancy-description-section">
            <div className="vacancy-description-content">
                <div className="content-header">
                    <Link to="/home#vacancies">
                        <BackArrow className="back-arrow" />
                        <div className="back-to-vacancies-page">
                            Вернуться ко всем вакансиям
                        </div>
                    </Link>
                    <FacebookIcon className="share-icon" />
                    <PinterestIcon className="share-icon" />
                    <TwitterIcon className="share-icon" />
                    <div className="share-links">
                        Поделиться
                    </div>
                </div>
                <div className="description">{testString}</div>
                {RenderBlocks()}
            </div>
        </div>
    );
};

export default VacancyDescriptionSection;
