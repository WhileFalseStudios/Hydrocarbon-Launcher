import * as electron from "electron";

/**
 * Wrapper for application code. This handles everything main process related.
 */
export class HydrocarbonLauncherApp
{
    /**
     * Windows created by the app
     */
    private windows: electron.BrowserWindow[];

    constructor()
    {
        this.windows = [];
    }

    /**
     * Create a new window with the given properties.
     * @param options The options passed to the electron window creation process.
     * @returns The BrowserWindow created by electron.
     */
    private createWindow = (options?: electron.BrowserWindowConstructorOptions): electron.BrowserWindow => {
        var window = new electron.BrowserWindow(options);
        this.windows.push(window);
        // Remove it from the array when closed.
        window.once('closed', () => {
            var idx = this.windows.indexOf(window);
            this.windows = this.windows.splice(idx, 1);
        });

        return window;
    }

    /**
     * Called when the app is ready.
     */
    private appReady = (): void => {

        var mainWindow = this.createWindow({
            width: 1024, 
            height: 768, 
            minWidth: 800,
            minHeight: 600,
            title: "Hydrocarbon Launcher",
            backgroundColor: "#1c1c1c",
            show: false,
            frame: false,
            titleBarStyle: 'hiddenInset'
        });

        mainWindow.once('ready-to-show', () => {
            mainWindow.show();
        });

        mainWindow.setMenu(null);
        mainWindow.loadFile(__dirname + "/../renderer/index.html");
    }

    /**
     * Called when the app is activated.
     */
    private appActivate = (): void => {

    }

    /**
     * Runs the application.
     */
    public run = (): void => {
        // Attach listeners here
        electron.app.on('ready', this.appReady);
        electron.app.on('activate', this.appActivate);
        electron.app.on('window-all-closed', () => {
            if (process.platform !== 'darwin')
            {
                electron.app.quit(); //Close if we're not on mac
            }
        });
    }
}