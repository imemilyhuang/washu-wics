import React, { useState } from 'react'
import TimePicker from './TimePicker'
import { ref, uploadBytes } from '@firebase/storage'
import { db, storage } from '../../firebase'
import { v4 } from "uuid";
import { Timestamp, addDoc, collection } from '@firebase/firestore';

const EventEdit = () => {
  const [formData, setFormData] = useState({
    title: "", subtitle: "", host: "WiCS", description: "", imagePath: "",
    startTime: new Date(), endTime: new Date(), date: new Date().toISOString().split('T')[0]
  })

  const [file, setFile] = useState(null)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(prev => ({
      ...prev, [name]: value
    }))
  }

  const handleFileUpload = (e) => {
    setFile(e.target.files[0])
    setFormData(prev => ({
      ...prev, imagePath: v4()+e.target.files[0].name
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    // form validation and then write to firestore and upload to storage
    if (isNaN(formData.startTime.getTime())) {
      console.log("invalid start time")
    }

    // const imageRef = ref(storage, `events/${formData.imagePath}`)
    // uploadBytes(imageRef, file).then(async snapshot => {
    //   const newDocRef = await addDoc(collection(db, "cities"), {
    //     title: formData.title,
    //     subtitle: formData.subtitle,
    //     description: formData.description,
    //     endTime: Timestamp.fromDate(formData.endTime),
    //     startTime: Timestamp.fromDate(formData.startTime),
    //     host: formData.host,
    //     imagePath: formData.imagePath,
    //     location: formData.location,
    //   });

    //   console.log(newDocRef)
    // }).catch(err => console.log(err))
  }

  return (
    <form name="eventForm">
      <h4>Create a new event</h4>
      <input
        type='text' name='title'
        placeholder='Title'
        value={formData.title}
        onChange={handleChange}
      />
      <input
        type='text' name='subtitle'
        placeholder='Subtitle'
        value={formData.subtitle}
        onChange={handleChange}
      />
      <input
        type='text' name='description'
        placeholder='Description'
        value={formData.description}
        onChange={handleChange}
      />
      <input
        type='text' name='host'
        placeholder='Host'
        value={formData.host}
        onChange={handleChange}
      />
      <input
        type='file' name='image' onChange={handleFileUpload}
      />
      <input
        type='date' name='date'
        placeholder='Date'
        value={formData.date}
        onChange={handleChange}
      />

      <p>Start Time</p>
      <TimePicker formData={formData} setFormData={setFormData} name={"startTime"} />
      <p>End Time</p>
      <TimePicker formData={formData} setFormData={setFormData} name={"endTime"} />
      <button type='button' onClick={handleSubmit} className='learn-more-button' style={{width: "12rem"}}><p>Create</p></button>
    </form>
  )
}

export default EventEdit