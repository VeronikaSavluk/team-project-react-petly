import React, { useState, useEffect } from 'react';

import {
  AddButtonConteiner,
  AddButtonsCancel,
  AddButtonsNext,
  NoticeButton,
  NoticeConteinerButton,
  NoticeConteinerButtonNested,
} from 'components/modalAddNotice/buttonForm/ButtonForm.styled';

const ButtonFormNextCancel = ({ setIsOpen }) => {
  return (
    <AddButtonConteiner>
      <AddButtonsCancel
        onClick={() => {
          setIsOpen(false);
          localStorage.removeItem('prev');
        }}
        type="button"
      >
        Cancel
      </AddButtonsCancel>
      <AddButtonsNext type="submit">Next</AddButtonsNext>
    </AddButtonConteiner>
  );
};

const ButtonNoticeForm = ({ setIsUseSell }) => {
  const [isActiveBtn, setIsActiveBtn] = useState(
    JSON.parse(localStorage.getItem('btn')) || { sell: true }
  );

  useEffect(() => {
    if (localStorage.getItem('btn') !== null) {
      const keys = Object.keys(JSON.parse(localStorage.getItem('btn')));

      if (!keys.includes('sell')) {
        setIsUseSell(false);
      }
    }
  }, [setIsUseSell]);

  const handleUsePrice = () => {
    setIsUseSell(true);
  };

  const handleUseGoodHands = () => {
    setIsUseSell(false);
  };

  return (
    <NoticeConteinerButton>
      <NoticeConteinerButtonNested>
        <NoticeButton
          type="button"
          onClick={() => {
            setIsActiveBtn({ 'lost-found': true });
            handleUseGoodHands();

            localStorage.setItem('btn', JSON.stringify({ 'lost-found': true }));
          }}
          active={isActiveBtn['lost-found'] || false}
        >
          lost/found
        </NoticeButton>
      </NoticeConteinerButtonNested>
      <NoticeButton
        type="button"
        onClick={() => {
          setIsActiveBtn({ 'in-good-hands': true });

          localStorage.setItem(
            'btn',
            JSON.stringify({ 'in-good-hands': true })
          );

          handleUseGoodHands();
        }}
        active={isActiveBtn['in-good-hands'] || false}
      >
        In good hands
      </NoticeButton>

      <NoticeButton
        type="button"
        onClick={() => {
          setIsActiveBtn({ sell: true });

          localStorage.setItem('btn', JSON.stringify({ sell: true }));

          handleUsePrice();
        }}
        active={isActiveBtn['sell'] || false}
      >
        sell
      </NoticeButton>
    </NoticeConteinerButton>
  );
};

const ButtonFormDoneCancel = ({ step, setIsErrorFile }) => {
  return (
    <AddButtonConteiner>
      <AddButtonsCancel onClick={() => step(false)} type="button">
        Back
      </AddButtonsCancel>
      <AddButtonsNext type="submit" onClick={() => setIsErrorFile(true)}>
        Done
      </AddButtonsNext>
    </AddButtonConteiner>
  );
};

export { ButtonFormNextCancel, ButtonNoticeForm, ButtonFormDoneCancel };
