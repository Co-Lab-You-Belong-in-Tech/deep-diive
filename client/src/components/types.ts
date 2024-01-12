import { ReactNode } from "react";

export type NavbarProps = {
  color: string;
};

export type InstructionCardProps = {
  gameId: any;
  image: string;
  content: ReactNode;
  lastItem: boolean;
};

export type LoaderProps = {
  hasText: boolean;
};

interface Question {
  game_id?: string;
  questions?: string;
  question?: string;
}

export type QuestionProps = Question[];