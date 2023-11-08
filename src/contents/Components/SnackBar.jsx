import React, { useEffect, useState } from "react";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useGetSingleProductQuery } from "../customHooks/ReactQuery";
import Slide from "@mui/material/Slide";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { Link } from "react-router-dom";
import useShowPanels from "../customHooks/useShowPanels";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const theme = createTheme({
  components: {
    MuiSnackbarContent: {
      styleOverrides: {
        root: {
          backgroundColor: "white",
        },
      },
    },
  },
});

const SnackBar = ({ id }) => {
  const data = useGetSingleProductQuery(id);
  const [open, setOpen] = useState({ open: false, Transition: Slide });
  const [messageInfo, setMessageInfo] = React.useState(undefined);
  const { currentState } = useShowPanels();
  useEffect(() => {
    if (open.open === false) {
      setOpen({ open: true, Transition: SlideTransition });
    }
  }, [id]);
  console.log(data);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen({
      ...open,
      open: false,
    });
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };
  if (data.status === "pending") {
    return <></>;
  }
  return (
    <>
      {!(data.data === null) && (
        <div className="bg-col-whi ">
          <ThemeProvider theme={theme}>
            <Snackbar
              key={messageInfo ? messageInfo.key : undefined}
              open={open.open}
              className="mar-bot-40px "
              TransitionComponent={open.Transition}
               autoHideDuration={4000}
              sx={{
                ".css-1kr9x0n-MuiSnackbarContent-action": {
                  marginLeft: 0,
                  width: "100%",
                },
                ".css-1exqwzz-MuiSnackbarContent-message": {
                  padding: 0,
                },
                ".css-zykra6": {
                  marginLeft: 0,
                  width: "100%",
                },
              }}
              onClose={handleClose}
              TransitionProps={{ onExited: handleExited }}
              message={messageInfo ? messageInfo.message : undefined}
              action={
                <React.Fragment>
                  <div
                    className="default width-100-p flex-dir-row flex-gro-1"
                    style={{
                      minWidth: "300px",
                    }}
                  >
                    <div className="default hei-60-px flex-dir-row gap-20-px flex-gro-1">
                      <div className="default ali-ite-cnt justify-con-cnt ali-ite-cnt">
                        <Link to={data.data.products.id}>
                          <img
                            className="default hei-60-px img-fit-cov"
                            src={data.data.products.imageUrl[0]}
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="default flex-dir-col flex-gro-1  mar-top-10px lin-hei-17-px">
                        <div className="default ">
                          <span className=" font-col-black font-siz-12-px font-col-light">
                            recently purchased
                          </span>
                        </div>
                        <div className="default flex-gro-1">
                          <span className="default  flex-gro-1 font-col-lig-2 font-siz-875-rem">
                            {data.data.products.name.toUpperCase()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="default ali-ite-cnt justify-con-cnt">
                      <IconButton
                        aria-label="close"
                        color="black"
                        sx={{ p: 0.5, objectFit: "cover" }}
                        onClick={handleClose}
                        st
                      >
                        <CloseIcon />
                      </IconButton>
                    </div>
                  </div>
                </React.Fragment>
              }
            />
          </ThemeProvider>
        </div>
      )}
    </>
  );
};

export default SnackBar;
