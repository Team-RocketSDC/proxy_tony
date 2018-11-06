import React from 'react';
import styled from 'styled-components';
import FullMenuItem from './FullMenuItem.jsx';


const MainDiv = styled.div`
  font-family: arial;
  overflow: scroll;

  .modal{
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: auto;
    background: rgba(0, 0, 0, 0.6);
  }

  .closeButton{
    font-size: 10px;
    position: fixed;
    right: 0px;
    margin-right: 10%;
    padding-top: 1%;
    color: white;
    font-weight: bold;
  }

  .rowAcrossTop{
    background: rgba(20, 20, 20, 0);
    width: 100%;
    height: 20px;
  }

  .display-block{
    display: block;
  }

  .display-none{
    display: none;
  }

  .modal-main {
    position:fixed;
    background: rgba(20, 20, 20, 0.75);
    z-index: 1000;
    width: 100%;
    height: auto;
    overflow: scroll;
    top: 1%;
    bottom: 1%;
    left:50%;
    transform: translate(-50%);
  }
  

  .menuTitle {
    text-align: left;
    vertical-align: bottom;
    font-size: 18px;
    color: #333333;
    font-family: verdana;
    font-weight: bold;
  }

  .modalContent {
    margin-left: 10%;
    margin-right: 10%;
    padding: 5%;
    position: relative;
    z-index: 1001;
    background: white;
  }
`;
MainDiv.displayName = 'MainDiv';

const Modal = ({ handleClose, show, restaurantName, fullMenu }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <MainDiv className={showHideClassName}>
      <section className="modal-main">
        <div className="rowAcrossTop">
          <div className="closeButton" onClick={handleClose}>Close X</div>
        </div>
        <div className="modalContent">
          <p className="menuTitle">Menu for {restaurantName[0].toUpperCase() + restaurantName.slice(1)}</p>
          <div className='MenuItemsContainer'>
            {fullMenu.map(menuItem => (
              <FullMenuItem menuItem={menuItem} key={menuItem.id} id={menuItem.id} className="fullMenucontainer" />)
            )}
          </div>
        </div>
      </section>
    </MainDiv>
  );
};

export default Modal;