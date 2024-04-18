import React from 'react'
import GaugeComponent from 'react-gauge-component'
export default function Gauge({ lastKnownTemperature}) {
    return (
        <GaugeComponent
            type="semicircle"
            arc={{
                colorArray: ['#00FF15', '#FF2121'],
                padding: 0.02,
                subArcs:
                    [
                        { range: 1-25 },
                        { value: 25 },
                        { value: 25 },
                        { value: 25 },
                    ]
            }}
            labels={{
                valueLabel: { formatTextValue: value => value + 'ºC' },
                tickLabels: {
                    type: 'outer',
                    valueConfig: { formatTextValue: value => value + 'ºC', fontSize: 10 },
                    ticks: [
                        { limit: 25 },
                        { limit: 25 },
                        { limit: 25 },
                        { limit: 25 },
                    ],
                }
            }}
            pointer={{ type: "blob", animationDelay: 0 }}
            value={lastKnownTemperature}
        />
    )
}
