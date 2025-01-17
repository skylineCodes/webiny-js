import React from "react";
import classNames from "classnames";
import { ChipSet } from "@rmwc/chip";
import { Chip } from "./Chip";
import { chipIconWrapper, disabledChips } from "./styles";

export interface ChipsProps {
    /**
     * Chips to show
     */
    children?: React.ReactElement<typeof Chip> | React.ReactElement<typeof Chip>[];

    /**
     * Is chip disabled?
     */
    disabled?: boolean;

    /**
     * CSS class name
     */
    className?: string;

    /**
     * Style object.
     */
    style?: React.CSSProperties;
}

export const Chips: React.FC<ChipsProps> = props => {
    const { children, className, disabled, ...rest } = props;

    return (
        <React.Fragment>
            <ChipSet
                {...rest}
                className={classNames(className, chipIconWrapper, {
                    [disabledChips]: disabled
                })}
            >
                {children}
            </ChipSet>
        </React.Fragment>
    );
};
