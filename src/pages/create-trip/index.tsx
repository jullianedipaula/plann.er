import {
  X,
  User,
  Mail,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-steps";

export function CreateTripPage() {
  const navigate = useNavigate();
  const [isGuestInputOpen, setIsGuestInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);
  const [isConfirmTripModalOpen, setIsConfirmTripModalOpen] = useState(false);
  const [emailsToInvite, setEmailsToInvite] = useState([
    "jullianedipaula@hotmail.com",
  ]);

  function openGuestInput() {
    setIsGuestInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestInputOpen(false);
  }

  function openGuestModal() {
    setIsGuestModalOpen(true);
  }

  function closeGuestModal() {
    setIsGuestModalOpen(false);
  }

  function openConfirmTripModal() {
    setIsConfirmTripModalOpen(true);
  }

  function closeConfirmTripModal() {
    setIsConfirmTripModalOpen(false);
  }

  function addNewEmailToInvite(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const email = data.get("email")?.toString();

    if (!email) {
      return;
    }

    if (emailsToInvite.includes(email)) {
      return;
    }

    setEmailsToInvite([...emailsToInvite, email]);

    event.currentTarget.reset();
  }

  function removeEmailsToInvite(emailToRemove: string) {
    const newEmailList = emailsToInvite.filter(
      (email) => email !== emailToRemove
    );

    setEmailsToInvite(newEmailList);
  }

  function CreateTrip() {
    navigate("/trips/123");
  }

  return (
    <div className="h-screen flex items-center justify-center bg-patter bg-no-repeat bg-center">
      <div className="max-w-full px-6 text-center space-y-10">
      <div className="flex flex-col items-center gap-3">
          <img src="./Logo.svg" alt="plann.er" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>
        <div className="space-y-4">
          <DestinationAndDateStep
          closeGuestInput={closeGuestInput}
          isGuestInputOpen={isGuestInputOpen}
          openGuestInput={openGuestInput}
          />

          {isGuestInputOpen && (
            <InviteGuestsStep
            openGuestModal={openGuestModal}
            openConfirmTripModal={openConfirmTripModal}
            emailsToInvite={emailsToInvite}
            />
          )}

        </div>
        <p className="text-small text-zinc-500  ">
          Ao planejar sua viagem pela plann.er você automaticamente concorda
          <br />
          com nossos{" "}
          <a className="text-zinc-300 underline" href="http://">
            {" "}
            termos de uso
          </a>{" "}
          e{" "}
          <a className="text-zinc-300 underline" href="http://">
            {" "}
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestModalOpen && (
        <InviteGuestsModal
          emailsToInvite={emailsToInvite}
          addNewEmailToInvite={addNewEmailToInvite}
          closeGuestModal={closeGuestModal}
          removeEmailsToInvite={removeEmailsToInvite}
        />
      )}

      {isConfirmTripModalOpen && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
          <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5 ">
            <div className="space-y-2 ">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Confirmar Participação
                </h2>
                <button onClick={closeConfirmTripModal}>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p className="text-sm text-zinc-400">
                Você foi convidado(a) para participar de uma viagem para{" "}
                <span className="font-semibold text-zinc-100">
                  Florianópolis, Brasil
                </span>{" "}
                nas datas de{" "}
                <span className="font-semibold text-zinc-100">
                  {" "}
                  16 a 27 de Agosto de 2024
                </span>
                . Para confirmar sua presença na viagem, preencha os dados
                abaixo:
              </p>
            </div>

            <form onSubmit={addNewEmailToInvite} className="space-y-3">
              <div className="py-2.5 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="size-5 text-zinc-400" />
                <input
                  type="text"
                  name="nome"
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none"
                />
              </div>

              <div className="h-14 px-4 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Mail className="size-5 text-zinc-400" />
                <input
                  type=" email"
                  name="email"
                  placeholder="Seu email pessoal"
                  className="bg-transparent text-lg placeholder-zinc-400 outline-none"
                />
              </div>

              <button
                onClick={CreateTrip}
                className="bg-lime-300 w-full justify-center text-lime-950 rounded-lg px-5 h-11 font-medium flex items-center gap-2 hover:bg-lime-400"
              >
                Confirmar a minha presença
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
