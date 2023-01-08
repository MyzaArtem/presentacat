import React from 'react';
import styles from './slideMiniature.module.css';
import { AppType, SlidesObject } from '../types/types';
import Miniature from './slideMiniature';
import { Context } from '../index';
import { connect } from 'react-redux';

interface SlideCarouselProps {
    slides: SlidesObject;
}

export interface miniatureRefObj {
    ref: React.RefObject<HTMLElement>;
    id: string;
}

function SlideCarousel(props: SlideCarouselProps) {

    const settings = React.useContext(Context);
    const miniaturesRefsArr: Array<miniatureRefObj> = [];
    const miniaturesRefsArrRef = React.useRef(miniaturesRefsArr);
    const carouselRef = React.useRef<HTMLDivElement>(null);


    return (
        <div id={'slide-carousel'} className={styles.slideCarousel} ref={carouselRef} style={{height: settings.slideHeight}}>
            {props.slides.slides.map((slide, index) => {
                let miniatureStyles = {};
                if (slide.background) {
                    if (slide.background.indexOf('base64') === -1) {
                        miniatureStyles = {
                            backgroundColor: slide.background,
                        };
                    } else {
                        miniatureStyles = {
                            backgroundImage:
                                'url(' + slide.background + ')'
                        };
                    }
                }
                return (
                    <Miniature
                        refsArr={miniaturesRefsArrRef}
                        key={slide.id}
                        index={index + 1}
                        inlineStyle={miniatureStyles}
                        slide={slide}
                        choosed={slide.id === props.slides.current}
                    />
                );
            })}
        </div>
    );
}

interface SlideCarouselOwnProps {
    slides: SlidesObject;
}

const mapStateToProps = (state: AppType): SlideCarouselOwnProps => {
    return {
        slides: state.slides,
    }
}

const mapDispatchToProps = {
}

export default connect(mapStateToProps, mapDispatchToProps)(SlideCarousel)