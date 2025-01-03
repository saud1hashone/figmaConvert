import { useState } from 'react';
import { ToggleButton } from './ui/ToggleButton';

export const Example = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="p-4">
      <ToggleButton
        isOn={isEnabled}
        onToggle={() => setIsEnabled(!isEnabled)}
        label="Toggle me"
      />
    </div>
  );
}; 