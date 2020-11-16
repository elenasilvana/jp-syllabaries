import React from "react";

import "./color-selector.scss";

type Color = {
  name: string;
  code: string;
};

interface ColorSelectorProps {
  colors: Color[];
  setSelected: (colorCode: string) => void;
}

export const ColorSelector: React.FunctionComponent<ColorSelectorProps> = ({
  colors,
  setSelected,
}) => {
  return (
    <div className="selection-palette">
      {colors.map((color: Color) => {
        return (
          <div
            onClick={() => setSelected(color.code)}
            style={{ background: color.code }}
            className="selection-palette-btn"
          ></div>
        );
      })}
    </div>
  );
};
