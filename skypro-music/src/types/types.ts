type userType = {
  id: number;
  username: string;
  first_name: string;
  last_name: string;
  email: string;
};

export type trackType = {
  id: number;
  release_date: string;
  duration_in_seconds: number;
  logo: string | null;
  track_file: string;
  stared_user: userType[];
};
export type trackTypeLocal = {
  name: string;
  author: string;
  genre: string;
  album: string;
  onClick: () => void;
}
export type FilterItemType = {
  title: string;
  list: string[];
  handleFilterClic: (newFilter: string) => void;
  isOpened: boolean;
};