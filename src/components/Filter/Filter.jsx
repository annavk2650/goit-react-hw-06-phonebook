import React from 'react';
import { LableFilter, InputFilter } from './Filter.styled';
import { changeFilter } from 'redux/formSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleChange = evt => {
    const { value } = evt.target;
    dispatch(changeFilter(value));
  };

  return (
    <LableFilter>
      Find contacts by name
      <InputFilter type="text" value={filter} onChange={handleChange} />
    </LableFilter>
  );
};
