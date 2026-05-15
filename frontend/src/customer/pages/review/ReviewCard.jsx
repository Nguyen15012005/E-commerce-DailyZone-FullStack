import { Avatar, Box, Grid, IconButton, Rating } from "@mui/material";
import React from "react";
import { MdDelete } from "react-icons/md";

const ReviewCard = () => {
  return (
    <div className="flex justify-between">
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
          <Box>
            <Avatar
              className="text-white"
              sx={{
                width: { xs: 40, sm: 48, lg: 56 },
                height: { xs: 40, sm: 48, lg: 56 },
                bgcolor: "#9155FD",
                fontSize: { xs: 14, sm: 16, lg: 20 },
              }}
              alt="Nguyen"
              src=""
            >
              N
            </Avatar>
          </Box>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-2">
            <div>
              <p className="text-lg font-semibold">Nguyễn Nam Trung Nguyên</p>
              <p className="opacity-70">2 ngày trước</p>
            </div>

            <div>
              <Rating readOnly value={4.5} name="half-rating" precision={0.5} />
            </div>

            <p>Sản phẩm chất lượng tốt, mẫu mã đẹp.</p>

            <div className="scrollbar-hide flex gap-2 overflow-x-auto">
              {[1, 2, 3, 4, 5].map((image) => (
                <img
                  key={image}
                  className="h-24 w-24 flex-shrink-0 cursor-pointer rounded-md object-cover transition duration-300 hover:scale-105"
                  src="https://wwd.com/wp-content/uploads/2025/02/etro-fw25-rtw-r-gg-0001.jpg?crop=0px%2C36px%2C1365px%2C1821px&resize=555%2C740"
                  alt=""
                />
              ))}
            </div>
          </div>
        </Grid>
      </Grid>

      <div>
        <IconButton>
          <MdDelete className="text-red-500 hover:text-red-700" />
        </IconButton>
      </div>
    </div>
  );
};

export default ReviewCard;
