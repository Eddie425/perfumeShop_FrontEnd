import React from 'react'

export default function colors({colors}) {

    return (
      <div className="color">
        {colors.map((color, index) => (
          <button style={{ background: color }} key={index}></button>
        ))}
      </div>
    );
}
