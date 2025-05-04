import { useEffect, useState } from "react";
import { useCountryDetail } from "../../Providers/CountryDetailProvider";
import { useNavigate } from "react-router-dom";
import { bringCountryByName } from "../../services/apiCalls";
import { CountryDetail as CountryType } from "../../Providers/CountryType";
import './CountryDetail.css';

const CountryDetail = () => {
  const { selectedCountry } = useCountryDetail();
  const [countryDetail, setCountryDetail] = useState<CountryType | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchCountry = async () => {
      if (selectedCountry?.name.common) {
        try {
          const response = await bringCountryByName(selectedCountry.name.common);
          setCountryDetail(response.data[0]);
        } catch (error) {
          console.error("Error fetching country details:", error);
        }
      }
    };

    fetchCountry();
  }, [selectedCountry]);

  if (!countryDetail) {
    return <div>Loading country details...</div>;
  }

  const {
    name,
    flags,
    population,
    region,
    subregion,
    capital,
    languages,
    currencies,
    timezones,
    borders,
    continents,
    area,
    maps,
  } = countryDetail;

  return (
    <div className="country-detail-container">
      <h1 className="country-title">{name.common}</h1>
      <img
        src={flags.png}
        alt={flags.alt || `Flag of ${name.common}`}
        className="country-flag"
      />
      <p><strong>Official Name:</strong> {name.official}</p>
      <p><strong>Population:</strong> {population.toLocaleString()}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Subregion:</strong> {subregion}</p>
      <p><strong>Capital:</strong> {capital?.join(', ')}</p>
      <p><strong>Languages:</strong> {languages && Object.values(languages).join(', ')}</p>
      <p><strong>Currencies:</strong> {currencies && Object.values(currencies).map(c => `${c.name} (${c.symbol})`).join(', ')}</p>
      <p><strong>Timezones:</strong> {timezones?.join(', ')}</p>
      <p><strong>Continents:</strong> {continents?.join(', ')}</p>
      <p><strong>Area:</strong> {area.toLocaleString()} km²</p>
      <p><strong>Borders:</strong> {borders?.join(', ') || "None"}</p>
      <p><strong>Map:</strong> <a href={maps?.googleMaps} target="_blank" rel="noopener noreferrer">Google Maps</a></p>

      <button className="explore-button" onClick={() => navigate('/Explore')}>
        Back to Explorer
      </button>
    </div>
  );
};

export default CountryDetail;
