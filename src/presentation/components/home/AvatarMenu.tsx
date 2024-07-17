
import { Button } from "@/presentation/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/presentation/components/ui/dropdown-menu";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/presentation/components/ui/avatar";
import { Skeleton } from "../ui/skeleton";

import { Formatter } from "@/config/helpers/formatter";
import { User } from "@/core/entities/user.entity";

import { useToggle } from "@uidotdev/usehooks";
import {
  LogOut,
  ChevronRight,
  ChevronDown,
} from "lucide-react";

interface Props {
  user: User;
  isLoading: boolean;
  logout: () => void;
}

export const AvatarMenu = ({ user, isLoading, logout }: Props) => {
  const [isOpen, toggle] = useToggle(false);

  return (
    <DropdownMenu open={isOpen} onOpenChange={() => toggle(!isOpen)}>
      <DropdownMenuTrigger
        asChild
        className="focus-visible:ring-offset-0 focus-visible:ring-0 w-48"
      >
        <Button variant="ghost" className="flex justify-between p-0 hover:bg-transparent">
          <span className="flex items-center gap-2">
            {isLoading ? (
              <Skeleton className="h-8 w-8 rounded-full" />
            ) : (
              <Avatar>
                <AvatarImage src={user?.img || ""} alt="Imagen usuario" />
                <AvatarFallback className="bg-primary text-primary-foreground font-bold text-lg flex items-center">
                  {Formatter.getInitials(user?.name)}
                </AvatarFallback>
              </Avatar>
            )}

            <div>
              {isLoading ? (
                <Skeleton className="h-4 w-[84px]" />
              ) : (
                <>
                  <p className="text-slate-800 text-sm font-semibold text-left">
                    Bienvenido
                  </p>
                  <p className="text-emerald-600 font-bold text-base">
                    {user?.name}
                  </p>
                </>
              )}
            </div>
          </span>

          {isOpen ? (
            <ChevronDown className="h-5 w-5 text-slate-700" />
          ) : (
            <ChevronRight className="h-5 w-5 text-slate-700" />
          )}
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-48 mt-2 p-0">
        <DropdownMenuItem
          className="flex justify-center text-md cursor-pointer"
          onClick={() => logout()}
        >
          <LogOut className="mr-2 h-5 w-5 text-light-blue" />
          <span className="text-slate-800">Cerrar sesión</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
