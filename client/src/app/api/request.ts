const API_URL = 'v1'

async function httpGetHospitals() {
    const response = await fetch(`${API_URL}/hospitals`)
    return await response.json();
}