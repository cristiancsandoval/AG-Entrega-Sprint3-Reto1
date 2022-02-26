import React from 'react'
import { FeauturesSt } from '../style/styles'

const Feautures = () => {
  return (
    <FeauturesSt id='features'>
        <div>
            <div>
                <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560308/Fylo/icon-access-anywhere_ewoukb.svg" alt='accesibility icon'/>
                <h3>Access your files anywhere</h3>
                <p>The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560310/Fylo/icon-security_ei1li0.svg" alt='security icon'/>
                <h3>Security you can trust</h3>
                <p>2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
            </div>
        </div>
        <div>
            <div>
                <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560311/Fylo/icon-collaboration_yib2fo.svg" alt='time icon'/>
                <h3>Real-time collaboration</h3>
                <p>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
            </div>
            <div>
                <img src="https://res.cloudinary.com/dbzo53yx4/image/upload/v1645560308/Fylo/icon-any-file_qigzig.svg" alt='store icon'/>
                <h3>Store any type of file</h3>
                <p>Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
            </div>
        </div>
    </FeauturesSt>
  )
}

export default Feautures