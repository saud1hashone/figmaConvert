import * as React from 'react';

interface ToggleButtonProps {
  isOn: boolean;
  onToggle: () => void;
  label?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  isOn,
  onToggle,
  label
}) => {
  return (
    <div className="flex items-center gap-2">
      {label && (
        <span className="text-sm font-medium">{label}</span>
      )}
      <button
        onClick={onToggle}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isOn ? 'bg-blue-600' : 'bg-gray-200'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
            isOn ? 'translate-x-6' : 'translate-x-1'
          }`}
        />
      </button>
    </div>
  );
}; 