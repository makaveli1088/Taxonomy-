export interface Reason {
  name: string;
  url?: string;
}

export interface GroupedData {
  [category: string]: Reason[];
}
