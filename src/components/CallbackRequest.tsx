// components/CallbackRequest.tsx
import React, { useState, useEffect } from "react";
import ContactModal from "./ContactModal";

const CallbackRequest: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const showModalWithDelay = (delay: number) => {
            setTimeout(() => {
                setShowModal(true);
            }, delay);
        };

        let initialDelay = 90000; 
        let subsequentDelay = 600000; 

        showModalWithDelay(initialDelay);

        const interval = setInterval(() => {
            setShowModal(true);
        }, subsequentDelay);

        return () => clearInterval(interval);
    }, []);
  useEffect(() => {
      if (showModal) {
          document.body.style.overflow = "hidden";
      } else {
          document.body.style.overflow = "auto";
      }
  }, [showModal]);
    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <div>
            <ContactModal showModal={showModal} onClose={handleClose} />
        </div>
    );
};

export default CallbackRequest;
