import { useState } from 'react';

const Player = ({ initialName, symbol, isActive, onChangeName }) => {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((oldValue) => !oldValue);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handlePlayerName(event) {
    setPlayerName(event.target.value);
  }

  let playerField = (
    <span className={!isEditing ? 'player-name' : ''}>{playerName}</span>
  );

  if (isEditing) {
    playerField = (
      <input
        type='text'
        required
        value={playerName}
        onChange={handlePlayerName}
      />
    );
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className='player'>
        {playerField}

        <span className='player-symbol'>{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};

export default Player;
