import { CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/buttons";

export function Guests(){
    return(
        <div className="space-y-6">
                <h2 className="text-xl font-semibold">Convidados</h2>
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">Jessica White</span>
                            <span className="block text-xs text-zinc-400 truncate">jessica.white44@yahoo.com</span>
                        </div>
                        <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">Dra. Rita Pacocha</span>
                            <span className="block text-xs text-zinc-400 truncate">lacy.stiedemann@gmail.com </span>
                        </div>
                        <CircleDashed className="text-zinc-400 size-5 shrink-0"/>
                    </div>
                </div>
                <button className="bg-zinc-800 text-zinc-200 w-full justify-center rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-zinc-700">
                </button>

                <Button size="full" variant="secondary">
                    <UserCog className="size-5" />
                    Gerenciar Convidados
                 </Button>
            </div>
    )
}