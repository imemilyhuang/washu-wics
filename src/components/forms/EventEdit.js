import React, { useState } from 'react'
import TimePicker from './TimePicker'
import { ref, uploadBytes } from '@firebase/storage'
import { db, storage } from '../../firebase'
import { v4 } from "uuid";
import { Timestamp, addDoc, collection } from '@firebase/firestore';

const EventEdit = () => {
  const [formData, setFormData] = useState({
    title: "", subtitle: "", host: "WiCS", description: "", location: "", imagePath: "",
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

    const imageRef = ref(storage, `events/${formData.imagePath}`)
    uploadBytes(imageRef, file).then(async snapshot => {
      const newDocRef = await addDoc(collection(db, "events"), {
        title: formData.title,
        subtitle: formData.subtitle,
        description: formData.description,
        endTime: Timestamp.fromDate(formData.endTime),
        startTime: Timestamp.fromDate(formData.startTime),
        host: formData.host,
        imagePath: formData.imagePath,
        location: formData.location,
      });

      console.log(newDocRef)
    }).catch(err => console.log(err))
  }

  return (
    <form name="eventForm">
      <h4>Create a New Event</h4>
      <input
        type='text' name='title'
        placeholder='Title'
        value={formData.title}
        onChange={handleChange}
        className="input"
      />
      <input
        type='text' name='subtitle'
        placeholder='Subtitle'
        value={formData.subtitle}
        onChange={handleChange}
        className="input"
      />
      <input
        type='text' name='description'
        placeholder='Description'
        value={formData.description}
        onChange={handleChange}
        className="input"
      />
      <input
        type='text' name='location'
        placeholder='Location'
        value={formData.location}
        onChange={handleChange}
        className="input"
      />
      <input
        type='text' name='host'
        placeholder='Host'
        value={formData.host}
        onChange={handleChange}
        className="input"
      />
      <input
        type='file' name='image' onChange={handleFileUpload}
        className="input"
      />
      <input
        type='date' name='date'
        placeholder='Date'
        value={formData.date}
        onChange={handleChange}
        className="input margin-bottom-42"
      />

      <p className="margin-bottom-1">Start Time</p>
      <div className="margin-bottom-21">
        <TimePicker formData={formData} setFormData={setFormData} name={"startTime"} />
      </div>
      <p className="margin-bottom-1">End Time</p>
      <div className="margin-bottom-21">
        <TimePicker formData={formData} setFormData={setFormData} name={"endTime"} />
      </div>
      <button type='button' onClick={handleSubmit} className='purple-gradient-button' style={{width: "12rem"}}><h4>Create</h4></button>
    </form>
  )
}

export default EventEdit