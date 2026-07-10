
type ImageArrType = {
  id: number,
  src: string
}

 type BiomesProps = {
  images: string;
  imageArr: ImageArrType[];
  title: string
  description: string
};


export type BiomesData = {
  data: BiomesProps;
  icon: string
  badge: string
};
