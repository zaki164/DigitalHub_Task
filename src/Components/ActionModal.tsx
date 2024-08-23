import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import { useTranslation } from "react-i18next";

const ActionModal = ({ open, setOpenDialog, act = "Delete", own, actionAPi }: any) => {
  const { t } = useTranslation();

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      disableScrollLock
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 700,
            bgcolor: "background.paper",
            border: "2px solid #999",
            boxShadow: 24,
            p: 4,
            maxWidth: "90%",
            borderRadius: 3,
          }}
        >
          <p className="text-xl-2xl font-bold">{t("Confirm the Action")}</p>
          <p className="text-base-l font-medium my-2 md:my-3 text-grayColor2">{t("Are Yor Sure You Want to")} {t(act)} {t("this")} {own} {t("?")}</p>
          <div className="flex items-center justify-end gap-4">
            <button
              onClick={handleClose}
              className="custom-button2 hover-button2 text-base-l custom_shadow px-6 md:px-7 py-2 md:py-3"
            >
              {t("Cancel")}
            </button>
            <button
              onClick={() => {
                actionAPi()
                handleClose()
              }}
              className="custom-button hover-button1 text-base-l custom_shadow px-6 md:px-7 py-2 md:py-3"
            >
              {t("Confirm")}
            </button>
          </div>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ActionModal;
