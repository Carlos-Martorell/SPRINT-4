export interface Weather {
    metadata: Metadata;
    units:    Units;
    data_1h:  Data1H;
    data_day: DataDay;
}

export interface Data1H {
    time:                      string[];
    snowfraction:              number[];
    windspeed:                 number[];
    temperature:               number[];
    precipitation_probability: number[];
    convective_precipitation:  number[];
    rainspot:                  string[];
    pictocode:                 number[];
    felttemperature:           number[];
    precipitation:             number[];
    isdaylight:                number[];
    uvindex:                   number[];
    relativehumidity:          number[];
    sealevelpressure:          number[];
    winddirection:             number[];
}

export interface DataDay {
    time:                      Date[];
    temperature_instant:       number[];
    precipitation:             number[];
    predictability:            number[];
    temperature_max:           number[];
    sealevelpressure_mean:     number[];
    windspeed_mean:            number[];
    precipitation_hours:       number[];
    sealevelpressure_min:      number[];
    pictocode:                 number[];
    snowfraction:              number[];
    humiditygreater90_hours:   number[];
    convective_precipitation:  number[];
    relativehumidity_max:      number[];
    temperature_min:           number[];
    winddirection:             number[];
    felttemperature_max:       number[];
    indexto1hvalues_end:       number[];
    relativehumidity_min:      number[];
    felttemperature_mean:      number[];
    windspeed_min:             number[];
    felttemperature_min:       number[];
    precipitation_probability: number[];
    uvindex:                   number[];
    indexto1hvalues_start:     number[];
    rainspot:                  string[];
    temperature_mean:          number[];
    sealevelpressure_max:      number[];
    relativehumidity_mean:     number[];
    predictability_class:      number[];
    windspeed_max:             number[];
}

export interface Metadata {
    modelrun_updatetime_utc: string;
    name:                    string;
    height:                  number;
    timezone_abbrevation:    string;
    latitude:                number;
    modelrun_utc:            string;
    longitude:               number;
    utc_timeoffset:          number;
    generation_time_ms:      number;
}

export interface Units {
    predictability:            string;
    precipitation:             string;
    windspeed:                 string;
    precipitation_probability: string;
    relativehumidity:          string;
    temperature:               string;
    time:                      string;
    pressure:                  string;
    winddirection:             string;
}
