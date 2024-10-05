export interface IListItem {
  id: string;
  parentId: string | null;
  name: string;
  children: IListItem[];
}
