import React, { useState } from 'react';
import styled from 'styled-components';

function UrlShortener() {
  const [url, setUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const handleSubmitLink = async (e) => {
    e.preventDefault();

    // Request
    setLoading(true);
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();

    // Errors
    if (data.error) {
      switch(data.error_code) {
        case 1:
          setError('Please add a link.');
          break;
        case 2:
          setError('The URL is invalid.');
          break;
        case 3:
          setError('Rate limit reached. Wait a second and try again.');
          break;
        default:
          setError('Sorry, we could not shorten that link.')
      }
      setLoading(false);
      return;
    }

    /* If there are no errors:
    - Shorten the link and add it to the shortened links array.
    - Set loading to false so that the user may submit a new link.
    - Reset the url input.
    */
    setShortUrls([
      ...shortUrls,
      { short_url: data.result.full_short_link, original_url: data.result.original_link },
    ]);
    setLoading(false);
    setUrl('');
  };

  return (
    <>
      <form onSubmit={handleSubmitLink}>
        <input type='text' value={url} onChange={(e) => setUrl(e.target.value)} />
        <button type='submit' disabled={loading}>Shorten it!</button>
        <div>{error}</div>
      </form>

      <ul>
        {shortUrls.map((url, index) => {
          return (
            <li key={url + index}>
              <div>{url.original_url}</div>
              <div>{url.short_url}</div>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default UrlShortener;
