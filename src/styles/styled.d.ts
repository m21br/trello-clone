import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColor: string;
    cardColor: string;
    boardColor: string;
    deleteColor: string;
    isDraggingOver: string;
    isDraggingFromThis: string;
    isDragging: string;
  }
}
