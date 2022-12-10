abstract class Page {  // learn absctract class
    protected container: HTMLElement;
    static TextObject = {}

    constructor(id: string) {
        this.container = document.createElement('div');
        this.container.id = id;
    }

    protected createHeaderTitle(text: string) {   // learn protected
        const headerTitle = document.createElement('h1')
        headerTitle.innerText = text;
        return headerTitle  
    }

    render() {
        return this.container
    }
}

export default Page;