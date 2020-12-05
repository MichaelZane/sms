import React from 'react'

const SmsForm = () => {
  return (
    <form>
        <div>
          <label htmlFor="to">To:</label>
          <input
             type="tel"
             name="to"
             id="to"
          />
        </div>
        <div>
          <label htmlFor="body">Body:</label>
          <textarea name="body" id="body"/>
        </div>
        <button type="submit">
          Send message
        </button>
        </form>
  )
}

export default SmsForm
