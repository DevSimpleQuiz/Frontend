export type ColorKey =
  | "primary"
  | "background"
  | "blue"
  | "yellow"
  | "red"
  | "green"
  | "grey1"
  | "grey2"
  | "grey3"
  | "grey4"
  | "grey5"
  | "border"
  | "text";
export type HeadingSize = "title1" | "title2" | "title3" | "title4";
export type TextSize = "text1" | "text2" | "text3";
export type ButtonSize = "short" | "long";
export type ButtonSchema = "primary" | "normal";
export type LayoutWidth = "large" | "medium" | "small";
export type MediaQuery = "mobile" | "tablet" | "desktop";

export interface Theme {
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: string
  };
  text: {
    [key in TextSize]: string
  };
  button: {
    [key in ButtonSize]: {
      padding: string;
      fontSize: string;
    };
  };
  buttonSchema: {
    [key in ButtonSchema]: {
      color: string;
      backgroundColor: string;
    };
  };
  mediaQuery: {
    [key in MediaQuery]: string;
  };
}

export const theme: Theme = {
  color: {
    primary: "#202B3D",
    background: "white",
    blue: "#0078FF",
    yellow: "#FF9800",
    green: "#4CAF50",
    red: "#F44336",
    grey1: "#999999",
    grey2: "#CCCCCC",
    grey3: "#E9E9E9",
    grey4: "#EEEEEE",
    grey5: "#F6F6F6",
    border: "grey",
    text: "black",
  },
  heading: {
    title1: "2.5rem",
    title2: "2rem",
    title3: "1.625rem",
    title4: "1.25rem",
  },
  text: {
    text1: "1.125rem",
    text2: "1rem",
    text3: ".875rem",
  },
  button: {
    short: {
      padding: "8px 12px",
      fontSize: ".875rem",
    },
    long: {
      padding: "0.5rem 1rem",
      fontSize: "1rem",
    },
  },
  buttonSchema: {
    primary: {
      color: "white",
      backgroundColor: "#202B3D",
    },
    normal: {
      color: "#202B3D",
      backgroundColor: "#EEEEEE",
    },
  },
  mediaQuery: {
    desktop: "(min-width: 1024px)",
    tablet: "(min-width: 768px) and (max-width: 1023px)",
    mobile: "(max-width: 767px)",
  },
};
