async function fetchData() {
    document.getElementById('loader').style.display = 'block';
    const handle = document.getElementById('handle').value;
    
    const userRes = await fetch(`https://codeforces.com/api/user.info?handles=${handle}`);
    const userData = await userRes.json();
    const user = userData.result[0];
    document.getElementById('rating').innerText = `Rating: ${user.rating} | Max: ${user.maxRating}`;
    
    const ratingRes = await fetch(`https://codeforces.com/api/user.rating?handle=${handle}`);
    const ratingData = await ratingRes.json();
    const contests = ratingData.result;
    const labels = contests.map(c => c.contestName.substring(0, 20));
    const ratings = contests.map(c => c.newRating);

    // Contest history table
    const tableDiv = document.getElementById('contests');
    tableDiv.innerHTML = '<h2>Contest History</h2><table><tr><th>Contest</th><th>Rank</th><th>Change</th><th>New Rating</th></tr>';
    contests.slice(-10).reverse().forEach(c => {
    const change = c.newRating - c.oldRating;
    const color = change >= 0 ? '#4caf50' : '#e94560';
    tableDiv.innerHTML += `<tr>
        <td>${c.contestName.substring(0, 30)}</td>
        <td>${c.rank}</td>
        <td style="color:${color}">${change >= 0 ? '+' : ''}${change}</td>
        <td>${c.newRating}</td>
    </tr>`;
});
     tableDiv.innerHTML += '</table>';
    
    const ctx = document.getElementById('chart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{ label: 'Rating', data: ratings, borderColor: '#e94560', tension: 0.3 }]
        }
    });
    
    const subRes = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&count=500`);
    const subData = await subRes.json();
    const submissions = subData.result;
    
    const tagCount = {};
    submissions.forEach(sub => {
        if(sub.verdict === 'OK'){
            sub.problem.tags.forEach(tag => {
                tagCount[tag] = (tagCount[tag] || 0) + 1;
            });
        }
    });
    
    const tagsDiv = document.getElementById('tags');
    tagsDiv.innerHTML = '<h2>Tags Solved</h2>';
    const sorted = Object.entries(tagCount).sort((a,b) => b[1]-a[1]);
    sorted.forEach(([tag, count]) => {
        tagsDiv.innerHTML += `<div>${tag}: ${count}</div>`;
    });
    
    const weakTags = sorted.slice(-3).map(([tag]) => tag);
    const recoDiv = document.getElementById('recommendations');
    recoDiv.innerHTML = '<h2>Recommended Problems</h2>';
    
    for(const tag of weakTags){
        const probRes = await fetch(`https://codeforces.com/api/problemset.problems?tags=${encodeURIComponent(tag)}`);
        const probData = await probRes.json();
        const solvedIds = new Set(submissions.filter(s => s.verdict === 'OK').map(s => s.problem.name));
        const recommended = probData.result.problems
            .filter(p => p.rating >= 800 && p.rating <= 1400 && !solvedIds.has(p.name))
            .slice(0, 3);
        recoDiv.innerHTML += `<h3>Weak: ${tag}</h3>`;
        recommended.forEach(p => {
            recoDiv.innerHTML += `<div><a href="https://codeforces.com/problemset/problem/${p.contestId}/${p.index}" target="_blank">${p.name} (${p.rating})</a></div>`;
        });
    }
    document.getElementById('loader').style.display = 'none';
}