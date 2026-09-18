"use client";

import {useFormStatus} from "react-dom";
import {Button} from "./ui/button";
import {Spinner} from "./ui/spinner";

function SubmitButton({children, pendingText = "", className, ...props}) {
  const {pending} = useFormStatus();

  return (
    <Button {...props} disabled={pending}>
      {pending ? pendingText : children}
      {pending && <Spinner />}
    </Button>
  );
}

export default SubmitButton;
