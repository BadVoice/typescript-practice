import MainPage from '../main';
import Page from '../../core/templates/page'
import SettingsPage from '../settings/index';
import StatisticsPage from '../statisctics/index';
import Header from '../../core/components/header';

export const enum PageIds {
    MainPage = 'main-page',
    SettingsPage = 'settings-page',
    StatisticsPage = 'statistics-page'
}

class App {
    private static container: HTMLElement = document.body; // learn private | static 
    private static defaultPageId: string = 'current-page'
    private initPage: MainPage;
    private header: Header;
    
    static renderNewPage(idPage: string) {
        // don't use method this. in static
        const currentPageHTML = document.querySelector(`#${App.defaultPageId}`)
        if (currentPageHTML) {
            currentPageHTML.remove()
        }
        let page: Page | null = null;

        if (idPage === PageIds.MainPage) {
            page = new MainPage(idPage)
        } else if (idPage === PageIds.SettingsPage) {
            page = new SettingsPage(idPage)
        } else if (idPage === PageIds.StatisticsPage) {
            page = new StatisticsPage(idPage)
        }

        if(page) {
            const pageHTML = page.render();
            pageHTML.id = App.defaultPageId;
            App.container.append(pageHTML)
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
        this.initPage = new MainPage('main-page')
        this.header = new Header('tagNameHeader', 'header-container')
    }

    run() {
        App.container.append(this.header.render())
        App.renderNewPage('main-page');
        this.enableRouteChange()
    }
}

export default App;