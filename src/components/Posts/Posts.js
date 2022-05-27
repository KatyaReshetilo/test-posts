import React, { useState } from "react";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import responsive from "./responsive";

import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

import PostItem from "../PostItem/PostItem";
import Comments from "../Comments/Comments";
import CreatePostModal from "../Modals";

import { useFetchPostsQuery } from "../../services/postsAPI";

import s from "./posts.module.css";
export default function Posts() {
  const [openModal, setOpenModal] = useState(false);
  const [showComments, setShowComments] = useState(null);
  const { data: posts } = useFetchPostsQuery();
  const closeModal = () => setOpenModal(false);

  return (
    <Box
      sx={{
        paddingRight: "35px",
        paddingLeft: "35px",
        paddingTop: "35px",
      }}
    >
      <Button
        onClick={() => setOpenModal(true)}
        variant="contained"
        sx={{ display: "block", marginLeft: "auto" }}
      >
        Add post
      </Button>
      {posts && (
        <Carousel
          responsive={responsive}
          // autoPlaySpeed={900000}
          shouldResetAutoplay={false}
          focusOnSelect={true}
          beforeChange={(nextSlide) => {
            if (!showComments) {
              return;
            }
            if (nextSlide - 1 !== showComments) {
              setShowComments(null);
            }
          }}
        >
          {posts.map(({ id, title, body }) => {
            return (
              <div key={id} className={s.post}>
                <div>
                  <PostItem title={title} body={body} />
                </div>
                <Button
                  onClick={() => setShowComments(id)}
                  variant="contained"
                  sx={{ display: "block", marginLeft: "auto" }}
                >
                  Comments
                </Button>
              </div>
            );
          })}
        </Carousel>
      )}
      {showComments && <Comments postId={showComments} />}
      <CreatePostModal open={openModal} handleClose={closeModal} />
    </Box>
  );
}
