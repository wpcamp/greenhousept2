import './LightSwitch.css';
import {useTheme} from '../../context/ThemeContext'

function LightSwitch() {
  const {themeName, setThemeName} = useTheme()
  return (
    <div className={`light-switch ${themeName}`}>
      <div className="on">
      <button onClick={() => {
          setThemeName('day')
        }}>
          DAY
        </button>
      </div>
      <div className="off">
        <button onClick={() => {
          setThemeName('night')
        }}>
          NIGHT
        </button>
      </div>
    </div>
  );
}

export default LightSwitch;