import React from 'react'

export const lighting = () => {
  return (
    <>          
      <ambientLight intensity={0.5} />
      <directionalLight
        position={[5, 10, 7.5]}
      intensity={1}
    />  
    </>
  )
}

export default lighting;