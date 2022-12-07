import styled from "styled-components";

// 
const ContainerAll = styled.div`
   width: 375px;
   height: 600px;
   margin: 40px 40px 40px 40px;
   display: inline-block;
   perspective: 700px;
   position: relative;
`;

//  boton dorso
const ButtonExit = styled.button`
   &:hover{
      transition: all 0.45s;
      transform: scale(1.15) translate(0px,-17px);
      box-shadow: -5px 5px 20px -10px red;
   }
   margin: 0px 0px 0px 318px;
   position: absolute;
   width: 43px;
    height: 43px;
    background: #B2DF28;
    border: 4.5px solid #00444D;
    border-radius: 50%;
    transform: translate(0px,-20px);
    z-index: 1;
`;
const Cruz = styled.div`
   &::after {
    content: "";
    display: block;
    width: 20px;
    height: 3px;
    background-color: #FF3548;
    transform: rotate(90deg);
    position: absolute;
   }
   position: absolute;
    width: 20px;
    height: 3px;
    background-color: #FF3548;
    position: absolute;
    transform: translate(1px, -2px) rotate(45deg);
`;
// carta frente
const DivMain = styled.div`
   &:hover{
      transition: all 1s;
      transform:  rotateY(180deg);
   }
   width: 375px;
   height: 600px;
   background: #00B5CC;
   border: 8px solid #00444D;
   border-radius: 10px;
   transition: transform 1s;
   transform-style: preserve-3d;
   position: absolute;
`;

const DivTittle = styled.div`
   margin: 0px 0px 0px 3px;
   width: 363px;
   height: 48px;
   /* UI Properties */
   background: #40C3D5;
   border: 4px solid #008799;
   border-radius: 10px;
   opacity: 1;
`;
 const DivBackgroundTittle = styled.div`
   position: absolute;
   margin: auto;
      width: 377px;
      height: 67px;
      background: #00444D;
      opacity: 1;
      transform: translate(-1px);
 `;
const DivTittleH2 = styled.h2`
   margin: 7px 0px 0px 0px;
   text-align: center;
`;

const ImgCard = styled.img`
   margin:  90px 0px 0px 0px;
   width: 299px;
   height: 300px;
   /* UI Properties */
   background: transparent 0% 0% no-repeat padding-box;
   box-shadow: 0px 3px 3px #00000029;
   border: 6px solid #008799;
   border-radius: 10px;
   opacity: 1;
`;

const InfoCard = styled.div`
   margin: 20px auto auto auto;
   width: 340px;
   height: 140px;
   background: #40C3D5 0% 0% no-repeat padding-box;
   box-shadow: 0px 3px 6px #00000029;
   border: 6px solid #008799;
   border-radius: 15px;
   opacity: 1;
`;

const InfoH2 = styled.h2`
   margin: 23px auto;
`;
//back card
const CardBack = styled.div`
   width: 375px;
   height: 600px;
   background: #00B5CC;
   border: 8px solid #00444D;
   border-radius: 10px;
   transform: translateZ(-1px) translate(-9px, -585px) rotateY(180deg);
   position: absolute;
`;
const BackCruz = styled.div`
   &::after {
    content: "";
    display: block;
    width: 20px;
    height: 3px;
    background-color: #FF3548;
    transform: rotate(90deg);
    position: absolute;
   }
   position: absolute;
    width: 20px;
    height: 3px;
    background-color: #FF3548;
    position: absolute;
    transform: translateZ(-1px) translate(1px, -2px) rotate(45deg);
`;
const ButtonExitBack = styled.button`
   &:hover{
      transition: all 0.45s;
      transform: scale(1.15) translate(-435px,-18px);
      box-shadow: -5px 5px 20px -10px red;
   }
   margin: 0px 0px 0px 318px;
   position: absolute;
   width: 43px;
    height: 43px;
    background: #B2DF28;
    border: 4.5px solid #00444D;
    border-radius: 50%;
    transform: translateZ(-1px) translate(-501px,-21px);
`;

export default function Card(props) {
   return (
      <ContainerAll>
         <DivMain>
            <ButtonExit onClick={props.onClose}>
               <Cruz></Cruz>
            </ButtonExit>
            <DivBackgroundTittle>
               <DivTittle>
                  <DivTittleH2>{props.name}</DivTittleH2>
               </DivTittle>
            </DivBackgroundTittle>
            <ImgCard  src={props.image} alt="" />
            <InfoCard>
               <InfoH2>{"Specie: " + props.species + "."}</InfoH2>
               <InfoH2>{"Gender: " + props.gender + "."}</InfoH2>
            </InfoCard>
            <CardBack>
               <ButtonExitBack onClick={props.onClose}>
                  <BackCruz></BackCruz>
               </ButtonExitBack>
               
               holaaa
            </CardBack>
         </DivMain>
      </ContainerAll>
   );
}