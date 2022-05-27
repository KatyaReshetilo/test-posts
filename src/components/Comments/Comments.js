import React from "react";
import { useFetchCommentsQuery } from "../../services/postsAPI";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";

import Typography from "@mui/material/Typography";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Comments({ postId }) {
  const { data: comments } = useFetchCommentsQuery(postId);

  return (
    <>
      <List
        sx={{
          width: "70%",
          bgcolor: "background.paper",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // marginTop: "-15px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        {comments?.map((comment) => (
          <div key={comment.id}>
            <ListItem alignItems="flex-start">
              <AccountCircleIcon
                sx={{
                  color: "#1976d2",
                  marginRight: "5px",
                  width: "50px",
                  height: "50px",
                }}
              />
              <ListItemText
                primary={comment.email}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {comment.name}
                      <br />
                    </Typography>
                    {comment.body}
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </div>
        ))}
      </List>
    </>
  );
}
