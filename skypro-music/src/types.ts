export type FilteItemType = {
    handleFilterClick: (newFilter: string) => void; // добавлено свойство 'handleFilterClick'
    title: string; 
    list: string[]; //массив строк
    isOpened: boolean;
};