import MainPage from '../main';
import Page from '../../core/templates/page'
import SettingsPage from '../settings/index';

class App {
    private container: HTMLElement; // learn private 
    private initPage: MainPage;

    static renderNewPage(idPage: string) {
        document.body.innerHTML = ''
        let page: Page | null = null;

        if (idPage === 'main-page') {
            page = new MainPage(idPage)
        } else if (idPage === 'settings-page') {
            page = new SettingsPage(idPage)
        } else if (idPage === 'statistics-page') {
            page = new SettingsPage(idPage)
        }

        if(page) {
            const pageHTML = page.render();
            document.body.append(pageHTML)
        }
    }

    private enableRouteChange() {
        window.addEventListener('hashchange', () => {
            const hash = window.location.hash.slice(1);
            console.log('haschange', hash)
            App.renderNewPage(hash);
        })
    }

    constructor() {
        this.container = document.body;
        this.initPage = new MainPage('main-page')
    }

    run() {
        App.renderNewPage('statistics-page');
        this.enableRouteChange()
    }
}

export default App;