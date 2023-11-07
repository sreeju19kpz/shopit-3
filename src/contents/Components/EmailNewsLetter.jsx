import React from "react";
import FormControl from "@mui/joy/FormControl";

import FormHelperText from "@mui/joy/FormHelperText";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import useShowPanels from "../customHooks/useShowPanels";

export default function EmailNewsLetter() {
  const { currentState } = useShowPanels();
  const [data, setData] = React.useState({
    email: "",
    status: "initial",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setData((current) => ({ ...current, status: "loading" }));
    try {
      // Replace timeout with real backend operation
      setTimeout(() => {
        setData({ email: "", status: "sent" });
      }, 1500);
    } catch (error) {
      setData((current) => ({ ...current, status: "failure" }));
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      id="demo"
      className={`default ${
        currentState === "verylowWidth" ? "width-100-p" : "wid-300-px"
      }`}
    >
      <FormControl>
        <Input
          sx={{ "--Input-decoratorChildHeight": "45px" }}
          placeholder="mail@email.com"
          type="email"
          required
          value={data.email}
          onChange={(event) =>
            setData({ email: event.target.value, status: "initial" })
          }
          error={data.status === "failure"}
          endDecorator={
            <Button
              variant="solid"
              loading={data.status === "loading"}
              type="submit"
              sx={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            >
              Subscribe
            </Button>
          }
        />
        {data.status === "failure" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.danger[400] })}
          >
            Oops! something went wrong, please try again later.
          </FormHelperText>
        )}

        {data.status === "sent" && (
          <FormHelperText
            sx={(theme) => ({ color: theme.vars.palette.primary[400] })}
          >
            You are all set!
          </FormHelperText>
        )}
      </FormControl>
    </form>
  );
}
