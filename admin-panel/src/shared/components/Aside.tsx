import {
  BadgeCent,
  ChartBarStacked,
  Cog,
  Home,
  PiggyBank,
  Settings2,
  User,
  WalletCards,
} from "lucide-react";
import { FC } from "react";
import { AsideItem } from "./AsideItem";

const navButton = [
  {
    title: "Dashboard",
    icon: <Home size={26} />,
  },
  {
    title: "Transactions",
    icon: <BadgeCent size={26} />,
  },
  {
    title: "Account",
    icon: <User size={26} />,
  },
  {
    title: "Investments",
    icon: <ChartBarStacked size={26} />,
  },
  {
    title: "Credit Cards",
    icon: <WalletCards size={26} />,
  },
  {
    title: "Services",
    icon: <Settings2 size={26} />,
  },
  {
    title: "Setting",
    icon: <Cog size={26} />,
  },
];

interface Props {
  className?: string;
}

export const Aside: FC<Props> = () => {
  return (
    <aside className="aside">
      <div className="logo">
        <PiggyBank className="var(--primary-color)" size={36} />
        <span className="logo__text">BankDash.</span>
      </div>

      <ul className="nav">
        {navButton.map(({ title, icon }) => (
          <AsideItem key={title} title={title} icon={icon} />
        ))}
      </ul>
    </aside>
  );
};
