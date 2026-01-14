import { useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const SCROLL_DELAY = 140;

const scrollTo = (sectionId) => {
  if (!sectionId || sectionId === 'home') {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  const target = document.getElementById(sectionId);
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

export const useSectionNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return useCallback(
    (sectionId) => {
      const executeScroll = () => scrollTo(sectionId);

      if (location.pathname !== '/') {
        navigate('/');
        setTimeout(executeScroll, SCROLL_DELAY);
        return;
      }

      executeScroll();
    },
    [location.pathname, navigate],
  );
};
