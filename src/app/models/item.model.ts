import { ItemAttribute } from "../models/itemAttribute.model";
import * as _ from "lodash";

export class Item {
  public constructor(
    name: string,
    attributes: string[],
    isRankable: boolean,
    comments: string,
    rating: number
  ) {
    this.name = name;
    this.attributes = (attributes || []).map(a => new ItemAttribute(a));
    this.isRankable = isRankable;
    this.comments = comments;
    this.rating = rating;
  }
  name: string;
  attributes: ItemAttribute[];
  isRankable: boolean;
  comments: string;
  rating: number;
  selected: boolean;

  hasAttributesSelected() {
    return _.some(this.attributes, (a: any) => {
      return a.selected;
    });
  }

  selectedAttributes() {
    return _.reduce(
      this.attributes,
      (s: string, a: any) => {
        if (a.selected) {
          if (s.trim().length > 0) {
            return s + ", " + a.name;
          }

          return a.name;
        }

        return s;
      },
      ""
    );
  }

  public static getFireBase(fullItems: Item[]) {
    var items = [];
    for (var i = 0; i < fullItems.length; i++) {
      var tempItem = fullItems[i];
      var item = {
        name: tempItem.name,
        attributes: tempItem.attributes.map(a => a.name),
        isRankable: tempItem.isRankable,
        rating: tempItem.rating || 0,
        comments: tempItem.comments
      };
      items.push(item);
    }

    return items;
  }
}
