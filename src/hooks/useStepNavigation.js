import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useStepNavigation = (initialStep = 0, totalSteps = 4) => {
  const [step, setStep] = useState(initialStep);
  const [viewingItem, setViewingItem] = useState(null);
  const [selectedReward, setSelectedReward] = useState(null);
  const navigate = useNavigate();

  const handleNext = (onComplete) => {
    if (step === totalSteps - 1) {
      if (onComplete) {
        onComplete();
      }
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = (customBackHandlers = {}) => {
    if (customBackHandlers[step]) {
      customBackHandlers[step]();
    } else if (step === 0) {
      navigate(-1);
    } else {
      setStep(step - 1);
    }
  };

  const goToStep = (targetStep) => {
    if (targetStep >= 0 && targetStep < totalSteps) {
      setStep(targetStep);
    }
  };

  return {
    step,
    setStep,
    viewingItem,
    setViewingItem,
    selectedReward,
    setSelectedReward,
    handleNext,
    handleBack,
    goToStep,
    isFirstStep: step === 0,
    isLastStep: step === totalSteps - 1,
  };
};
