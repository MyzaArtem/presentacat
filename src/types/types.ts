export type Cords = {
  x: number;
  y: number;
};

export type NodeType = 'text' | 'img' | 'figure';

export type SlideObject = {
  type: NodeType;
  id: string;
  width: number;
  height: number;
  positionTopLeft: Cords;
};

export type TextObject = SlideObject & {
  type: 'text';
  data: string;
  fontFamily: string;
  fontSize: number;
  color: string;
  fontStyle: 'unset' | 'italic';
  fontWeight: 700 | 400;
  fontDecoration: 'unset' | 'underline';
};

export type ImgObject = SlideObject & {
  type: 'img';
  path: string;
};

export type FigureType = 'circle' | 'rectangle' | 'triangle';

export type FigureObject = SlideObject & {
  type: 'figure';
  figure: FigureType;
  strokeColor: string;
  background: null | string;
  strokeWidth: number;
}

export type SlideNode = TextObject | ImgObject | FigureObject;

export type ObjectsList = Array<SlideNode>;

export type SlideType = {
  id: string;
  objects: ObjectsList;
  background: string | null;
};

export type SettingsObject = {
  slideWidth: number;
  slideHeight: number;
};

export type SlidesObject = {
   current: string | null;
   slides: SlideCollection;
}

export type AppType = {
  name: string;
  slides: SlidesObject;
  settings: SettingsObject;
  choosedObject: choosedObjectType;
};

export type SlideCollection = Array<SlideType>;

export type choosedObjectType = {
   id: string | null;
   type: NodeType | null;
}

export type History = Array<AppType>;
