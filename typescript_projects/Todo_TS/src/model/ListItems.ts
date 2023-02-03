import ListItem from './ListItem';

interface List {
    list: ListItem[],
}

export default class ListItems implements List {

    static instance: ListItems = new ListItems();

    private constructor(
        private _list: ListItem[] = [], 
        ) {}

    get list(): ListItem[] {
        return this._list
    }

    // set list(list: ListItem[]) {
    //     this.list = list
    // }

}