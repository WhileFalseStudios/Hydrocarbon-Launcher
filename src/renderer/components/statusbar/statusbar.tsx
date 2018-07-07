import * as React from "react";
import {ProgressBar, ProgressBarMode} from "../progressbar/progressbar";

/** Status bar at the bottom of the window. */
export class Statusbar extends React.Component
{
    render(): JSX.Element
    {
        return (
            <div id="statusbar">
                <span>Progress:</span>
                <span><ProgressBar width={120} height={12} mode={ProgressBarMode.Normal} progress={0.5} /></span>
            </div>
        );
    }
}
