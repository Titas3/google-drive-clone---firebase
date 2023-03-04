import React from "react";
import "./CSS/header.css";
import "./CSS/sidebar.css"
import { useState } from "react";
import MobileScreenShareIcon from "@mui/icons-material/MobileScreenShare";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
// import CloudQueueOutlinedIcon from "@mui/icons-material/CloudQueueOutlined";
import { CloudQueueOutlined } from "@mui/icons-material";
import { Modal } from "@mui/material";

import {db, storage} from "./firebase"

import firebase from "firebase";
// import { FieldValue } from '@google-cloud/firestore'


function Sidebar() {
  const [open, setOpen] = useState(false);
  const [uploading, setUploading]= useState(false);
  const [file, setFile] = useState(false);
  const handleClose=()=>{
    setOpen(false);
  }
  const handleOpen=()=>{
    setOpen(true);
  }

  const handleChange=(e)=>{
     // console.log(e.target.files[0]);
if(e.target.files[0])
{
  setFile(e.target.files[0])
}
  }

  const handleUpload=(event)=>{
   event.preventDefault();
   setUploading(true);

   storage.ref(`files/${file.name}`).put(file).then(snapshot=>{
    // console.log(snapshot);
    storage.ref("files").child(file.name).getDownloadURL().then(url=>{
      db.collection("myfiles").add({
        timestamp:firebase.firestore.FieldValue.serverTimestamp(),
        filename:file.name,
        fileURL:url,
        size:snapshot._delegate.bytesTransferred
      })
      setUploading(false);
      setFile(null);
      setOpen(false);
    })
   })

      }

  return (
    <>
    <Modal open ={open} onClose={handleClose}>
<div className="modal_pop">
  <form>
    <div className="modalHeading">
      <h3>Select file you want to upload</h3>
    </div>
    <div className="modalBody">
    {
      uploading ? ( <p className="uploading">Uploading</p>) : (
        <>

        <input type="file" onChange={handleChange} />
      <input type="submit" className="post_submit" onClick={handleUpload} />

      </>
      )
    }
      
    </div>
  </form>
</div>
    </Modal>
    <div className="sidebar">
      <div className="sidebar_btn">
        <button onClick={handleOpen}>
          <img src="https://wellesleyps.org/technology/wp-content/uploads/sites/21/2018/05/Screen-Shot-2018-05-21-at-9.30.30-AM-355x350.png" alt="" />
          <span>New</span>
        </button>
      </div>
      <div className="sidebar_options">
        <div className="sidebar_option sidebar_option-Active">
          <MobileScreenShareIcon />
          <span><b>My Drive</b></span>
        </div>
        <div className="sidebar_option">
          <DevicesIcon />
          <span>Computers</span>
        </div>
        <div className="sidebar_option">
          <PeopleOutlineIcon />
          <span>Shared with Me</span>
        </div>
        <div className="sidebar_option">
          <QueryBuilderOutlinedIcon />
          <span>Recent</span>
          </div>
          <div className="sidebar_option">
            <StarBorderOutlinedIcon />
            <span>Starred</span>
            </div>
            <div className="sidebar_option">
              <DeleteOutlineOutlinedIcon />
              <span>Trash</span>
            
          
        </div>
      </div>
      <hr />

      <div className="sidebar_options">
        <div className="sidebar_option">
          <CloudQueueOutlined/>
          <span>Storage</span>
            </div>
          <div className="progress_bar">
            <progress   size="tiny" value="50" max="100"/>
            <span>6.45 of 15 GB Used</span>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Sidebar;
