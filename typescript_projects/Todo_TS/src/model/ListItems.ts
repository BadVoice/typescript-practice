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

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return 

        const parsedList: { _id: string, _item: string, _checked: boolean} [] = JSON.parse(storedList)

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            ListItems.instance.addItem(newListItem)
        })
        
    }

    save(): void {
        localStorage.setItem("MyList", JSON.stringify(this._list))
    }
    
    clearList() : void {
        this._list = []
        this.save()
    }

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
 }
