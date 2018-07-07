import * as React from "react";
import {TabButton} from "./tabbutton";

interface Props
{
    initial?: number;
    tabNames?: string[];
}

interface State
{
    selected: number;
}

/** Container that generates tabs for each child element. */
export class TabbedContainer extends React.Component<Props, State>
{
    public static defaultProps: Partial<Props> = {
        initial: 0,
        tabNames: [],
    }

    constructor(props: Props)
    {
        super(props);
        this.state = {
            selected: props.initial
        }
    }

    /**
     * Sets the currently selected tab.
     * @param index The new selected index.
     * @param max The maximum tab index.
     */
    setTab = (index: number): void => 
    {
        this.setState({
            selected: index
        });
    }

    /**
     * Make the tab list.
     * @returns Array of the tabs for this container.
     */
    makeTabs(): JSX.Element[]
    {
        var childCount: number = React.Children.count(this.props.children);
        var tabs: JSX.Element[] = [];
        for (var i = 0; i < childCount; i++)
        {
            var tabProps: string[] = this.props.tabNames[i].split("|");
            tabs.push((
                <TabButton content={tabProps[0]} index={i} last={childCount - 1} selected={this.state.selected}
                onClick={this.setTab} icon={tabProps.length > 1 ? tabProps[1] : null} />
            ));
        }
        return tabs;
    }

    render(): JSX.Element
    {
        return (
            <div className="tab-container">
                <div className="tab-header">
                    {this.makeTabs()}
                </div>
                <div className="tab-body">
                    {React.Children.map(this.props.children, (child: React.ReactChild, i: number) => {
                        if (i == this.state.selected)
                        {
                            return child;
                        }
                    })}
                </div>
            </div>
        );
    }
}