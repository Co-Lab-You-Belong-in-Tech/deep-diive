import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { io } from "socket.io-client";
import Modal from 'react-modal';
import Navbar from "../../components/Navbar/Navbar";
import Card from "../../components/Card/Card";
import Players from "../../components/Players/Players";
import gameStyles from "./GameView.module.css";

const customStyles = {
    overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    content: {
        top: '47%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        width: "560px",
        height: "296px",
        border: "1px solid #dedede",
        backgroundColor: "#fff",
        borderRadius: "12px",
        boxShadow: "0px 24px 38px rgba(0, 0, 0, 0.2)",
    },
};

const GameView = () => {
    const [modalIsOpen, setIsOpen] = useState(false);
    const [socket, setSocket] = useState();
    
    useEffect(() => {
        // const s = io("http://localhost:3005");
        // setSocket(s)

        const s = io.connect("http://localhost:3005");
        setSocket(s)

        return () => {
            socket.disconnect()
        }
  }, []);

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }
    return (
        <div>
        <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Exit Modal"
        >
                    <p className={gameStyles.modalText}>Are you sure you want to <br /> finish your game?</p>
                    <div className={gameStyles.modalButtons}>
                    <button onClick={closeModal}>cancel</button>
                    <Link to="/feedback">
                        <button className={gameStyles.yes}>yes</button>
                    </Link>
                </div>
        </Modal>  
        
            <div className={gameStyles.gameDiv}>
            <div className={gameStyles.navDiv}>
                    <Navbar openModal={openModal} />
            </div>
            <div className={gameStyles.cardDiv}>
                <Card />
            </div>
            <div className={gameStyles.playerDiv}>
                <Players />
            </div>
            </div>
         </div>
    )
}

export default GameView;
