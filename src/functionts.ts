export {}
// AppType
import {
    SettingsObject,
    SlideType,
    AppType,
    ImgObject,
    TextObject,
    ObjectsList,
    FigureType,
    FigureObject,
} from "./types";


function createAppType(): AppType {
    let slideArr: SlideCollection = []
    return {
        name: 'Новая презентация',
        slides: ;
        selectedSlideTypes: [],
        currentSlideType:  1,
    };
}
function saveAppType(AppType: AppType): AppType {
    return AppType;
}
function openAppType(AppType: AppType, file: object): AppType {
    return AppType;
}
function renameAppType(AppType: AppType, inputName: string): AppType {
    return{
        ...AppType,
        name: inputName
    };
}

// SlideType 
function createSlide(AppType: AppType): AppType {
    let objectsArr: ObjectsList = [];
    const newSlideType: SlideType = {
        id: String(Date.now()),                        
        background: null,
        objects: objectsArr,
        nextZIndex: 0

    };
    const newSlideTypeList = [...AppType.SlideTypeList, newSlideType];
    return {
        ...AppType,
        SlideTypeList: newSlideTypeList
    };
}
function removeSlideType(AppType: AppType, SlideTypeId: number): AppType {
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.filter((SlideType) => SlideType.id !== SlideTypeId)
    };
}
//
function removeSlideTypes(AppType: AppType, SlideTypeIds: number[]): AppType {
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.filter(SlideType => !SlideTypeIds.includes(SlideType.id))
    }
}
function editSlideTypeBackground(AppType: AppType, SlideTypeId: number, newBackground: color | pictureBackground): AppType {
    const SlideType = AppType.SlideTypeList[SlideTypeId];
    const newSlideType: SlideType = {
        ...SlideType,
        background: newBackground
    };
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map((currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    }
}
function selectSlideType(AppType: AppType, SlideTypeId: number): AppType {
    const SlideType = AppType.SlideTypeList.find((SlideType) => SlideType.id == SlideTypeId);
    if (!SlideType) { 
        return AppType
    }
    const newSelectedSlideTypeList = [...AppType.selectedSlideTypes, SlideType];
    return {
        ...AppType,
        selectedSlideTypes: newSelectedSlideTypeList
    };
}
function selectSlideTypes(AppType:AppType, SlideTypeIdes: number[]): AppType {
    SlideTypeIdes.forEach((item) => {
        selectSlideType(AppType, item);
    });
    return {
        ...AppType,                  
    }
}
function moveSlideType(AppType: AppType, oldSlideTypeId: number, newSlideTypeId: number): AppType {
    const SlideType = AppType.SlideTypeList[oldSlideTypeId]

    const newSlideType = {
        ...SlideType,
        SlideTypeId: newSlideTypeId
    }
    const newSlideTypeList = [...AppType.SlideTypeList];

    [newSlideTypeList[oldSlideTypeId], newSlideTypeList[newSlideTypeId]] = [newSlideTypeList[newSlideTypeId], newSlideTypeList[oldSlideTypeId]]
    return {
        ...AppType,
        SlideTypeList: newSlideTypeList
    };
}

// block functions
function createBlock(AppType: AppType, SlideTypeId: number, inputContent: blockContent): AppType {
    const newBlock = {
        content: inputContent,
        blockId: AppType.SlideTypeList[SlideTypeId].blockList.length++,
        position: {
            x: 1,
            y: 1
        },
        width: 50,
        height: 50
    }
    //
    const newBlockList = [...AppType.SlideTypeList[SlideTypeId].blockList, newBlock];
    const newSlideType = {
        ...AppType.SlideTypeList[SlideTypeId],
        blockList: newBlockList
    }
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}

function removeBlock(AppType: AppType, blockId: number, SlideTypeId: number): AppType {
    const SlideTypeList = AppType.SlideTypeList;
    //
    const SlideType = SlideTypeList[SlideTypeId];
    const newSlideType = {
        ...SlideType,
        blockList: SlideType.blockList.filter((block, id) => id !== SlideTypeId)
    }
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id === SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}

function selectBlock(AppType: AppType, SlideTypeId: number, blockId: number): AppType {
    const newSelectedBlock = AppType.SlideTypeList[SlideTypeId].blockList[blockId];
    const newSelectedBlockList = [...AppType.SlideTypeList[SlideTypeId].selectedBlockList, newSelectedBlock];
    //
    const newSlideType = {
        ...AppType.SlideTypeList[SlideTypeId],
        selectedBlockList: newSelectedBlockList
    }
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id === SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}

function moveBlock(AppType: AppType, SlideTypeId: number, blockId: number, inputX: number, inputY: number ): AppType {
    const SlideType = AppType.SlideTypeList[SlideTypeId];
    const block = SlideType.blockList[blockId];
    const newBlock = {
        ...block,
        position: {
            x: inputX,
            y: inputY
        }
    }
    const newSlideType = {
        ...SlideType,
        blockList: SlideType.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}
function editBlockSize(AppType: AppType, SlideTypeId: number, blockId: number, newWidth: number, newHeight: number): AppType {
    const SlideType = AppType.SlideTypeList[SlideTypeId];
    const block = SlideType.blockList[blockId];
    const newBlock = {
        ...block,
        width: newWidth,
        height: newHeight
    }
    const newSlideType = {
        ...SlideType,
        blockList: SlideType.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}

// content of block functions
function editFontFamily(AppType: AppType, SlideTypeId: number, blockId: number, newFontFamily: string): AppType {
    const SlideType = AppType.SlideTypeList[SlideTypeId];
    const block = SlideType.blockList[blockId];
    const newBlock = {
        ...block,
        fontFamily: newFontFamily
    };
    const newSlideType = {
        ...SlideType,
        blockList: SlideType.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
    })};
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}
function editFontSize(AppType: AppType, SlideTypeId: number, blockId: number, newFontSize: string): AppType {
    const SlideType = AppType.SlideTypeList[SlideTypeId];
    const block = SlideType.blockList[blockId];
    const newBlock = {
        ...block,
        fontSize: newFontSize
    };
    const newSlideType = {
        ...SlideType,
        blockList: SlideType.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}
function editFontColor(AppType: AppType, SlideTypeId: number, blockId: number, newFontColor: string): AppType {
    const SlideType = AppType.SlideTypeList[SlideTypeId];
    const block = SlideType.blockList[blockId];
    const newBlock = {
        ...block,
        fontColor: newFontColor
    };
    const newSlideType = {
        ...SlideType,
        blockList: SlideType.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}
function editTextSymbols(AppType: AppType, SlideTypeId: number, blockId: number, newSymbols: string): AppType {
    const SlideType = AppType.SlideTypeList[SlideTypeId];
    const block = SlideType.blockList[blockId];
    const newBlock = {
        ...block,
        symbols: newSymbols
    };
    const newSlideType = {
        ...SlideType,
        blockList: SlideType.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}
function editPrimitiveBackground(AppType: AppType, SlideTypeId: number, blockId: number, newPrimitiveBackground: string): AppType {
    const SlideType = AppType.SlideTypeList[SlideTypeId];
    const block = SlideType.blockList[blockId];
    const newBlock = {
        ...block,
        background: newPrimitiveBackground
    };
    const newSlideType = {
        ...SlideType,
        blockList: SlideType.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}
function editPrimitiveBorder(AppType: AppType, SlideTypeId: number, blockId: number, newPrimitiveBorder: string): AppType {
    const SlideType = AppType.SlideTypeList[SlideTypeId];
    const block = SlideType.blockList[blockId];
    const newBlock = {
        ...block,
        border: newPrimitiveBorder
    };
    const newSlideType = {
        ...SlideType,
        blockList: SlideType.blockList.map(( currentBlock, id) => {
            return (id == blockId) ? newBlock : currentBlock;
        })};
    return {
        ...AppType,
        SlideTypeList: AppType.SlideTypeList.map(( currentSlideType, id) => {
            return (id == SlideTypeId) ? newSlideType : currentSlideType;
        })
    };
}