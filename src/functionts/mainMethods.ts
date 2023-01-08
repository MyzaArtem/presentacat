import {
    SlideType,
    SlideNode,
    TextObject,
    FigureType,
    FigureObject,
    SlideCollection,
    choosedObjectType,
    SlidesObject,
} from '../types/types';
import {
    getCurrentSlide,
    getSlideNode,
    replaceNode,
    replaceSlide,
} from './supportMethods';
import constructors from './functionts';

export function strokeResize(
    slides: SlidesObject,
    choosedObject: choosedObjectType,
    newWidth: number
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const figure: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!figure || figure.type !== 'figure') return slides;

    const newfigure: FigureObject = {
        ...figure,
        strokeWidth: newWidth,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(slides, newSlide);
}

export function strokeColorSet(
    slides: SlidesObject,
    choosedObject: choosedObjectType,
    newColor: string
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const figure: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!figure || figure.type !== 'figure') return slides;

    const newfigure: FigureObject = {
        ...figure,
        strokeColor: newColor,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(slides, newSlide);
}

export function figureBackgroundSet(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType,
    newColor: string
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const figure: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!figure || figure.type !== 'figure') return slides;

    const newfigure: FigureObject = {
        ...figure,
        background: newColor,
    };

    const newSlide = replaceNode(slide, newfigure);

    return replaceSlide(slides, newSlide);
}

export function resizeNode(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType,
    width: number,
    height: number
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const node: SlideNode | undefined = getSlideNode(slide, choosedObject.id);

    if (!node) return slides;

    const newNode: SlideNode = {
        ...node,
        width: width,
        height: height,
    };

    const newSlide = replaceNode(slide, newNode);

    return replaceSlide(slides, newSlide);
}

export function toggleBoldText(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontWeight: text.fontWeight === 400 ? 700 : 400,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function toggleItalicText(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontStyle: text.fontStyle === 'italic' ? 'unset' : 'italic',
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function toggleUnderlinedText(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontDecoration:
            text.fontDecoration === 'underline' ? 'unset' : 'underline',
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function changeTextFontFamily(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType,
    family: string
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontFamily: family,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function changeTextSize(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType,
    size: number
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        fontSize: size,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function changeTextColor(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType,
    color: string
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;
    const newText: TextObject = {
        ...text,
        color: color,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function changeText(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType,
    textData: string
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const text: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!text || text.type !== 'text') return slides;

    const newText: TextObject = {
        ...text,
        data: textData,
    };

    const newSlide = replaceNode(slide, newText);

    return replaceSlide(slides, newSlide);
}

export function setSlideBg(
    slides: SlidesObject,
   
    background: string
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const newSlide: SlideType = {
        ...slide,
        background: background,
    };

    return replaceSlide(slides, newSlide);
}

export function moveItem(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType,
    x: number,
    y: number
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const item: SlideNode | undefined = getSlideNode(slide, choosedObject.id);
    if (!item) return slides;

    const newItem = {
        ...item,
        positionTopLeft: {
            x: x,
            y: y,
        },
    };

    const newSlide = replaceNode(slide, newItem);

    return replaceSlide(slides, newSlide);
}

export function deleteSlideObject(
    slides: SlidesObject,
   
    choosedObject: choosedObjectType
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const newSlide: SlideType = {
        ...slide,
        objects: slide.objects.filter(
            (obj: SlideNode) => obj.id !== choosedObject.id
        ),
    };

    return replaceSlide(slides, newSlide);
}

function isSlide(obj: SlideNode | SlideType): obj is SlideType {
    return (obj as SlideType).objects !== undefined;
}

export function deleteSlide(
    slides: SlidesObject 
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const newSlideList = slides.slides.filter((obj: SlideType) => obj !== slide);
    if (!newSlideList.length) {
        newSlideList.push(constructors.createSlide());
    }

    return {
        ...slides,
        slides: newSlideList,
        current: newSlideList[0].id
    };
}

export function addSlide(
    slides: SlidesObject,
): SlidesObject {
    const newCollection = slides.slides.slice(0, slides.slides.length);
    const newSlide = constructors.createSlide();
    newCollection.push(newSlide);

    return {
        ...slides,
        slides: newCollection,
        current: newSlide.id
    }
}

export function addImage(
    slides: SlidesObject,
   
    path: string,
    k: number
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const newObjects = slide.objects;
    newObjects.push(constructors.createImage(path, k));

    const newSlide = {
        ...slide,
        objects: newObjects,
    };

    return replaceSlide(slides, newSlide);
}

export function addFigure(
    slides: SlidesObject,

    type: FigureType
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const newObjects = slide.objects;
    newObjects.push(constructors.createFigure(type));

    const newSlide = {
        ...slide,
        objects: newObjects,
    };

    return replaceSlide(slides, newSlide);
}

export function addText(
    slides: SlidesObject,
   
): SlidesObject {
    const slide: SlideType | undefined = getCurrentSlide(slides);
    if (!slide) return slides;

    const newObjects = slide.objects;
    newObjects.push(constructors.createText(slide.background));

    const newSlide = {
        ...slide,
        objects: newObjects,
    };

    return replaceSlide(slides, newSlide);
}

export function changeSlideOrder(
    slides: SlidesObject,
    slideId: string,
    slideAfterId: string
): SlidesObject {
    if (slideId !== slideAfterId) {
        const slideToMoveIndex = slides.slides.findIndex(
            (slide) => slide.id === slideId
        );
        let newSlides: SlideCollection = [];
        if (slideAfterId === '0') {
            newSlides.push(slides.slides[slideToMoveIndex]);
        }
        for (let slide of slides.slides) {
            if (slide.id === slideAfterId) {
                newSlides.push(slide);
                newSlides.push(slides.slides[slideToMoveIndex]);
            } else if (slide.id !== slideId) {
                newSlides.push(slide);
            }
        }
        return {
            ...slides,
            slides: newSlides
        };
    } else return slides;
}
