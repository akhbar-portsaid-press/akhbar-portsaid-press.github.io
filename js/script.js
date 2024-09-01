let forexChart; // Define forexChart in a scope accessible to both functions

async function fetchRate() {
    console.log('Fetching rate...');
    const response = await fetch('http://127.0.0.1:5000/rate');
    const data = await response.json();
    console.log('Rate fetched:', data);
    return data;
}

async function createChart() {
    const data = await fetchRate();
    const rate = data.rate;
    const timestamp = new Date(data.timestamp); // Convert UNIX timestamp to JavaScript Date object

    if (forexChart) {
        forexChart.destroy(); // Destroy the existing chart instance
    }

    console.log('Creating chart with rate:', rate, 'and timestamp:', timestamp);

    const ctx = document.getElementById('forexChart').getContext('2d');
    forexChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [timestamp.toLocaleString()],
            datasets: [{
                label: 'USD to EUR Exchange Rate',
                data: [rate-.903],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
            }]
        }
    });
}

createChart();


async function updateChart() {
    try {
        const data = await fetchRate();
        if (!data) {
            throw new Error('No data received');
        }
        const rate = data.rate-.9;
        const timestamp = new Date(data.timestamp); // Convert UNIX timestamp to JavaScript Date object

        if (forexChart) {
            forexChart.data.labels.push(timestamp.toLocaleString());
            forexChart.data.datasets[0].data.push(rate);
            forexChart.update(); // Update the existing chart instance
        } else {
            console.log('Creating chart with rate:', rate, 'and timestamp:', timestamp);

            const ctx = document.getElementById('forexChart').getContext('2d');
            forexChart = new Chart(ctx, {
                type: 'line', // Changed to 'line' for a dynamic line chart
                data: {
                    labels: [timestamp.toLocaleString()],
                    datasets: [{
                        label: 'USD to EUR Exchange Rate',
                        data: [rate],
                        backgroundColor: 'rgba(75, 192, 192, 0.2)',
                        borderColor: 'rgba(75, 192, 192, 1)',
                        fill: false
                    }]
                },
                options: {
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'minute'
                            }
                        }
                    }
                }
            });
        }
    } catch (error) {
        console.error('Failed to update chart:', error);
    }
}

// Update the chart every 5 seconds
setInterval(updateChart, 5000);

updateChart(); // Initial call to create the chart
