import styled from "styled-components";

  const PopUp = styled.div`
      width: 230px;
      height: 40px;
      background-color: ${(props) => props.backgroundColor ? props.backgroundColor : "#000"};
      display: grid;
      place-content: center;
      margin-top: -10px;
      border-radius: 4px;
      position: absolute;
      bottom: -100px;
      -webkit-animation: slide 0.5s forwards;
      animation: slide 0.5s forwards;
      padding: 0.4rem;
  
    @-webkit-keyframes slide {
      100% { bottom: -20px; }
    }
    
    @keyframes slide {
      100% { bottom: -20px; }
    }
  
   p{
      color: ${(props) => props.color ? props.color : "#fff"};
      letter-spacing: 0.3px;
      font-size: 16px;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      text-align: center;
    }
  `;

const PopUpAlert = (props) => {
  return (
    <PopUp backgroundColor={props.backgroundColor} color={props.color}>
        <p>{props.message}</p>
    </PopUp>
  );
};


export default PopUpAlert;
