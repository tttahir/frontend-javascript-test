interface CustomSize {
  width: number;
  height: number;
}

interface Rectangle {
  calculateArea(size: CustomSize): number;
}

type Unpacked<T> = T extends (size: infer U) => number ? U : any;

type Size = Unpacked<Rectangle["calculateArea"]>;
