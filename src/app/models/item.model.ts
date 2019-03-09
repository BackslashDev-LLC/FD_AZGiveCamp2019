export class Item {
  public constructor(
    name: string,
    attributes: string[],
    isRankable: boolean,
    comments: string
  ) {
    this.name = name;
    this.attributes = attributes;
    this.isRankable = isRankable;
    this.comments = comments;
  }
  name: string;
  attributes: string[];
  isRankable: boolean;
  comments: string;
  rating: number;
  selected: boolean;
  public static getFireBase(fullItems: Item[]) {
    var items = [];
    for (var i = 0; i < fullItems.length; i++) {
      var tempItem = fullItems[i];
      var item = {
        name: tempItem.name,
        attributes: tempItem.attributes,
        isRankable: tempItem.isRankable,
        rating: tempItem.rating
      };
      items.push(item);
    }

    return items;
  }
}
