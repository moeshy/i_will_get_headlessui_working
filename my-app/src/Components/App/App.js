import { useState } from 'react'
import { Switch } from '@headlessui/react'
import MyModal from '../Model'
export default function App() {
  const [enabled, setEnabled] = useState(false)

  return (
    <div>
      <h1 id= "title">Hello Headless UI</h1>
        <MyModal></MyModal>
    </div>
  )
}
