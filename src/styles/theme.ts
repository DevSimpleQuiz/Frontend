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
// export type ButtonSize = "large" | "medium" | "small";
export type ButtonScheme = "primary" | "normal";
export type LayoutWidth = "large" | "medium" | "small";
export type MediaQuery = "mobile" | "tablet" | "desktop";

interface Theme {
  color: Record<ColorKey, string>;
  heading: {
    [key in HeadingSize]: {
      fontSize: string;
    };
  };
  //   button: {
  //     [key in ButtonSize]: {
  //       fontSize: string;
  //       padding: string;
  //     };
  //   };
  buttonScheme: {
    [key in ButtonScheme]: {
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
    title1: {
      fontSize: "40px",
    },
    title2: {
      fontSize: "32px",
    },
    title3: {
      fontSize: "26px",
    },
    title4: {
      fontSize: "20px",
    },
  },
  //   button: {
  //     large: {
  //       fontSize: "1.5rem",
  //       padding: "1rem 2rem",
  //     },
  //     medium: {
  //       fontSize: "1rem",
  //       padding: "0.5rem 1rem",
  //     },
  //     small: {
  //       fontSize: "0.75rem",
  //       padding: "0.25rem 0.5rem",
  //     },
  //   },
  buttonScheme: {
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
    mobile: "(max-width: 760px)",
    tablet: "(max-width: 1020px)",
    desktop: "(min-width: 1020px)",
  },
};
