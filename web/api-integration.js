// Connect to your Flask backend
const API_BASE = 'http://localhost:5000/api';

// Fetch real data from backend
async function loadTripData() {
    try {
        const response = await fetch(`${API_BASE}/trips/sample?limit=100`);
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Failed to load trip data:', error);
        return [];
    }
}

async function loadAnomalies() {
    try {
        const response = await fetch(`${API_BASE}/trips/anomalies?limit=50`);
        const data = await response.json();
        return data.anomalies || [];
    } catch (error) {
        console.error('Failed to load anomalies:', error);
        return [];
    }
}

async function loadZoneStats() {
    try {
        const response = await fetch(`${API_BASE}/trips/top-pickup-zones?limit=20`);
        const data = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Failed to load zone stats:', error);
        return [];
    }
}

// Initialize data on page load
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Loading data from backend...');
    const trips = await loadTripData();
    const anomalies = await loadAnomalies();
    const zones = await loadZoneStats();
    console.log('Trips:', trips);
    console.log('Anomalies:', anomalies);
    console.log('Zones:', zones);
});
