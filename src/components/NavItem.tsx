import { cn } from "@/lib/utils";

export interface NavItemProps {
  id: string;
  name: string;
  active: boolean;
  onClick: (id: string) => void;
}

export default function NavItem({ id, name, active, onClick }: NavItemProps) {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-12 px-5 rounded-lg text-left flex items-center font-medium transition-all duration-300 w-full text-black cursor-pointer border border-gray-200",
        active ? "bg-yelly border-yellow-600" : "bg-white"
      )}
    >
      <p className="text-lg">{name}</p>
    </div>
  );
}
