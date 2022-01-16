export type User = {
    avatar: string
    name?: string;
    type: "sender" | "me";
    
}

type AvatarType = {
    src: string;
    alt: string;
}