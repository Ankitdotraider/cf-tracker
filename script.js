async function fetchData() {
    const handle = document.getElementById('handle').value;
    
    // Fetch user info
    const userRes = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    const userData = await userRes.json();
    const user = userData.result[0];
    document.getElementById('rating').innerText = `Rating: ${user.rating} | Max: ${user.maxRating}`;
    
    // Fetch rating history
    const ratingRes = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`);
    const ratingData = await ratingRes.json();
    const contests = ratingData.result;
    
    const labels = contests.map(c => c.contestName.substring(0, 20));
    const ratings = contests.map(c => c.newRating);
    
    // Draw chart
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Rating',
                data: ratings,
                borderColor: '#e94560',
                tension: 0.3
            }]
        }
    });
}