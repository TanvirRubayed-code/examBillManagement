import React, { useEffect, useRef } from "react";
import "./ChangePropic.css";
import img from "../images/men.jpg";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
const onChangeImage = (e) => {
  console.log(e);
};
const ChangePropic = () => {
  const selectedFile = useRef();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [response, setResponse] = useState("");
  const [upload, setUpload] = useState("");

  const notifySuccess = () => {
    toast.success("Image uploaded successfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifyerror = () => {
    toast.error("Cannot upload file. ", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmission = () => {
    const formData = new FormData();
    if (selectedFile.current.files.length === 0) {
      setResponse("Please select an image first");
    } else {
      for (let i = 0; i < selectedFile.current.files.length; i++) {
        formData.append("file[]", selectedFile.current.files[i]);
      }
    }

    formData.append("user[]", localStorage.getItem("userLogin"));
    let url =
      "http://localhost/examBillManagement/src/server/uploadPic.php";

    axios
      .post(url, formData, {
        // receive two parameter endpoint url ,form data
      })
      .then(function (response) {
        // handle success
        setUpload(response.data);
      });
    console.log(upload);
    if (upload === 0) {
      notifyerror();
    } else if (upload === 1) {
      notifySuccess();
    }
  };

  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="width50 ">
        <h5 style={{ color: "red", marginTop: "1em" }} className="text-center">
          {response}
        </h5>
        <div style={{ display: "flex" }}>
          <div className="width80">
            <input type="file" ref={selectedFile} />
          </div>
          <div className="width20">
            <button className="btn btn-primary" onClick={handleSubmission}>
              Upload
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChangePropic;
