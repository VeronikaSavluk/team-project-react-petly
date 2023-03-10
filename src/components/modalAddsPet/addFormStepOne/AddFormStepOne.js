import React, { useState } from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';

import {
  AddErrorMessageGlobal,
  FormGlobal,
  InputGlobal,
  LabelGlobal,
  TextGlobal,
} from 'components/modalAddNotice/GlobalForm.styled';

import { ButtonFormNextCancel } from 'components/modalAddNotice/buttonForm/ButtonForm';
import { NoticeReqiredSymbol } from 'components/modalAddNotice/GlobalForm.styled';

import { dateFn, regexDate, textMatch } from 'components/modalAddsPet/helpers';

const schema = Yup.object().shape({
  name: Yup.string()
    .min(2)
    .max(16)
    .matches(textMatch, 'Incorrect symbol!')
    .required('Field required!'),
  breed: Yup.string().min(2).max(16).required('Field required!'),
  date: Yup.string()
    .transform(dateFn)
    .matches(
      regexDate,
      'Date should be a (DD.MM.yyyy) after 1900-01-01 and before today!'
    )
    .required('Field required!'),
});

const StepOne = ({ step, state, setIsOpen }) => {
  const [prevDate] = useState(
    JSON.parse(localStorage.getItem('prev')) || {
      name: '',
      date: '',
      breed: '',
    }
  );

  const handleSubmit = (values, action) => {
    localStorage.setItem('prev', JSON.stringify(values));

    state(prev => ({ ...prev, ...values }));
    step(true);
    action.resetForm();
  };

  return (
    <>
      <TextGlobal>Add pet</TextGlobal>

      <Formik
        initialValues={prevDate || { name: '', date: '', breed: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        {({ touched, errors }) => (
          <FormGlobal>
            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                <div>
                  Name pet<NoticeReqiredSymbol>*</NoticeReqiredSymbol>
                </div>

                <InputGlobal placeholder="Enter name pet" name="name" />
              </LabelGlobal>
              {touched.name && errors.name && (
                <AddErrorMessageGlobal>{errors?.name}</AddErrorMessageGlobal>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                <div>
                  Date of birth<NoticeReqiredSymbol>*</NoticeReqiredSymbol>
                </div>

                <InputGlobal placeholder="Enter date of birth" name="date" />
              </LabelGlobal>
              {touched.date && errors.date && (
                <AddErrorMessageGlobal>{errors?.date}</AddErrorMessageGlobal>
              )}
            </div>
            <div style={{ position: 'relative' }}>
              <LabelGlobal>
                <div>
                  Breed<NoticeReqiredSymbol>*</NoticeReqiredSymbol>
                </div>

                <InputGlobal placeholder="Enter breed" name="breed" />
              </LabelGlobal>
              {touched.breed && errors.breed && (
                <AddErrorMessageGlobal>
                  {errors?.breed || 'Errors'}
                </AddErrorMessageGlobal>
              )}
            </div>

            <ButtonFormNextCancel setIsOpen={setIsOpen} />
          </FormGlobal>
        )}
      </Formik>
    </>
  );
};

export { StepOne };
