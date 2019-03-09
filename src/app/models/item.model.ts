export class Item {
    public constructor(name: string, attributes:string[], isRateable:boolean, comments: string){
      this.name = name;
      this.attributes = attributes;
      this.isRateable = isRateable;
      this.comments = comments;
    }
    name: string;
    attributes: string[];
    isRateable: boolean;
    comments: string;
    rating: number;
    public static getFireBase(fullItems: Item[]){
        var items = [];
        for(var i = 0; i < fullItems.length; i++){
          var tempItem = fullItems[i];
          var item = {
            name: tempItem.name,
            attributes: tempItem.attributes,
            isRateable: tempItem.isRateable,
            rating: tempItem.rating
          }
          items.push(item);
        }
    
        return items;
      }
  }