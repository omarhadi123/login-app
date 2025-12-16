export type Event = React.ChangeEvent<HTMLInputElement>;

export interface DataState {
    email: string;
    password: string;
}

export interface DataContextTypes {
    data: DataState;
    updateData: (e: Event) => void;
}
