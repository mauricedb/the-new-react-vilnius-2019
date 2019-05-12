import React, { useState, useEffect } from 'react';
import AnalogClock from '../../shared/analog-clock';

const ClockEffect = () => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const handle = setInterval(() => setNow(new Date()), 1000);

    return () => clearInterval(handle);
  }, []);

  return <AnalogClock time={now} />;
};

export default ClockEffect;
