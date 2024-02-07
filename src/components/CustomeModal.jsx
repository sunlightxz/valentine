import React, { useState } from "react";
import Modal from "react-modal";

const CustomeModal = () => {
  const [hearts, setHearts] = useState([]);
  const [selectedHeart, setSelectedHeart] = useState(null);
  const [isAddHeartModalOpen, setIsAddHeartModalOpen] = useState(false);
  const [newHeartName, setNewHeartName] = useState("");
  const [newHeartText, setNewHeartText] = useState("");

  const addHeart = () => {
    const newHearts = [...hearts];
    const newHeart = {
      id: Date.now(),
      x: Math.random() * (window.innerWidth - 120), 
      y: 1000 , 
      name: newHeartName,
      text: newHeartText,
    };
    newHearts.push(newHeart);
    setHearts(newHearts);
    closeAddHeartModal();
  };

  const openAddHeartModal = () => {
    setIsAddHeartModalOpen(true);
  };

  const closeAddHeartModal = () => {
    setIsAddHeartModalOpen(false);
    setNewHeartName("");
    setNewHeartText("");
  };

  const renderHearts = () => {
    return hearts.map((heart) => (
      <div
        key={heart.id}
        className="heart relative inline-block"
        style={{ left: heart.x + "px", top: heart.y + "px" }}
        onClick={() => openModalx(heart)}
      >
        <div className="flex justify-center item-center relative">
          <img src="heartFill.png" alt="" width={120} height={120} />
          <div className="heart-name">{heart.name}</div>
        </div>
      </div>
    ));
  };

  const openModalx = (heart) => {
    setSelectedHeart(heart);
  };

  return (
    <div className="bg-[#D41748] w-full h-screen flex flex-col justify-center relative">
      <div className="flex items-start justify-end w-full p-10">
        <button
          onClick={openAddHeartModal}
          className="py-3 px-2 text-sm rounded-full text-slate-300 cursor-pointer z-10"
        >
          Add Heart
        </button>
      </div>

      <Modal
        isOpen={isAddHeartModalOpen}
        onRequestClose={closeAddHeartModal}
        contentLabel="Add Heart Modal"
      >
        {isAddHeartModalOpen && (
          <>
            <h2 style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>Add Heart</h2>
            <form>
              <label htmlFor="newHeartName" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="newHeartName"
                name="newHeartName"
                value={newHeartName}
                onChange={(e) => setNewHeartName(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
              <label htmlFor="newHeartText" className="block mt-4 text-sm font-medium text-gray-700">
                Text
              </label>
              <textarea
                id="newHeartText"
                name="newHeartText"
                value={newHeartText}
                onChange={(e) => setNewHeartText(e.target.value)}
                className="mt-1 p-2 border rounded-md w-full"
              />
              <button
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  padding: "8px 16px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  border: "none",
                  marginTop: "10px",
                }}
                type="button"
                onClick={addHeart}
              >
                Add Heart
              </button>
            </form>
          </>
        )}
      </Modal>

      {renderHearts()}
    </div>
  );
};

export default CustomeModal;
