import React, { useRef, useEffect } from 'react'
import { mount } from 'marketing/MarketingApp'

export default function MarketingApp() {
  const ref = useRef(null)

  useEffect(() => {
    mount(ref.current)
  }, [])

  return (
    <>
      <h1>Container</h1>
      <div ref={ref} />
    </>
  )
}
