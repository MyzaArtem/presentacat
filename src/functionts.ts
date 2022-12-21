export {}
// presentation
import { Presentation } from "./types";
import { Slide } from "./types";
import { defaultColor } from "./consts";
import { blockContent } from "./types";
import { pictureBackground } from "./types";
import { color } from "./types";

function createPresentation(): Presentation {
    return {
        name: 'Новая презентация',
        slideList: [],
        selectedSlides: [],
        currentSlide:  1,
    };
}
function savePresentation(presentation: Presentation): Presentation {
    return presentation;
}
function openPresentation(presentation: Presentation, file: object): Presentation {
    return presentation;
}
function renamePresentation(presentation: Presentation, inputName: string): Presentation {
    return{
        ...presentation,
        name: inputName
    };
}

// slide 
function createSlide(presentation: Presentation): Presentation {
    const newSlide: Slide = {
        id: Date.now(),                        
        elementList: [],
        blockList: [],
        selectedBlocks: [],
        background: defaultColor,
        selectedBlockList: [],
    };
    const newSlideList = [...presentation.slideList, newSlide];
    return {
        ...presentation,
        slideList: newSlideList
    };
}
function removeSlide(presentation: Presentation, slideId: number): Presentation {
    return {
        ...presentation,
        slideList: presentation.slideList.filter((slide) => slide.id !== slideId)
    };
}
//
function removeSlides(presentation: Presentation, slideIds: number[]): Presentation {
    return {
        ...presentation,
        slideList: presentation.slideList.filter(slide => !slideIds.includes(slide.id))
    }
}
function editSlideBackground(presentation: Presentation, slideId: number, newBackground: color | pictureBackground): Presentation {
    const slide = presentation.slideList[slideId];
    const newSlide: Slide = {
        ...slide,
        background: newBackground
    };
    return {
        ...presentation,
        slideList: presentation.slideList.map((currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    }
}
function selectSlide(presentation: Presentation, slideId: number): Presentation {
    const slide = presentation.slideList.find((slide) => slide.id == slideId);
    if (!slide) { 
        return presentation
    }
    const newSelectedSlideList = [...presentation.selectedSlides, slide];
    return {
        ...presentation,
        selectedSlides: newSelectedSlideList
    };
}
function selectSlides(presentation:Presentation, slideIdes: number[]): Presentation {
    slideIdes.forEach((item) => {
        selectSlide(presentation, item);
    });
    return {
        ...presentation,                  
    }
}
function moveSlide(presentation: Presentation, oldslideId: number, newslideId: number): Presentation {
    const slide = presentation.slideList[oldslideId]

    const newSlide = {
        ...slide,
        slideId: newslideId
    }
    const newSlideList = [...presentation.slideList];

    [newSlideList[oldslideId], newSlideList[newslideId]] = [newSlideList[newslideId], newSlideList[oldslideId]]
    return {
        ...presentation,
        slideList: newSlideList
    };
}

// block functions
function createBlock(presentation: Presentation, slideId: number, inputContent: blockContent): Presentation {
    const newBlock = {
        content: inputContent,
        blockId: presentation.slideList[slideId].blockList.length++,
        position: {
            x: 1,
            y: 1
        },
        width: 50,
        height: 50
    }
    //
    const newBlockList = [...presentation.slideList[slideId].blockList, newBlock];
    const newSlide = {
        ...presentation.slideList[slideId],
        blockList: newBlockList
    }
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    };
}

function removeBlock(presentation: Presentation, blockId: number, slideId: number): Presentation {
    const slideList = presentation.slideList;
    //
    const slide = slideList[slideId];
    const newSlide = {
        ...slide,
        blockList: slide.blockList.filter((block, id) => id !== slideId)
    }
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    };
}

function selectBlock(presentation: Presentation, slideId: number, blockId: number): Presentation {
    const newSelectedBlock = presentation.slideList[slideId].blockList[blockId];
    const newSelectedBlockList = [...presentation.slideList[slideId].selectedBlockList, newSelectedBlock];
    //
    const newSlide = {
        ...presentation.slideList[slideId],
        selectedBlockList: newSelectedBlockList
    }
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id === slideId) ? newSlide : currentSlide;
        })
    };
}

function moveBlock(presentation: Presentation, slideId: number, blockId: number, inputX: number, inputY: number ): Presentation {
    const slide = presentation.slideList[slideId];
    const block = slide.blockList[blockId];
    const newBlock = {
        ...block,
        position: {
            x: inputX,
            y: inputY
        }
    }
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    };
}
function editBlockSize(presentation: Presentation, slideId: number, blockId: number, newWidth: number, newHeight: number): Presentation {
    const slide = presentation.slideList[slideId];
    const block = slide.blockList[blockId];
    const newBlock = {
        ...block,
        width: newWidth,
        height: newHeight
    }
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    };
}

// content of block functions
function editFontFamily(presentation: Presentation, slideId: number, blockId: number, newFontFamily: string): Presentation {
    const slide = presentation.slideList[slideId];
    const block = slide.blockList[blockId];
    const newBlock = {
        ...block,
        fontFamily: newFontFamily
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
    })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    };
}
function editFontSize(presentation: Presentation, slideId: number, blockId: number, newFontSize: string): Presentation {
    const slide = presentation.slideList[slideId];
    const block = slide.blockList[blockId];
    const newBlock = {
        ...block,
        fontSize: newFontSize
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    };
}
function editFontColor(presentation: Presentation, slideId: number, blockId: number, newFontColor: string): Presentation {
    const slide = presentation.slideList[slideId];
    const block = slide.blockList[blockId];
    const newBlock = {
        ...block,
        fontColor: newFontColor
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    };
}
function editTextSymbols(presentation: Presentation, slideId: number, blockId: number, newSymbols: string): Presentation {
    const slide = presentation.slideList[slideId];
    const block = slide.blockList[blockId];
    const newBlock = {
        ...block,
        symbols: newSymbols
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    };
}
function editPrimitiveBackground(presentation: Presentation, slideId: number, blockId: number, newPrimitiveBackground: string): Presentation {
    const slide = presentation.slideList[slideId];
    const block = slide.blockList[blockId];
    const newBlock = {
        ...block,
        background: newPrimitiveBackground
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    };
}
function editPrimitiveBorder(presentation: Presentation, slideId: number, blockId: number, newPrimitiveBorder: string): Presentation {
    const slide = presentation.slideList[slideId];
    const block = slide.blockList[blockId];
    const newBlock = {
        ...block,
        border: newPrimitiveBorder
    };
    const newSlide = {
        ...slide,
        blockList: slide.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...presentation,
        slideList: presentation.slideList.map(( currentSlide, id) => {
            return (id == slideId) ? newSlide : currentSlide;
        })
    };
}