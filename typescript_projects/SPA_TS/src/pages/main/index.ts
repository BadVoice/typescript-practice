import Page from '../../core/templates/page';

class MainPage extends Page {
    static TextObject = {
        MainTitle: 'Main Page 123'
    } // learn static TS

    constructor(id: string) {
        super(id)   //learn super TS
    }

    render() {
        const title = this.createHeaderTitle(MainPage.TextObject.MainTitle)
        this.container.append(title);
        return this.container
    }
}

export default MainPage;