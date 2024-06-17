export class Category {
  id: number;
  name: string;
  imgUrl: string;

  constructor(id: number, name: string, imgUrl: string) {
    this.id = id;
    this.name = name;
    this.imgUrl = imgUrl;
  }
}
