import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { InviteGuestsModal } from "./invite-guests-modal";
import { DestinationAndDateStep } from "./steps/destination-and-date-step";
import { InviteGuestsStep } from "./steps/invite-guests-steps";
import { ConfirmTripModal } from "./confirm-trip-modal";

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
      <ConfirmTripModal
      closeConfirmTripModal={closeConfirmTripModal}
      createTrip={CreateTrip}/>
      )}
    </div>
  );
}
