import React, { useState } from 'react'
import TimePicker from './TimePicker'
import { ref, uploadBytes } from '@firebase/storage'
import { db, storage } from '../../firebase'
import { v4 } from "uuid";
import { Timestamp, addDoc, collection, doc, setDoc } from '@firebase/firestore';
import { useNavigate } from 'react-router-dom';

const NEW_FORM_DATA = {
  title: "", description: "", location: "", imagePath: "",
  startTime: new Date(), endTime: new Date(), date: new Date().toISOString().split('T')[0]
}

const ManageEvents = ({data}) => {
  const [formData, setFormData] = useState(
    data ? {...data, date: data.startTime.toISOString().split('T')[0]} : NEW_FORM_DATA
  )
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

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)

    // form validation and then write to firestore and upload to storage
    if (isNaN(formData.startTime.getTime())) {
      alert("invalid start time")
      return
    }

    if (data) {
      setDoc(doc(db, `events/${data.id}`), {
        title: formData.title,
        description: formData.description,
        location: formData.location,
        endTime: Timestamp.fromDate(formData.endTime),
        startTime: Timestamp.fromDate(formData.startTime),
      }, { merge: true }).then(() => {
        setFormData(NEW_FORM_DATA)
        alert("event edited bruh")
        navigate('/events')
      }).catch(err => console.log(err))
    } else {
      const imageRef = ref(storage, `events/${formData.imagePath}`)
      uploadBytes(imageRef, file).then(async snapshot => {
        addDoc(collection(db, "events"), {
          title: formData.title,
          description: formData.description,
          location: formData.location,
          imagePath: formData.imagePath,
          endTime: Timestamp.fromDate(formData.endTime),
          startTime: Timestamp.fromDate(formData.startTime),
        }).then(() => {
          setFormData(NEW_FORM_DATA)
          alert("new event created bruh")
        })
      }).catch(err => console.log(err))
    }

  }

  return (
    <form name="eventForm" className='max-width-container' style={{gap: '2rem', display: 'flex', flexDirection: 'column'}}>
      <h4>{data ? "Edit Event" : "Create a New Event"}</h4>
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2rem'}}>
        <input
          type='text' name='title'
          placeholder='Title'
          value={formData.title}
          onChange={handleChange}
        />
        <input
          type='text' name='location'
          placeholder='Location'
          value={formData.location}
          onChange={handleChange}
        />
        {
          data ? 
            <input readOnly={true}
              type='text' value="Cannot upload new file"
            /> :
            <input
              type='file' name='image' onChange={handleFileUpload}
            /> 
        }
        <input
          type='date' name='date'
          placeholder='Date'
          value={formData.date}
          onChange={handleChange}
        />

        <textarea
          type='text' name='description'
          placeholder='Description'
          value={formData.description}
          onChange={handleChange}
        />

      </div>

      <div style={{display: 'flex', flexDirection: 'row', gap: '5rem'}}>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
          <p>Start Time</p>
          <TimePicker formData={formData} setFormData={setFormData} name={"startTime"} />
        </div>
        <div style={{display: 'flex', flexDirection: 'column', gap: '0.5rem'}}>
          <p>End Time</p>
          <TimePicker formData={formData} setFormData={setFormData} name={"endTime"} />
        </div>
      </div>
      <button type='button' onClick={handleSubmit} className='purple-gradient-button' style={{width: "12rem"}}><h4>{data ? "Save" : "Create"}</h4></button>
    </form>
  )
}

export default ManageEvents