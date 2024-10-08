import { FC } from "react";

interface Props {
  icon?: JSX.Element;
  title?: string;
}

export const AsideItem: FC<Props> = ({ icon, title }) => {
  return (
    <li className="nav__item">
      {icon}
      <span>{title}</span>
    </li>
  );
};
