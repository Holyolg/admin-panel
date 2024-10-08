import { User } from "lucide-react";
import { FC } from "react";

interface Props {
  avatar?: string;
}

export const Avatar: FC<Props> = ({ avatar }) => {
  return (
    <div className="avatar">
      {avatar ? <img src={avatar} alt="Avatar" /> : <User className="avatar" />}
    </div>
  );
};
