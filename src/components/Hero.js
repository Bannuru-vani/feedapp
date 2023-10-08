import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  CardMedia,
  CardContent,
  TextField,
  Typography,
  CardHeader,
  Button,
  Pagination,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Checkbox from "@mui/material/Checkbox";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import axios from "axios";
function Hero() {
  // let url ="https://mocki.io/v1/d82ab89d-fc74-49ca-b745-fbeb344e3c2c"
  const [data, setData] = useState([]);
  const [comment, setComment] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);
  const [paginationData, setPaginationData] = useState([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let resposnse = await axios.get(
      "https://mocki.io/v1/d82ab89d-fc74-49ca-b745-fbeb344e3c2c"
    );

    // response.data
    setData(resposnse.data);
    setPaginationData(resposnse?.data?.posts?.slice(0, pageSize));
    console.log(resposnse.data);
  };
  console.log(paginationData, "pppppp");
  const handleSubmitComment = () => {
    console.log(comment);

    setComment(comment);
  };
  const pageChange = (e, p) => {
    console.log(p);

    // first page 1 , pageSizw 5 ha
    // neeku 1 to 5 records kavali kada
    // so slice(start,end) lo start 0 and end 5 undali

    // page 2, pageSize 5
    //  start 6 and end 10
    // start ki formula 6 kavali ante
    // (5 * 2 )- 5  =
    //ippudu yekkaduu miind ki
    //code push chesta repu pagination unte git login ayyi teligram lo copyy paste cheyyi nenu ikksda rasta hu ma

    // just nen thinck chestunna pattichkovoddu 2 mins hu
    let start = pageSize * p - pageSize; // p 1, 0
    // p 2, (pageSize * p ) - pageSize
    // p 3, pageSize * p
    let end = p * pageSize + 1; // p 2, 6 = pageSize +1
    // p 3, 11 = pageSize * p + 1
    let posts = data.posts.slice(start, end);
    console.log(posts);
    setPaginationData(posts);
  };
  return (
    <div
      style={{
        justifyContent: "center",
        display: "grid",
        gap: "10px",
        flexDirection: "column",
      }}
    >
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card
          sx={{
            width: "800px",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", padding: "10px" }}>
            <CardContent sx={{ flex: "1 0 auto" }}>
              <Typography component="div" variant="h5">
                {data.postheading}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                Mac Miller
              </Typography>
              <Typography>
                asy Social Feed – Social Photos Gallery – Post Feed – Like Box –
                <br />
                WordPress-Plugin | WordPress.org
              </Typography>
              <Typography variant="h6" sx={{ color: "gray" }}>
                No of posts : {data.noofposts}
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 300, height: 300 }}
              image="https://images.squarespace-cdn.com/content/v1/57c93870b3db2b6e16992e6c/1619925201723-MIF4D204QTLUSUYQ7QMD/my-child-won%27t-eat-anything-but-junk-food.jpg"
              alt="Live from space album cover"
            />
          </Box>
        </Card>
      </div>

      <Card
        sx={{
          width: "800px",
        }}
      >
        {paginationData?.map((item) => {
          return (
            <>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                    V
                  </Avatar>
                }
                action={
                  <IconButton aria-label="settings">
                    <MoreVertIcon />
                  </IconButton>
                }
                title={item.title}
              />
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  padding: "10px",
                  gap: "10px",
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ width: 700, height: 600, marginLeft: "42px" }}
                  image="https://images.squarespace-cdn.com/content/v1/57c93870b3db2b6e16992e6c/1619925201723-MIF4D204QTLUSUYQ7QMD/my-child-won%27t-eat-anything-but-junk-food.jpg"
                  alt="Live from space album cover"
                />
                <Box style={{ display: "flex" }}>
                  {" "}
                  <Checkbox
                    icon={<FavoriteBorder />}
                    checkedIcon={<Favorite />}
                  />
                  <Checkbox
                    icon={<ThumbUpOffAltIcon />}
                    checkedIcon={<ThumbUpOffAltIcon />}
                  />
                  {/*    <Typography>{comment}</Typography>
                  <form>
                    <TextField
                      id="outlined-multiline-flexible"
                      label="Add Comment"
                      multiline
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      maxRows={4}
                    />
                    <Button onClick={handleSubmitComment}>Add</Button>
                  </form>
            */}
                </Box>
              </Box>
            </>
          );
        })}
      </Card>
      <Pagination
        count={data?.posts?.length / pageSize}
        page={page}
        pageSize={pageSize}
        onChange={pageChange}
        shape="rounded"
      />
    </div>
  );
}

export default Hero;
