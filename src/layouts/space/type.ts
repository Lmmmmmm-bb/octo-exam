export interface IMenuItem {
  label: string;
  children?: { label: string; key: string }[];
}
