import * as React from "react";

/**
 * Sets the button appearance type
 */
export enum ButtonType
{
    Icon,
    Text,
    WindowControls,
}

interface State
{
    enabled: boolean;
}

interface Props
{
    content: string;
    type: ButtonType;
    onClick?: (event: any) => void;
}

/** Styled Hydrocarbon button */
export class HydroButton extends React.Component<Props, State>
{
    constructor(props: Props)
    {
        super(props);
        this.state = {
            enabled: true
        }
    }

    getButtonClass(): string
    {
        switch (this.props.type)
        {
            case ButtonType.WindowControls:
                return "material-icons button-window-control";
            case ButtonType.Icon:
                return "material-icons";
            case ButtonType.Text:
            default:
                return "button-textual";
        }
    }

    render(): JSX.Element
    {
        return (
            <button className={this.getButtonClass()} onClick={this.props.onClick}>
                {this.props.content}
            </button>
        );
    }
}