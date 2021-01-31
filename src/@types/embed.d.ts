interface EmbedProps {
  author?: {
    name: string | null;
    avatar?: string | undefined;
  };
  title: string | null;
  description: string | null;
  image?: string | undefined;
  color: string;
  timestamp?: number | Date | undefined;
  thumbnail?: string | undefined;
  footer?: {
    text: string;
    iconURL?: string | undefined;
  };
}
