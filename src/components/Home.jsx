import React, { useState } from "react";
import Modal from "react-modal";

const Home = () => {
  const [hearts, setHearts] = useState([]);
  const [selectedHeart, setSelectedHeart] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const openModal = (heart) => {
    setSelectedHeart(heart);
    setIsModalOpen(true);
  };
const openAddHeartModal = () => {
    setIsAddHeartModalOpen(true);

  };

  const closeModal = () => {
    setSelectedHeart(null);
    setIsModalOpen(false);
  };

  const closeAddHeartModal = () => {
    setIsAddHeartModalOpen(false);
    // Clear the form fields when closing the "Add Heart" modal
    setNewHeartName('');
    setNewHeartText('');
  };

  const renderHearts = () => {
    return hearts.map((heart) => (
      <div
        key={heart.id}
        className="heart relative inline-block"
        style={{ left: heart.x + "px", top: heart.y + "px" }}
        onClick={() => openModal(heart)}
      >
        <div className="flex justify-center item-center relative">
          <img src="heartFill.png" alt="" width={120} height={120} />
          <div className="heart-name">{heart.name}</div>
        </div>
      </div>
    ));
  };


  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "0",
      bottom: "0",
      width: "90%",
      height: "90%",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#DA90A4",
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    },
  };
  return (
    <div
      className="bg-[#D41748] w-full h-screen flex flex-col justify-center relative"
    >
      <div className="flex items-start justify-end w-full p-10">
        <button 
          onClick={openAddHeartModal}
          className="py-3 px-2 text-sm rounded-full text-slate-300 cursor-pointer z-10">
          Add Heart
        </button>
      </div>

      <div className="relative flex flex-row justify-center items-center w-full max-w-full h-full">
        <div className="left-line"></div>
        <img
          src="header.png"
          alt=""
          className="image w-[400px] md:w-[650px] lg:w-[800px] xl:w-[980px] h-auto 2xl:w-[1056px]"
        />
        Meow
        <div className="right-line"></div>
      </div>
      <div className="flex items-end justify-center w-full py-10 z-10">
        <div className="flex justify-between items-center w-[80%]">
          <div className="">asdf</div>
          <div className="flex flex-row justify-between gap-6 text-sm transition-all ease-in-out">
            <button className="text-white hover:text-gray-300">About</button>
            <button className="text-white hover:text-gray-300">
              Make donation
            </button>
            <div className="relative flex items-center justify-center">
              <div className="line relative"></div>
              <button className="text-white opacity-40 ml-16 hover:opacity-100">
                Share
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="heart-container" onClick={(e) => {
          e.stopPropagation();
          addHeart();
        }}>
           {renderHearts()}
        {hearts.map((heart) => (
          <div
            key={heart.id}
            className="heart relative inline-block"
            style={{ left: heart.x + "px", top: heart.y + "px" }}
            onClick={() => openModal(heart)}
          >
            {heart.id && (
              <div className="flex justify-center item-center relative">
                <img src="heartFill.png" alt="" width={120} height={120} />
                <div className="heart-name">{heart.name}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Heart Details Modal"
        style={customStyles}
      >
        {selectedHeart && (
          <div className="z-50 flex flex-col justify-center relative h-full w-full ">
            <div className="items-start flex justify-between ">
              <div className=""></div>
              <button onClick={closeModal} className="">
                close
              </button>
            </div>
            <div className="valentine items-center justify-center flex  w-full h-full relative">
              <div className="envelope relative w-[300px] h-[200px] bg-red-300 grid place-items-center">
                <div className="card">
                  <span className="text text-lg text-center text-slate-900 leading-5">
                    <p>
                      {" "}
                     {selectedHeart.text}
                      <br />
                    </p>
                    <h2 className="mt-2">{selectedHeart.name}</h2>
                  </span>
                </div>
                <div className="front"></div>
              </div>
            </div>
          </div>
        )}
      </Modal>
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

export default Home;
