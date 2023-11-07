import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Rating from "@mui/material/Rating";

export const TotalRating = ({ ratings, size }) => {
  const [finalRating, setRating] = useState(0);
  useEffect(() => {
    const getFinalRating = () => {
      if (ratings.length < 1) setRating(0);
      let total = 0;
      let noOfRatings = ratings.length;
      ratings.map((rating) => {
        total += rating.rating;
      });
      setRating(Number((total / noOfRatings).toFixed(1)));
    };
    getFinalRating();
  }, [ratings]);

  return (
    <>
      <div className="default width-100-p flex-dir-row ali-ite-cnt">
        <div className="default ">
          {finalRating > 0 && (
            <span className="default font-siz-16-px mar-rig-10px ">
              {finalRating}
            </span>
          )}
        </div>
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
            size={size}
          />
        </Box>
      </div>
    </>
  );
};
