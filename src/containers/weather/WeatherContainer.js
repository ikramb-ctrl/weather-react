import React, {useState, useEffect, useContext, useRef, Fragment} from 'react'
import ForecastContainer from '../forecast/ForecastContainer'
import CurrentWeatherContainer from '../current-weather/CurrentWeatherContainer'
import {AddressContext} from '../../context/AddressContext'
import FetchWeatherData from '../../utils/FetchWeatherData'
import FormattedDateTime from './../../utils/FormattedDateTime'
import {ThemeContext} from '../../context/ThemeContext'
import {isUndefined, isEmpty} from 'lodash-es'
import LoaderComponent from '../../components/loader/LoaderComponent'

const WeatherContainer = () => {
  const addressContext = useContext(AddressContext)
  const {theme, colorTheme} = useContext(ThemeContext)

  const [weatherForecast, setWeatherForecast] = useState({})
  const [weatherCurrent, setWeatherCurrent] = useState({})
  const [formattedDateTime, setFormattedDateTime] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const previousLatLong = useRef('')

  const setWeatherData = (current, forecast) => {
    if (!isEmpty(current) && !isEmpty(forecast)) {
      setWeatherCurrent(weatherCurrent)
      setWeatherForecast(weatherForecast)
    }
  }

  const fetchWeatherData = async () => {
    setIsLoading(true)
    const {weatherCurrent, weatherForecast} = await FetchWeatherData(
      addressContext
    )
    // set the weatherCurrent and weatherForecast only when the data is non-empty
    // this way, the old fetched data can be preserved when api call fail or limit exceed
    setWeatherData(weatherCurrent, weatherForecast)
    const formattedString = await FormattedDateTime(addressContext.latlong)
    setFormattedDateTime(formattedString)
    setIsLoading(false)
  }

  useEffect(() => {
    const timer = setInterval(() => {
      fetchWeatherData()
    }, 3600000)

    if (previousLatLong.current !== addressContext.latlong) {
      fetchWeatherData()
    }
    previousLatLong.current = addressContext.latlong
    return () => {
      clearInterval(timer)
    }
    // eslint-disable-next-line
  }, [addressContext])

  return (
    <Fragment>
      {!isUndefined(weatherCurrent) && !isEmpty(weatherCurrent) ? (
        <Fragment>
          <div className={`flex justify-center px-5 py-10 bg-${theme}`}>
            <div
              className={`sm:w-full md:w-5/6 xl:w-1/2 border border-${colorTheme} bg-${theme} text-${colorTheme} rounded-t-2xl shadow-lg`}>
              <CurrentWeatherContainer
                weatherCurrent={weatherCurrent}
                address={addressContext.address}
                latlong={addressContext.latlong}
                urbanArea={addressContext.urbanArea}
                formattedDateTime={formattedDateTime}
              />
              <ForecastContainer
                cityName={addressContext.address.cityName}
                weatherForecast={weatherForecast}
                formattedDateTime={formattedDateTime}
              />
            </div>
          </div>
          <div className={`bg-${theme}`}>
            {addressContext.urbanArea.slug ? (
              <div className={`mx-auto text-center pb-5`}>
                <p>
                  <a
                    href={`https://teleport.org/cities/${addressContext.urbanArea.slug}`}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='hover:no-underline'>
                    <button
                      className={`bg-${colorTheme} text-${theme} font-bold py-3 px-6 rounded-full capitalize`}>
                      Explore life in {addressContext.urbanArea.name}
                    </button>
                  </a>
                </p>
                <p
                  className={`py-1 text-xs italic font-light text-${colorTheme}`}>
                  Powered by&nbsp;
                  <a
                    href='https://teleport.org/'
                    target='_blank'
                    rel='noreferrer noopener'
                    className={`hover:no-underline hover:font-medium hover:text-${colorTheme}`}>
                    Teleport
                  </a>
                </p>
              </div>
            ) : null}
          </div>
        </Fragment>
      ) : (
        <Fragment>
          {isLoading ? (
            <LoaderComponent
              loaderText={`Fetching weather forecast ${
                !isEmpty(addressContext.address.cityName)
                  ? `for ${addressContext.address.cityName}`
                  : null
              }`}
            />
          ) : null}
        </Fragment>
      )}
    </Fragment>
  )
}

export default WeatherContainer