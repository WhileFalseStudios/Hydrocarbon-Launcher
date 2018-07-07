import * as React from "react";
import {HydroButton, ButtonType} from "../button";
import {remote, Event} from "electron";

interface State
{
    title: string;
}

/** Top application bar that contains application name and window control buttons. */
export class Titlebar extends React.Component<{}, State>
{
    constructor(props: {})
    {
        super(props);
        this.state = {
            title: remote.getCurrentWindow().getTitle()
        }
    }

    updateTitle = (event: Event, title: string): void => {
        this.setState({
            title: remote.getCurrentWindow().getTitle()
        })
    }

    componentDidMount()
    {
        remote.getCurrentWindow().on("page-title-updated", this.updateTitle);
    }

    componentWillUnmount() // TODO: Does this get called when the page is destroyed? CHECK.
    {
        remote.getCurrentWindow().removeListener("page-title-updated", this.updateTitle);
    }

    /**
     * Gets the className to assign to the titlebar text depending on where it should go per-platform.
     */
    getTilebarTextClassName(): string
    {
        if (process.platform === "win32")
        {
            return "titlebar-text-left";
        }
        else
        {
            return "titlebar-text-centred";
        }
    }

    addWindowControlsLeft(): JSX.Element
    {
        if (process.platform !== "darwin")
        {
            return (
                <span id="titlebar-window-controls-left">
                    <HydroButton type={ButtonType.WindowControls} content="menu" />
                </span>
            );
        }
    }

    /**
     * Returns the custom window controls if not on macOS
     */
    addWindowControls(): JSX.Element
    {
        if (process.platform !== "darwin") //TODO: temp for testing. Change to !== for use
        {
            return (
                <span id="titlebar-window-controls">
                    <HydroButton type={ButtonType.WindowControls} content="minimize" />
                    <HydroButton type={ButtonType.WindowControls} content="maximize" />
                    <HydroButton type={ButtonType.WindowControls} content="close" />
                </span>
            );
        }
        else return null;
    }

    render(): JSX.Element
    {
        return (
        <div id="titlebar">
            {this.addWindowControlsLeft()}
            <span id="titlebar-text" className={this.getTilebarTextClassName()}>{this.state.title}</span>
            {this.addWindowControls()}
        </div>
        );
    }
}