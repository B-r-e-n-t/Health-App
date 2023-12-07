import React from 'react'
import './DataEntry.css'

export const DataEntry = () => {
  return (
    <div>
        <div className='data-wrapper'>
            <div className='top-buttons'>
                <div className='top-button'>
                    <p>New Log</p>
                </div>
                <div className='top-button'>
                    <p>Latest</p>
                </div>
                <div className='top-button'>
                    <p>New Note</p>
                </div>
            </div>
            <div className='enter-data-wrapper'>
                <div className='data-category'>
                    <div className='data-info'>
                        <h4 className='data-title'>
                            WEIGHT
                        </h4>
                        <p className='data-par'>
                            LOG TODAY'S WEIGHT <br /> WE'LL ADJUST IT FOR YOU
                        </p>
                    </div>
                    <div className='score-input-wrapper'>
                        <input className='score-input' type="text" />
                    </div>
                    <div className='score-input-wrapper emoji-bg'>
                        <img className='emoji' src="src/assets/fire.png" alt="" />
                    </div>
                </div>
                <div className='data-category'>
                    <div className='data-info'>
                        <h4 className='data-title'>
                            WEIGHT
                        </h4>
                        <p className='data-par'>
                            LOG TODAY'S WEIGHT <br /> WE'LL ADJUST IT FOR YOU
                        </p>
                    </div>
                    <div className='score-input-wrapper'>
                        <input className='score-input' type="text" />
                    </div>
                    <div className='score-input-wrapper emoji-bg'>
                        <img className='emoji' src="src/assets/fire.png" alt="" />
                    </div>
                </div>
                <div className='data-category'>
                    <div className='data-info'>
                        <h4 className='data-title'>
                            WEIGHT
                        </h4>
                        <p className='data-par'>
                            LOG TODAY'S WEIGHT <br /> WE'LL ADJUST IT FOR YOU
                        </p>
                    </div>
                    <div className='score-input-wrapper'>
                        <input className='score-input' type="text" />
                    </div>
                    <div className='score-input-wrapper emoji-bg'>
                        <img className='emoji' src="src/assets/fire.png" alt="" />
                    </div>
                </div>
                <div className='data-category'>
                    <div className='data-info'>
                        <h4 className='data-title'>
                            WEIGHT
                        </h4>
                        <p className='data-par'>
                            LOG TODAY'S WEIGHT <br /> WE'LL ADJUST IT FOR YOU
                        </p>
                    </div>
                    <div className='score-input-wrapper'>
                        <input className='score-input' type="text" />
                    </div>
                    <div className='score-input-wrapper emoji-bg'>
                        <img className='emoji' src="src/assets/fire.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DataEntry
