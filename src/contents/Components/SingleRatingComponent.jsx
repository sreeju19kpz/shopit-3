import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export const SingleRating = ({ ratings }) => {
  const [finalRating, setRating] = useState(0);
  useEffect(() => {
    setRating(ratings);
  }, [ratings]);

  return (
    <div className="default mak-ele-uns ">
      <Box
        sx={{
          "& > legend": { mt: 2 },
        }}
      >
        <Rating
          name="read-only"
          value={finalRating}
          precision={0.1}
          readOnly
          size="small"
        />
      </Box>
    </div>
  );
};
