// spotifyAuth.js
export function generateRandomString(length) {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
  
  export function generateCodeChallenge(codeVerifier) {
    return crypto.subtle.digest('SHA-256', new TextEncoder().encode(codeVerifier))
      .then(buffer => {
        return btoa(String.fromCharCode(...new Uint8Array(buffer)))
          .replace(/\+/g, '-')
          .replace(/\//g, '_')
          .replace(/=+$/, '');
      });
  }
  
  export function getSpotifyAuthUrl(clientId, redirectUri, codeChallenge, scopes) {
    const params = new URLSearchParams({
      response_type: 'code',
      client_id: clientId,
      scope: scopes.join(' '),
      redirect_uri: redirectUri,
      code_challenge_method: 'S256',
      code_challenge: codeChallenge,
    });
  
    return `https://accounts.spotify.com/authorize?${params.toString()}`;
  }
  
  export async function exchangeToken(code, clientId, redirectUri, codeVerifier) {
    const body = new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: redirectUri,
      client_id: clientId,
      code_verifier: codeVerifier,
    });
  
    const res = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: body.toString(),
    });
  
    if (!res.ok) {
      throw new Error('Failed to exchange token');
    }
  
    return res.json();
  }
  