import * as React from "react";
import Chip from "@mui/material/Chip";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function SearchChip() {
  const [searchParams] = useSearchParams();
  const [entry] = searchParams.entries();
  const handleClick = () => {
    console.info("You clicked the Chip.");
  };
  const navigate = useNavigate();
  const handleDelete = () => {
    navigate({
      pathname: ".",
    });
  };

  return (
    <div className="default min-width-50-px ">
      {entry && entry.length > 1 && (
        <Chip
          size="small"
          label={`${entry[1]}`}
          onClick={handleClick}
          onDelete={handleDelete}
          color="primary"
          variant="outlined"
          sx={{
            background: "none",
            "& .css-wjsjww-MuiChip-label": {
              color: "#1976d2",
            },
          }}
        />
      )}
    </div>
  );
}
