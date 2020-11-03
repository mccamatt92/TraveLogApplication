const API_URL = 'http://localhost:1337';

export async function listLogEntries(){
    const respone = await fetch(`${API_URL}/api/logs`);
    return respone.json();
}