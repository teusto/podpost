const API_ENDPOINT = 'https://www.linkedin.com/oauth/v2/accessToken';

const config = {
    grant_type: 'client_credentials',
    client_id: process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    client_secret: process.env.REACT_APP_LINKEDIN_CLIENT_SECRET,
};

export default async (request, context) => {
    try {
        const response = await fetch(API_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: new URLSearchParams(config)
        })
        if (!response.ok) {
            const errorDetails = await response.json().catch(() => null)
            throw new Error(`HTTP error! Status: ${response.status} - ${JSON.stringify(errorDetails)}`);
        }
        const data = await response.json();
        console.log({data, response})
        return Response.json({ data })
    } catch (error) {
        console.error('Error fetching access token:', error);
        return Response.json({ error })
    }
}