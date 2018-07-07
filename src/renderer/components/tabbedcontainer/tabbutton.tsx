import * as React from "react";

interface Props
{
    index?: number;
    last?: number;
    selected?: number;
    onClick?: (index: number) => void;
    content?: string;
    icon?: string;
}

export class TabButton extends React.Component<Props, {}>
{
    public static defaultProps: Partial<Props> =
    {
        index: 0,
        last: 1,
        selected: 1,
        content: "Tab Button",
        icon: null,
    }

    buttonClicked = (event: any): void =>
    {
        this.props.onClick(this.props.index);
    }

    render(): JSX.Element
    {
        var classes: string[] = ["tab-button"];
        if (this.props.index == 0)
        {
            classes.push("lhs");
        }
        else if (this.props.index == this.props.last)
        {
            classes.push("rhs");
        }

        if (this.props.index == this.props.selected)
        {
            classes.push("selected");
        }

        return (
            <button className={classes.join(" ")} onClick={this.buttonClicked}>
                {this.props.icon != null && <i className="material-icons tab-icon">{this.props.icon}</i>}
                <span className="tab-text">{this.props.content}</span>
            </button>
        );
    }
}