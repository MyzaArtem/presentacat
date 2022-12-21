
  export type PresentationHistory = {
    index: number,
    states: [],
  }; 
  
  export type SlideAnimation = {
    fadeIn: number,
    fadeOut: number,
  };
  
  export type Border = {
    width: number,
    type: string,
    color: string,
  };
  
  export type Image = {
    url: string,
  };
  
  // export type SlideElement = {
  //   id: string,
  //   width: number,
  //   heigth: number,
  //   position: {
  //     x: number,
  //     y: number,
  //   },
  //   color: string,
  //   border: Border,
  //   data: Image
  // };
  
  export type pictureBackground = {
    url: string;
  }

  export type color = {
    codeColor: string;
  }

  export type Block = {
  content: blockContent;
  blockId: number;
  position: {
      x: number;
      y: number;
  };
  width: number;
  height: number;
  }

  export type SlideText = {
    type: 'text',
    x: number,
    y: number,
    data: string,
    fontFamily: string,
    fontColor: string,
    fontSize: number,
    fontWeight: number,
    underline: boolean,
    width: number,
    height: number,
    id: number
  };

  export type ImgObject =  {
    type: 'img';
    x: number,
    y: number,
    path: string;
    width: number;
    height: number;
 };

 export type FigureType = 'circle' | 'rectangle' | 'triangle'| 'line';

 export type FigureObject = {
   type: 'figure';
   x: number;
   y: number;
   figure: FigureType;
   strokeColor: string;
   background: null | string;
   strokeWidth: number;
   borderRadius: number;
   width: number;
   height: number;
}

  export type SlideNode = SlideText | ImgObject | FigureObject;

  export type ObjectsList = Array<SlideNode>;

  export type Slide = {
    id: number,
    elementList: ObjectsList,
    selectedBlocks: Primitive[], //хранит данные выделенных элементов
    background: color | pictureBackground,
    blockList: Block[];
    selectedBlockList: Block[];
  };
  
  export type Presentation = {
    name: string,
    slideList: Slide[],
    currentSlide: number,
    selectedSlides: Slide[], 
  };
  
  export type Primitive = {
    type: string,
  };
  
  export type Editor = {
    mode: string,
    history: PresentationHistory[],
    presentation: Presentation,
  };

  export type blockContent = {
    data:  Primitive | Image | SlideText;
  }