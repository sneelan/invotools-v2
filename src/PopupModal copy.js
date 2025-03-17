import React from 'react';
import { useEffect,useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, IconButton, TextField } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import StarIcon from '@mui/icons-material/Star';

const PopupModal = () => {
    const [rating, setRating] = useState(5);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [open, setOpen] = useState(false);
    const [modalData, setModalData] = useState({ title: "", image: "" });

    const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Generate preview URL
    }
  };

    useEffect(() => {
        const handleRatingClick = (event) => {
          event.stopPropagation(); // <-- Added this to prevent interference
          const button = event.target.closest(".rating-btn");
          if (button) {
            setModalData({
              title: button.getAttribute("data-title"),
              image: button.getAttribute("data-image"),
            });
            setOpen(true);
          }
        };
      
        document.addEventListener("click", handleRatingClick);
        return () => {
          document.removeEventListener("click", handleRatingClick);
        };
      }, []);

    return (
      <Dialog open={open} onClose={() => setOpen(false)}
      sx={{"& .MuiDialog-paper": {position: "fixed",top: "10%", left: "50%",transform: "translate(-50%, 0)",width: "100%",maxWidth: "440px",padding: "0px",},}}>
        <DialogTitle className="mb-0 bg-dark text-white d-flex justify-content-between align-items-center p-1 ps-3">
        <span>Product Review</span>
        <IconButton onClick={() => setOpen(false)} className="text-white">
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className='p-0'>        
        <div className="d-flex align-items-center mb-1 pb-2 border-bottom p-1 bg-theme-primary-verylight">
          <img width="40" src={modalData.image} alt={modalData.title} className="me-3" />
          <span className='fw-boldx'>{modalData.title}</span>
        </div>
        <div className='m-0 p-3 fw-bold border-bottom '>Your opinion matters to us. Write your thoughts on this product.</div>
        <div className='px-3 py-2 pb-0'>        
        <div className="mb-2 pt-1 pb-2">          
          <div className=''>
          <span className="d-inline-block fw-bold mb-2">Product Rating: </span>
          {[1, 2, 3, 4, 5].map((star) => (
    <span
      key={star}
      style={{
        fontSize: "1.5rem",
        cursor: "pointer",
        color: star <= rating ? "orange" : "#ccc",
      }}
      onClick={(e) => {
        e.stopPropagation(); 
        setRating(star);
      }}      
    >
    <StarIcon style={{ fontSize: "2rem" }} />
    </span>  
  ))}
          </div>
        </div>
<TextField fullWidth label="Review Title" variant="outlined" size="small" className="mb-2" value={title} onChange={(e) => setTitle(e.target.value)}/>
<TextField fullWidth size="small" label="Review Description" variant="outlined" multiline rows={4} value={description} onChange={(e) => setDescription(e.target.value)}/>
<div className='bg-theme-primary-verylight mt-2'>
      {image && (
        <span className='d-inline-block me-3' style={{ marginTop: "5px" }}>
          <img src={image} alt="Preview" style={{ width: "60px", height: "60px", objectFit: "cover" }} />
        </span>
      )}
      <input className='' type="file" accept="image/*" onChange={handleImageChange} />
</div>
    <DialogActions className='p-0 my-2'>       
            <a className='btn btn-theme-accent bg-theme-accent hover-bg-primary text-dark hover-text-black w-100 p-2 rounded h6 fw-normal text-center'>Submit Review</a>
    </DialogActions>
    </div>
      </DialogContent>
    </Dialog>
  );
};
export default PopupModal;