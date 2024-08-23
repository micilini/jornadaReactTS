import React from 'react';
import { Status } from '../enums/StateEnum';

// Define o tipo para as props do componente
interface StatusBadgeProps {
  status: Status;
}

// Define as cores para cada status
const statusColors: Record<Status, string> = {
  [Status.Success]: 'green',
  [Status.Warning]: 'yellow',
  [Status.Error]: 'red',
};

// Componente StatusBadge
const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <span
      style={{
        padding: '0.5em 1em',
        borderRadius: '4px',
        backgroundColor: statusColors[status],
        color: 'white',
        fontWeight: 'bold',
      }}
    >
      {status}
    </span>
  );
};

export default StatusBadge;