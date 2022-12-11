abstract class  Component {
    protected container: HTMLElement;   // learn abstract & protected 

    constructor(tagName: string, className: string) {
        this.container = document.createElement(tagName)
        this.container.className = className;
    }


    render() {
        return this.container;
    }
}

export default Component