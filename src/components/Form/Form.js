import React from "react";
import { Formik, Form } from "formik";
import { useAddPostMutation } from "../../services/postsAPI";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import s from "./form.module.css";
import * as Yup from "yup";

const Basic = ({ onClose }) => {
  const [addPost] = useAddPostMutation();
  const PostSchema = Yup.object().shape({
    title: Yup.string().required("Title is required!"),
    body: Yup.string().required("Content is required!"),
  });
  return (
    <div>
      <h2 className={s.header}>Add Post</h2>
      <Formik
        initialValues={{
          title: "",
          body: "",
        }}
        validationSchema={PostSchema}
        onSubmit={async (values) => {
          await addPost(values);
          onClose();
        }}
      >
        {({ values: { title, body }, errors, touched, setFieldValue }) => (
          <Form>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <TextField
                id="title"
                label="Post title"
                multiline
                name="title"
                value={title}
                onChange={(e) => setFieldValue("title", e.target.value)}
                error={errors.title && touched.title}
                helperText={errors.title && touched.title ? errors.title : ""}
              />

              <TextField
                id="body"
                label="New Post"
                multiline
                name="body"
                rows={4}
                sx={{ marginTop: "20px" }}
                value={body}
                onChange={(e) => setFieldValue("body", e.target.value)}
                error={errors.body && touched.body}
                helperText={errors.body && touched.body ? errors.body : ""}
              />

              <Button
                sx={{ display: "block", marginLeft: "auto", marginTop: "15px" }}
                variant="contained"
                type="submit"
              >
                Add post
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default Basic;
