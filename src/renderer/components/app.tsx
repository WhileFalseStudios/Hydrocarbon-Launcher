import * as React from "react";
import {ipcRenderer, remote} from "electron";

import {Titlebar} from "./titlebar/titlebar";
import {Statusbar} from "./statusbar/statusbar";
import {TabbedContainer} from "./tabbedcontainer/tabbedcontainer";

interface State
{
    titleBarVisible: boolean;
}

interface Props
{

}

/** Root component for the app. */
export class HydroApp extends React.Component<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            titleBarVisible: !remote.getCurrentWindow().isFullScreen()
        }
    }

    componentWillMount()
    {
        remote.getCurrentWindow().on("enter-full-screen", this.hideTitleBar);
        remote.getCurrentWindow().on("leave-full-screen", this.showTitleBar);
    }

    componentWillUnmount()
    {
        remote.getCurrentWindow().removeListener("enter-full-screen", this.hideTitleBar);
        remote.getCurrentWindow().removeListener("leave-full-screen", this.showTitleBar);
    }

    showTitleBar = (): void =>
    {
        this.setState({
            titleBarVisible: true
        })
    }

    hideTitleBar = (): void => 
    {
        this.setState({
            titleBarVisible: false
        })
    }

    render(): JSX.Element
    {
        return (
            <div className="app-flex-box">
                {this.state.titleBarVisible && <Titlebar />}
                <div id="app-content">
                    <TabbedContainer tabNames={["News|announcement", "Projects|inbox", "Templates|cloud_download", "Preferences|settings"]}>
                        <p>News Page</p>
                        <p>Projects Page</p>
                        <p>Templates Page</p>
                        <p>Settings Page</p>
                    </TabbedContainer>
                </div>
                <Statusbar />
            </div>
        );
    }
}