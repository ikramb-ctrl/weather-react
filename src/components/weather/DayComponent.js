import React, {useContext} from 'react'
import {WeatherUnitContext} from '../../context/WeatherUnitContext'
import {ThemeContext} from '../../context/ThemeContext'
import {fToC} from '../../utils/TemperatureConvert'
import getWeatherIcon from '../../utils/WeatherIcon'
import FormatTime from './../../utils/FormatTime'
import {PropTypes} from 'prop-types'

const DayComponent = props => {
  const {day, index, selectedIndex} = props
  const {weatherUnit} = useContext(WeatherUnitContext)
  const {theme, colorTheme} = useContext(ThemeContext)

  /**
   * type can be 'High' or 'Low'
   * @param {String} type
   */
  const computedTempValue = type => {
    return weatherUnit === 'F'
      ? Math.round(day[`temperature${type}`])
      : fToC(day[`temperature${type}`])
  }

  const selectedDay = () => {
    props.selectedDay({day})
  }

  return (
    <div
      className={`sm:border-t sm:border-r sm:border-b-0 sm:border-l-0 sm:border-${colorTheme} sm:hover:bg-${colorTheme} sm:hover:text-${theme} items-center text-center sm:flex-1 sm:py-1 sm:pb-3 cursor-pointer ${
        index === selectedIndex ? `bg-${colorTheme} text-${theme}` : ''
      } transition-all duration-1000 ease-in-out`}
      onClick={selectedDay}>
      <div className='flex flex-row flex-no-wrap sm:flex-col sm:flex-wrap justify-around items-center px-2'>
        <p className='flex w-1/6 sm:w-full sm:justify-center text-base font-light sm:font-medium'>
          {FormatTime(day.time, day.timezone, 'ddd')}
        </p>
        {/* icon */}
        <div className='flex w-1/6 sm:w-full'>
          {getWeatherIcon(day).startsWith('wi') ? (
            <i
              title={day.summary}
              className={`sm:mt-1 sm:mb-3 mx-auto sm:text-2xl wi wi-${getWeatherIcon(
                day
              )}`}></i>
          ) : (
            <img
              src={`./weather/${getWeatherIcon(day)}.svg`}
              alt='icon'
              title={day.summary}
              className='sm:-mt-3 sm:-mb-1 mx-auto w-12 h-12 sm:w-16 sm:h-16 object-contain'
            />
          )}
        </div>
        {/* high & low */}
        <div className='flex flex-row justify-center items-center font-light w-1/4 sm:w-full'>
          <p className='mx-2 text-sm'>
            {computedTempValue('High')}
            <sup>o</sup>
          </p>
          <p className='mx-2 mt-1 text-xs'>
            {computedTempValue('Low')}
            <sup>o</sup>
          </p>
        </div>
        {/* sunrise & sunset */}
        <div
          className={`${
            index === selectedIndex ? 'flex' : 'flex'
          } flex-row justify-around sm:justify-center sm:flex sm:flex-col w-5/12 sm:w-full font-light mt-1`}>
          <div className='flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm'>
            <i className='wi wi-sunrise text-sun mr-2' title='sunrise'></i>
            <p>{FormatTime(day.sunriseTime, day.timezone, 'h:mm')}</p>
          </div>
          <div className='flex flex-row justify-center items-center mx-2 sm:my-1 text-xs sm:text-sm'>
            <i className='wi wi-sunset text-sun mr-1' title='sunset'></i>
            <p>{FormatTime(day.sunsetTime, day.timezone, 'HH:mm')}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DayComponent

DayComponent.propTypes = {
  day: PropTypes.object,
  selectedDay: PropTypes.func,
  index: PropTypes.string,
  selectedIndex: PropTypes.string
}
