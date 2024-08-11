import React, { useState } from 'react'
import "./Forms.scss"

const TimePicker = ({setFormData, formData, name}) => {
    // console.log(formData[name].toLocaleTimeString())

    const [hour, setHour] = useState(formData[name].toLocaleTimeString().split(":")[0]);
    const [minute, setMinute] = useState(formData[name].getMinutes());
    const [amPm, setAmPm] = useState(formData[name].toLocaleTimeString().split(" ")[1]);

    const updateTime = (h, m, ap) => {
        setFormData(prev => ({
            ...prev, [name]: new Date(`${formData.date} ${h}:${m} ${ap}`)
        }))
    }

    const handleHourChange = (event) => {
        const newHour = event.target.value;
        if (newHour >= 0 && newHour <= 12) {
            setHour(newHour);
            updateTime(newHour, minute, amPm)

            if (newHour>=2) {
                document.eventForm["min"+name].focus();
            }
        }
    };
    
    const handleMinuteChange = (event) => {
        const newMinute = event.target.value;
        if (newMinute >= 0 && newMinute <= 59) {
            setMinute(newMinute);
            updateTime(hour, newMinute, amPm)
            if (newMinute>=9) {
                document.eventForm["am"+name].focus();
            }
        }
    };
    
    const handleAmPmChange = (event) => {
        setAmPm(event.target.value);
        updateTime(hour, minute, event.target.value)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Delete' || event.key === 'Backspace') {
            if (event.target.value === '' || event.target.name==="am"+name || event.target.name==="pm"+name) {
                const previousInput = event.target.name==="hour"+name ? ""
                    : event.target.name==="min"+name ? "hour"+name
                        : event.target.name==="am"+name ? "min"+name
                            : "am"+name;
                if (previousInput) {
                    document.eventForm[previousInput].focus();
                }
                
            }
        } else if (event.key==='Enter') {
            if (event.target.name==="am"+name || event.target.name==="pm"+name) {
                handleAmPmChange(event)
            }
        }
    };

    return (
        <div className='time-picker'>
            <input
                type='number' maxLength={2} name={"hour"+name}
                placeholder='HH' pattern="\d*" 
                value={hour} className='bubble-left'
                onChange={handleHourChange}
                onKeyDown={handleKeyDown}
            />
            <input
                type='number' maxLength={2} name={"min"+name}
                placeholder='MM' pattern="\d*" 
                value={minute} className='bubble-right'
                onChange={handleMinuteChange}
                onKeyDown={handleKeyDown} style={{marginRight: "1rem"}}
            />

            <label className={`check-box left-box ${amPm === 'AM' && 'checked'}`}>
                <input
                    type="radio" onKeyDown={handleKeyDown}
                    value="AM" name={"am"+name}
                    checked={amPm === 'AM'}
                    onChange={handleAmPmChange}
                />
                AM
            </label>
            <label className={`check-box right-box ${amPm === 'PM' && 'checked'}`}>
                <input
                    type="radio" onKeyDown={handleKeyDown}
                    value="PM" name={"pm"+name}
                    checked={amPm === 'PM'}
                    onChange={handleAmPmChange}
                />
                PM
            </label>
        </div>
    )
}

export default TimePicker