import React from 'react'

const NavigationDots = ({ active }) => {
  return (
    <div className='app__navigation'>
        {['Home','About','Work','Skills','Contact', 'Testimonials'].map((item, i) => (
            // eslint-disable-next-line jsx-a11y/anchor-has-content
            <a 
            href={`#${item}`}
            key={ item + i }
            className="app__navigation-dot"
            style={active === item ? {backgroundColor: '#313BAC'}: {}}
            />
        ))}
    </div>
  )
}

export default NavigationDots