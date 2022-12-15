type PresentationHistory = {
    index: number,
    states: [],
  };
  
  type SlideAnimation = {
    fadeIn: number,
    fadeOut: number,
  };
  
  type Border = {
    width: number,
    type: string,
    color: string,
  };
  
  type Filter = {
    blur: number,
    colorSelection: string,  
  };
  
  type Image = {
    url: string,
    filter: Filter,
  };
  
  type SlideText = {
    fontFamily: string,
    fontColor: string,
    fontSize: number,
    bold: boolean,
    italic: boolean,
    underline: boolean,
  };
  
  type SlideElement = {
    id: string,
    width: number,
    heigth: number,
    position: {
      x: number,
      y: number,
    },
    color: string,
    border: Border,
    data: Image ,
  };
  
  type pictureBackground = {
    url: string;
}

  type color = {
    codeColor: string;
}

type Block = {
  content: blockContent;
  blockId: number;
  position: {
      x: number;
      y: number;
  };
  width: number;
  height: number;
}
  
  type Slide = {
    id: number,
    elementList: SlideElement[],
    selectedBlocks: Primitive[], //хранит данные выделенных элементов
    background: color | pictureBackground,
    blockList: Block[];
    selectedBlockList: Block[];
  };
  
  type Presentation = {
    name: string,
    slideList: Slide[],
    currentSlide: number,
    selectedSlides: Slide[], 
  };
  
  type Primitive = {
    type: string,
  };
  
  type Editor = {
    mode: string,
    history: PresentationHistory[],
    presentation: Presentation,
  };

  type blockContent = {
    data:  Primitive | Image | SlideText;
}

export{}