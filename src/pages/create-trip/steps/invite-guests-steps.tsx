import { UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/buttons";

interface InviteGuestsStepProps{
    openGuestModal: () => void
    openConfirmTripModal: () => void
    emailsToInvite: string[]
}

export function InviteGuestsStep({openConfirmTripModal,
    openGuestModal,
    emailsToInvite,
}: InviteGuestsStepProps){
    return(
        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape gap-3">
              <button
                onClick={openGuestModal}
                className="flex items-center gap-2 flex-1"
              >
                <UserRoundPlus className="size-5 text-zinc-400" />
                {emailsToInvite.length > 0 ? (
                  <span>{emailsToInvite.length} pessoa(s) convidada(s)</span>
                ) : (
                  <span className="text-zinc-400 text-lg flex-1 text-left">
                    Quem estará na viagem?
                  </span>
                )}
              </button>
                

              <div className="w-px h-6 bg-zinc-800" />
             
              <Button onClick={openConfirmTripModal}>
                Confirmar Viagem
              </Button>
            </div>
    )
}