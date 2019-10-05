import React from 'react';
import { BackArrow, PinterestIcon, FacebookIcon, TwitterIcon, OptionPoint } from './icons';
import { HashLink as Link } from 'react-router-hash-link';
import strings from '../pages/vacancy_page/page_content';

const VacancyDescriptionSection = (props) => {
    const RenderBlocks = () => {
        return (strings[props.vacancy].listBlocks.map(block => (
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
                            {strings.back_to_all_vacancies}
                        </div>
                    </Link>
                    <FacebookIcon className="share-icon" />
                    <PinterestIcon className="share-icon" />
                    <TwitterIcon className="share-icon" />
                    <div className="share-links">
                        {strings.share}
                    </div>
                </div>
                <div className="description">{strings[props.vacancy].description}</div>
                <div className="req-blocks">
                    {RenderBlocks()}
                </div>
                <div className="about-decision">
                    {strings.about_decision}
                </div>
                <div className="footer">
                    {strings.footer}
                </div>
                <div className="fill-profile">{strings.fill_form}</div>
            </div>
        </div>
    );
};

export default VacancyDescriptionSection;
