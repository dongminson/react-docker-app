import React, {useState, useEffect} from 'react';
import Button from '@material-ui/core/Button';
import StopwatchDisplay from './StopwatchDisplay';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        width: 275,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    button: {
        margin: 10,
    }
});

export const formatTime = (val, ...rest) => {
    let value = val.toString();
    if (value.length < 2) {
        value = '0' + value;
    }
    if (rest[0] === 'ms' && value.length < 3) {
        value = '0' + value;
    }
    return value;
};

const Stopwatch = () => {
    const classes = useStyles();

    const [running, setRunning] = useState(false);
    const [currentTimeMs, setCurrentTimeMs] = useState(0);
    const [currentTimeSec, setCurrentTimeSec] = useState(0);
    const [currentTimeMin, setCurrentTimeMin] = useState(0);

    useEffect(() => {
        const pace = () => {
            setCurrentTimeMs(currentTimeMs + 10);
            if (currentTimeMs >= 1000) {
                setCurrentTimeSec(currentTimeSec + 1);
                setCurrentTimeMs(0);
            }
            if (currentTimeSec >= 60) {
                setCurrentTimeMin(currentTimeMin + 1);
                setCurrentTimeSec(0);
            }
        };
        let interval = null;
        if (running) {
          interval = setInterval(() => {
            pace();
          }, 10);
        } else {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [running, currentTimeMs, currentTimeSec, currentTimeMin]);

    const start = () => {
        if (!running) {
            setRunning(true);
        }
    };

    const stop = () => {
        setRunning(false);
    };

    const reset = () => {
        setCurrentTimeMin(0);
        setCurrentTimeMs(0);
        setCurrentTimeSec(0);
    };

    return (
      <Card className={classes.card}>
        <h2>Stopwatch</h2>

        <StopwatchDisplay
            currentTimeMin = {currentTimeMin}
            currentTimeMs = {currentTimeMs}
            currentTimeSec = {currentTimeSec}
            formatTime = {formatTime}
        />
        <div>
            {running === false && (
            <Button className={classes.button} onClick={start} variant="contained" color="primary" disableElevation>
                START
            </Button>
            )}
            {running === true && (
            <Button className={classes.button} onClick={stop} variant="contained" color="primary" disableElevation>
                STOP
            </Button>
            )}

            <Button className={classes.button} onClick={reset} variant="contained" color="primary" disableElevation>
                RESET
            </Button>
        </div>
      </Card>
    );

}

export default Stopwatch;