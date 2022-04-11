import { dayNameByDate } from './helpers/nameOfDay'

const WeatherTable = props => (
  <>
    {
      Object.keys(props).length === 0 ?
        (<h1>Loading</h1>)
          :
        (<svg id="mainwidget" width="990" height="200" x="0" y={0}
              xmlnsXlink="http://www.w3.org/2000/svg"
              xlinkHref="http://www.w3.org/1999/xlink">
          <g>
            <g className="currentWeather">
              <rect x="0" y="0" width="150" height="200" className="left"/>
              <rect x="0" y="0" width="150" height="65" className="currentDate"/>
              <rect x="0" y="65" width={150} height={35} className="day"/>
              <text x={25} y={91} className="currentDayText">{props.daily.time[0]}</text>
              <text x="30" y="41"
                    className="currentDateTextMain">{props.current_weather.time && dayNameByDate(props.current_weather.time)}</text>
              <text x="30" y="160" className="currentDateTextMain1">
                {`${props.current_weather.temperature} ${props.daily_units.temperature_2m_max}`}
              </text>
            </g>
            <g>
              <rect x="151" y="0" width="785" height="65" className="titleLine"/>
              <text x="360" y="41" className="titleLineText">7-Day Weather Forecast</text>
            </g>
            <g>
              <rect x="151" y="65" width={130} height={135} className="dayBlock"/>
              <rect x="151" y="65" width={130} height={35} className="day"/>
              <text x={170} y={91} className="currentDayText">{props.daily.time[1]}</text>
              <text x="156" y="130" className="currentDateText">
                {`Min: ${props.daily.temperature_2m_min[1]} ${props.daily_units.temperature_2m_min}`}
              </text>
              <text x="156" y="170" className="currentDateText">
                {`Max: ${props.daily.temperature_2m_max[1]} ${props.daily_units.temperature_2m_max}`}
              </text>
            </g>
            <g>
              <rect x="282" y="65" width={130} height={135} className="dayBlock"/>
              <rect x="282" y="65" width={130} height={35} className="day"/>
              <text x={300} y={91} className="currentDayText">{props.daily.time[2]}</text>
              <text x="287" y="130" className="currentDateText">
                {`Min: ${props.daily.temperature_2m_min[2]} ${props.daily_units.temperature_2m_min}`}
              </text>
              <text x="287" y="170" className="currentDateText">
                {`Max: ${props.daily.temperature_2m_max[2]} ${props.daily_units.temperature_2m_max}`}
              </text>
            </g>
            <g>
              <rect x="413" y="65" width={130} height={135} className="dayBlock"/>
              <rect x="413" y="65" width={130} height={35} className="day"/>
              <text x={430} y={91} className="currentDayText">{props.daily.time[3]}</text>
              <text x="418" y="130" className="currentDateText">
                {`Min: ${props.daily.temperature_2m_min[3]} ${props.daily_units.temperature_2m_min}`}
              </text>
              <text x="418" y="170" className="currentDateText">
                {`Max: ${props.daily.temperature_2m_max[3]} ${props.daily_units.temperature_2m_max}`}
              </text>

            </g>
            <g>
              <rect x="544" y="65" width={130} height={135} className="dayBlock"/>
              <rect x="544" y="65" width={130} height={35} className="day"/>
              <text x={560} y={91} className="currentDayText">{props.daily.time[4]}</text>
              <text x="549" y="130" className="currentDateText">
                {`Min: ${props.daily.temperature_2m_min[4]} ${props.daily_units.temperature_2m_min}`}
              </text>
              <text x="549" y="170" className="currentDateText">
                {`Max: ${props.daily.temperature_2m_max[4]} ${props.daily_units.temperature_2m_max}`}
              </text>
            </g>
            <g>
              <rect x="675" y="65" width={130} height={135} className="dayBlock"/>
              <rect x="675" y="65" width={130} height={35} className="day"/>
              <text x={690} y={91} className="currentDayText">{props.daily.time[5]}</text>
              <text x="680" y="130" className="currentDateText">
                {`Min: ${props.daily.temperature_2m_min[5]} ${props.daily_units.temperature_2m_min}`}
              </text>
              <text x="680" y="170" className="currentDateText">
                {`Max: ${props.daily.temperature_2m_max[5]} ${props.daily_units.temperature_2m_max}`}
              </text>
            </g>

            <g>
              <rect x="806" y="65" width={130} height={135} className="dayBlock"/>
              <rect x="806" y="65" width={130} height={35} className="day"/>
              <text x={820} y={91} className="currentDayText">{props.daily.time[6]}</text>
              <text x="811" y="130" className="currentDateText">
                {`Min: ${props.daily.temperature_2m_min[6]} ${props.daily_units.temperature_2m_min}`}
              </text>
              <text x="811" y="170" className="currentDateText">
                {`Max: ${props.daily.temperature_2m_max[6]} ${props.daily_units.temperature_2m_max}`}
              </text>
            </g>
            <rect x="150" y="0" width="1" height="200" fill="white"/>
            <rect x="0" y="65" width="935" height="2" fill="white"/>
          </g>
        </svg>)
    }
  </>
)

export default WeatherTable;