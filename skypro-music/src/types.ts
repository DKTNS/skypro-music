export type FilteItemType = {
    handleFilterClick: (newFilter: string) => void; // добавлено свойство 'handleFilterClick'
    title: string; 
    list: string[]; //массив строк
    isOpened: boolean;
};

export type TrackType = {
    name: string;
    author: string;
    album: string;
    onClick: ()=> void;
};

export type TrackTypeObj = {
    id: number;
    name: string;
    author: string;
    release_date: string;
    genre: string;
    duration_in_seconds: number;
    album: string;
    logo: string | null;
    track_file: string;
    stared_user: userType[];
};

export type userType = {
    id: number;
    username: string;
    first_name: string;
    last_name: string;
    email: string;
}