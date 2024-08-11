import {
  BackgroundImage,
  Body,
  DirectoryItemContainer,
} from "./directory-item.style";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

type DirectoryProps = {
  category: {
    id: number;
    title: string;
    imageUrl: string;
    route: string;
  };
};

const DirectoryItem: FC<DirectoryProps> = ({ category }) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
