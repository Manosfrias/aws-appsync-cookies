import { useEffect, useState } from "react";
import Markdown from "react-markdown";
import ReactModal from "react-modal";
import close from "./close.png";
import "./_versionModal.css";
import { API_CONNECTION } from "../../config/apiConnection";
import { cookieService } from "../../utils/cookie";

export function VersionModal({ cookieData, markdown }) {
  const manageCookies = cookieService(API_CONNECTION);

  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState("cancel");

  const __updateCookie = manageCookies.updateCookie;
  const __getCookieVersion = manageCookies.getCookieVersion;
  const __createCookie = manageCookies.createCookie;

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
      const initialCookie = await __getCookieVersion(cookieData);

      if (initialCookie?.version === cookieData.version) {
        return null;
      }

      setOpen(true);

      if (!initialCookie) {
        return setStatus("create");
      }

      return setStatus("update");
    };
    initialModalState();
  }, [cookieData, __getCookieVersion]);

  return (
    <ReactModal isOpen={open} contentLabel="version modal">
      <Markdown children={markdown} />
      <button className="close" onClick={() => handleClose()}>
        <img src={close} alt="close" />
      </button>
    </ReactModal>
  );
}
