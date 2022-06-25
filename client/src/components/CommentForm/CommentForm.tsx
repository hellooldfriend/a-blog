import React, { useState } from 'react'
import type { FC } from 'react'

interface Props {
  onAdd: (value: string) => void;
  onCancel?: () => void;
}

const CommentForm: FC<Props> = ({
  onAdd,
  onCancel,
}) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <textarea
        rows={5}
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <div>
        <button onClick={onCancel}>Cancel</button>
        <button type="submit" onClick={() => onAdd('')}>Add</button>
      </div>

    </div>
  );
};

export default CommentForm
