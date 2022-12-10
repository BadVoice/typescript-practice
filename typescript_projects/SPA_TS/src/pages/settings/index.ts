import Page from '../../core/templates/page';

class SettingsPage extends Page {
    static TextObject = {
        MainTitle: 'Settings Page'
    } // learn static TS

    constructor(id: string) {
        super(id)   //learn super TS
    }

    render() {
        const title = this.createHeaderTitle(SettingsPage.TextObject.MainTitle)
        this.container.append(title);
        return this.container
    }
}

export default SettingsPage;