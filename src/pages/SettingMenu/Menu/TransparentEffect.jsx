import React, { useState, useEffect } from 'react';
import Toggle from '../../../components/ToggleSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { toggleTransparentEffectMode } from '../../../redux/features/theme/TransparentEffectSlice';

function TransparentEffect() {
  const [enabled, setEnabled] = useState(true); 
  const dispatch = useDispatch();
  const transparentEffectEnabled = useSelector((state) => state.TransparentEffect.TransparentEffect);

  useEffect(() => {
    setEnabled(transparentEffectEnabled);
  }, [transparentEffectEnabled]);

  const handleTransparentChange = () => {
    const newMode = !enabled;
    dispatch(toggleTransparentEffectMode(newMode));
    setEnabled(newMode);
  };

  useEffect(() => {
    localStorage.setItem('TransparentEffect', enabled);
  }, [enabled]);

  return (
    <Toggle
      handleChange={handleTransparentChange}
      enabled={enabled}
    />
  );
}

export default TransparentEffect;
