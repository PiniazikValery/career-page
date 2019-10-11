import React, { useState } from 'react';
import { BackArrow, PinterestIcon, FacebookIcon, TwitterIcon, OptionPoint, ShareIcon, InstagramIcon } from './icons';
import { HashLink as Link } from 'react-router-hash-link';
import strings from '../../pages/vacancy_page/page_content';
import { useMediaQuery } from 'react-responsive';
import deviceSizes from '../../../../responsive_design/device_sizes';
import { Mobile, Desktop } from '../../../../responsive_design';

const VacancyDescriptionSection = (props) => {
    const isMobile = useMediaQuery({ query: `(max-width: ${deviceSizes.mobileMaxWidth}px)` });
    const [mobileShareMenuIsOpened, openMobileShareMenu] = useState(false);

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

    const RenderMobileShareMenu = () => {
        if (mobileShareMenuIsOpened) {
            return ([
                <div key="blackout" onClick={onClickBlackout} className="blackout" />
                ,
                <div key="mobile-share-menu" className="mobile-share-menu">
                    <div className="title">
                        {strings.share}
                    </div>
                    <div className="share-icon">
                        <InstagramIcon className="icon" />
                        <div className="icon-name">Instagram</div>
                    </div>
                    <div className="share-icon">
                        <PinterestIcon className="icon" />
                        <div className="icon-name">Pinterest</div>
                    </div>
                    <div className="share-icon">
                        <FacebookIcon className="icon" />
                        <div className="icon-name">Facebook</div>
                    </div>
                    <div className="share-icon">
                        <TwitterIcon className="icon" />
                        <div className="icon-name">Twitter</div>
                    </div>
                </div>
            ]
            );
        }
        return undefined;
    };

    const onClickMobileShareButton = () => {
        openMobileShareMenu(true);
    };

    const onClickBlackout = () => {
        openMobileShareMenu(false);
    };

    return (
        <div className={`vacancy-description-section${isMobile ? ' mobile' : ''}`}>
            {RenderMobileShareMenu()}
            <div className="vacancy-description-content">
                <div className="content-header">
                    <Link to="/home#vacancies">
                        <BackArrow className="back-arrow" />
                        <div className="back-to-vacancies-page">
                            {strings.back_to_all_vacancies}
                        </div>
                    </Link>
                    <Desktop>
                        <FacebookIcon className="share-icon" />
                        <PinterestIcon className="share-icon" />
                        <TwitterIcon className="share-icon" />
                        <div className="share-links">
                            {strings.share}
                        </div>
                    </Desktop>
                    <Mobile>
                        <ShareIcon onClick={onClickMobileShareButton} className="share-icon" />
                    </Mobile>
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
                <Link to={`${props.match.path}/questionary`}>
                    <div className="fill-profile">{strings.fill_form}</div>
                </Link>
            </div>
        </div>
    );
};

export default VacancyDescriptionSection;
