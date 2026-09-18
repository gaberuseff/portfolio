import {logout} from "@/services/actions";
import {Logout} from "@hugeicons/core-free-icons/index";
import {HugeiconsIcon} from "@hugeicons/react";
import SubmitButton from "@/components/SubmitButton";

function LogoutBtn() {
  return (
    <form action={logout} className="flex w-full">
      <SubmitButton
        type="submit"
        variant="destructive"
        size="icon"
        className="ml-auto">
        <HugeiconsIcon icon={Logout} />
      </SubmitButton>
    </form>
  );
}

export default LogoutBtn;
