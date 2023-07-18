import React, { useState, useEffect } from 'react';
import Toggle from '../../../components/ToggleSwitch';
import { useDispatch } from 'react-redux';
import { toggleDarkMode } from '../../../redux/features/theme/darkModeSlice';

function DarkMode() {
  const storedDarkMode = localStorage.getItem('darkMode');
  const [enabled, setEnabled] = useState(storedDarkMode === 'true');
  const dispatch = useDispatch();

  const handleDarkChange = (newMode) => {
    dispatch(toggleDarkMode(newMode));
  };

  useEffect(() => {
    localStorage.setItem('darkMode', enabled);
  }, [enabled]);

  return (
    <Toggle
      handleChange={() => {
        const newMode = !enabled;
        handleDarkChange(newMode);
        setEnabled(newMode);
      }}
      enabled={enabled}
    />
  );
}

export default DarkMode;