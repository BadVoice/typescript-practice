import ListItems from '../model/ListItems';

interface DOMList {
    ul: HTMLUListElement 
    clear(): void,
    render(listItems: ListItems): void,

}