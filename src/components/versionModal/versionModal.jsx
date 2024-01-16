import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import ReactModal from "react-modal";
import close from "./close.png";
import "./_versionModal.css";

export function VersionModal({ cookieData, markdown, manageCookies }) {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("cancel");
  const __updateCookie = manageCookies?.updateCookie;
  const __getCookie = manageCookies?.getCookie;
  const __createCookie = manageCookies?.createCookie;

  const handleClose = () => {
    setOpen(!open);

    if (status === "create") {
      return __createCookie(cookieData);
    }

    if (status === "update") {
      return __updateCookie(cookieData);
    }
  };

  useEffect(() => {
    const initialModalState = async () => {
      const initialCookie = await __getCookie(cookieData);

      if (
        initialCookie?.user === cookieData.user &&
        initialCookie?.app === cookieData.app &&
        initialCookie?.version === cookieData.version
      ) {
        return null;
      }

      setOpen(true);

      if (!initialCookie) {
        return setStatus("create");
      }

      return setStatus("update");
    };
    initialModalState();
  }, [cookieData, __getCookie]);

  return (
    <ReactModal isOpen={open} contentLabel="version modal">
      <Markdown children={markdown} />
      <button className="close" onClick={() => handleClose()}>
        <img src={close} alt="close" />
      </button>
    </ReactModal>
  );
}
