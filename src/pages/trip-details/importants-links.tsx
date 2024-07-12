import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/buttons";

export function ImportantLinks() {
    return(
        <div className="space-y-6">
                <h2 className="text-xl font-semibold">Links importantes</h2>
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">Reserva AirBnB</span>
                            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200" href="#">https://www.airbnb.com.br/rooms/1047000112450 </a>
                        </div>
                        <Link2 className="text-zinc-400 size-5 shrink-0"/>
                    </div>
                </div>
                <div className="space-y-5">
                    <div className="flex items-center justify-between gap-4">
                        <div className="space-y-1.5">
                            <span className="block font-medium text-zinc-100">Regras da casa</span>
                            <a className="block text-xs text-zinc-400 truncate hover:text-zinc-200" href="#">https://www.notion.com/pages/104700011235490 </a>
                        </div>
                        <Link2 className="text-zinc-400 size-5 shrink-0"/>
                    </div>
                </div>

                <Button size="full" variant="secondary">
                    <Plus className="size-5" />
                    Cadastrar novo link
                </Button>
            </div>
    )
}