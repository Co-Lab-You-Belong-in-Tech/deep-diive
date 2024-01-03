import { ReactNode } from "react";

export type NavbarProps = {
  color: string;
};

export type InstructionCardProps = {
    gameId: any;
    image: string;
    content: ReactNode; 
    lastItem: boolean;
}