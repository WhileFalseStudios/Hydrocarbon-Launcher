import * as React from "react";

export enum ProgressBarMode
{
    Normal,
    Paused,
    Stopped
}

interface Props
{
    width?: number,
    height?: number,
    progress?: number,
    mode?: ProgressBarMode,
}

/** Progress bar */
export class ProgressBar extends React.Component<Props, {}>
{
    public static defaultProps: Partial<Props> =
    {
        width: 200,
        height: 12,
        progress: 0.5,
        mode: ProgressBarMode.Normal,
    }

    render(): JSX.Element
    {
        var classes: string[] = ["progress-bar-interior"];
        switch (this.props.mode)
        {
            case ProgressBarMode.Normal:
                classes.push("normal");
                break;
            case ProgressBarMode.Paused:
                classes.push("paused");
                break;
            case ProgressBarMode.Stopped:
                classes.push("stopped");
                break;
        }

        return (
            <div className="progress-bar" style={{width: this.props.width.toString() + "pt", height: this.props.height.toString() + "pt"}}>
                <div className={classes.join(" ")} style={{width: (this.props.progress * 100).toString() + "%"}}></div>
            </div>
        );
    }
}