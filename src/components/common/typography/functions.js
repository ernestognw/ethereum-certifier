import React from "react";
import { H1, H2, H3, H4, H5, H6, P } from "./elements";
import types from "./types";

const setTag = (
  color,
  greyColor,
  variant,
  font,
  gutterBottom,
  children,
  marginT,
  marginB,
  marginR,
  marginL,
  align,
  fontSize
) => {
  let tag = undefined;
  switch (variant) {
    case types.HEADING1:
      tag = (
        <H1
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "medium"}
          gutterBottom={gutterBottom}
        >
          {children}
        </H1>
      );
      break;
    case types.HEADING2:
      tag = (
        <H2
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "medium"}
          gutterBottom={gutterBottom}
        >
          {children}
        </H2>
      );
      break;
    case types.HEADING3:
      tag = (
        <H3
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "medium"}
          gutterBottom={gutterBottom}
        >
          {children}
        </H3>
      );
      break;
    case types.HEADING4:
      tag = (
        <H4
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "medium"}
          gutterBottom={gutterBottom}
        >
          {children}
        </H4>
      );
      break;
    case types.HEADING5:
      tag = (
        <H5
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "medium"}
          gutterBottom={gutterBottom}
        >
          {children}
        </H5>
      );
      break;
    case types.HEADING6:
      tag = (
        <H6
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "medium"}
          gutterBottom={gutterBottom}
        >
          {children}
        </H6>
      );
      break;
    case types.DISPLAY1:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "bold"}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    case types.DISPLAY2:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "bold"}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    case types.DISPLAY3:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "bold"}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    case types.DISPLAY4:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "bold"}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    case types.HEADING:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "medium"}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    case types.HEADING_TITLE:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font || "medium"}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    case types.HEADING_SECTION:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    case types.PARAGRAPH:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    case types.LEAD_TEXT:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    case types.MUTED:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
      break;
    default:
      tag = (
        <P
          color={color}
          fontSize={fontSize}
          align={align}
          marginT={marginT}
          marginB={marginB}
          marginL={marginL}
          marginR={marginR}
          greyColor={greyColor}
          font={font}
          gutterBottom={gutterBottom}
          variant={variant}
        >
          {children}
        </P>
      );
  }
  return tag;
};

export { setTag };
