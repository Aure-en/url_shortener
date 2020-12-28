import React, { useState } from 'react';
import styled from 'styled-components';
import background from '../images/bg-shorten-desktop.svg';
import { colors, button } from '../style';

// Form
const FormContainer = styled.div`
  background: ${colors.background};
  background: linear-gradient(to bottom, #fff 50%, ${colors.background} 50%);
`;

const Form = styled.form`
  position: relative;
  width: 90vw;
  max-width: 1200px;
  padding: 2.5rem;
  background: url(${background});
  background-color: ${colors.violet};
  background-repeat: no-repeat;
  border-radius: 0.65rem;
  display: grid;
  grid-template-columns: 1fr auto;
  grid-gap: 1rem;
  align-items: center;
  margin: 0 auto;
`;

const InputContainer = styled.div`
  flex: 1;
`;

const Input = styled.input`
  padding: 0.7rem 1rem;
  font-family: 'Poppins', sans-serif;
  line-height: 1.25rem;
  width: 100%;
  border-radius: 5px;
  border: ${(props) => (props.error ? `3px solid ${colors.red}` : '')};

  &::placeholder {
    color: ${(props) => (props.error ? `${colors.red}` : ``)};
  }
`;

const SubmitBtn = styled.button`
  ${button}
  border-radius: .5rem;
  background: ${(props) =>
    props.disabled ? `${colors.lightCyan}` : `${colors.cyan}`};
`;

const Message = styled.div`
  position: absolute;
  font-size: 0.825rem;
  padding: 0.5rem 0;
  font-style: italic;
  color: ${colors.cyan};
`;

const Error = styled(Message)`
  color: ${colors.red};
`;

// Urls Displayed

const UrlsList = styled.ul`
  background: ${colors.background};
  display: grid;
  grid-auto-flow: row;
  grid-gap: 1rem;
  padding-top: 1rem;
`;

const UrlContainer = styled.li`
  display: grid;
  grid-template-columns: 3fr 1fr 6.25rem;
  align-items: center;
  grid-gap: 1rem;
  background: ${colors.white};
  margin: 0 auto;
  padding: .5rem 1.5rem;
  border-radius: .5rem;
  width: 90vw;
  max-width: 1200px
`;

const ShortenedUrl = styled.div`
  color: ${colors.cyan};
  justify-self: end;
`;

const CopyBtn = styled.button`
  ${button}
  border-radius: .5rem;
  background: ${(props) =>
    props.wasCopied ? `${colors.violet}` : `${colors.cyan}`};
`;

function UrlShortener() {
  const [url, setUrl] = useState('');
  const [shortUrls, setShortUrls] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [wasCopied, setWasCopied] = useState();

  const handleSubmitLink = async (e) => {
    e.preventDefault();

    // Request
    setLoading(true);
    setError('');
    setSuccess(false);
    const response = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`);
    const data = await response.json();

    // Errors
    if (!data.ok) {
      switch (data.error_code) {
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
          setError('Sorry, we could not shorten that link.');
      }
      setLoading(false);
      return;
    }

    /* If there are no errors:
    - Shorten the link and add it to the shortened links array.
    - Set loading to false so that the user may submit a new link.
    - Reset the url input.
    */

    // If we already have more than 10 urls, delete the first one.
    if (shortUrls.length > 9) {
      setShortUrls((prev) => {
        const urls = [...prev];
        urls.shift();
        return [
          ...urls,
          {
            short_url: data.result.full_short_link,
            original_url: data.result.original_link,
          },
        ];
      });
    } else {
      setShortUrls([
        ...shortUrls,
        {
          short_url: data.result.full_short_link,
          original_url: data.result.original_link,
        },
      ]);
    }

    setLoading(false);
    setSuccess(true);
    setUrl('');
  };

  const copy = (e) => {
    navigator.clipboard.writeText(shortUrls[e.target.id].short_url);
    setWasCopied(+e.target.id);
  };

  return (
    <section>
      <FormContainer>
        <Form onSubmit={handleSubmitLink}>
          <InputContainer>
            <Input
              type='text'
              value={url}
              placeholder='Shorten a link here...'
              onChange={(e) => setUrl(e.target.value)}
              error={error}
            />
            <Error>{error}</Error>
            {loading && <Message>Shortening...</Message>}
            {success && <Message>Shortened!</Message>}
          </InputContainer>
          <SubmitBtn type='submit' disabled={loading}>
            Shorten it!
          </SubmitBtn>
        </Form>
      </FormContainer>

      <UrlsList>
        {shortUrls.map((url, index) => {
          return (
            <UrlContainer key={url + index}>
              <div>{url.original_url}</div>
              <ShortenedUrl>{url.short_url}</ShortenedUrl>
              <CopyBtn id={index} wasCopied={wasCopied === index} onClick={copy}>
                {wasCopied === index ? 'Copied!' : 'Copy'}
              </CopyBtn>
            </UrlContainer>
          );
        })}
      </UrlsList>
    </section>
  );
}

export default UrlShortener;
