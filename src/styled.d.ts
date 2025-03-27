import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: React.CSSProperties["backgroundColor"];
    textColor: React.CSSProperties["color"];
    accentColor: React.CSSProperties["color"];
    subTextColor: React.CSSProperties["color"];
  }
}
