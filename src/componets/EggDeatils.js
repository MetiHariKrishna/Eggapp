import { useRouter } from "next/router";
import React, { useState } from "react";
import Popup from "../componets/Popup";

const EggDeatils = () => {
  const router = useRouter();
  const { id } = router.query;
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const handleopen = () => setIsPopupOpen(true);
  const handleClose = () => setIsPopupOpen(false);
  return (
    <div>
      <h1>egg details for {id}</h1>
      <button onClick={handleopen}>discharge</button>
      <button onClick={handleopen}>Allocated</button>
      {isPopupOpen && <Popup onClose={handleClose} />}
    </div>
  );
};

export default EggDeatils;
