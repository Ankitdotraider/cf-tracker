const TAG_RESOURCES = {
    'dp': {
        cpa: 'https://cp-algorithms.com/dynamic_programming/intro-to-dp.html',
        cses: 'https://cses.fi/problemset/list/#dp',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=dp',
        book: 'https://cses.fi/book/book.pdf#page=71'
    },
    'graphs': {
        cpa: 'https://cp-algorithms.com/graph/breadth-first-search.html',
        cses: 'https://cses.fi/problemset/list/#graph',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=graph',
        book: 'https://cses.fi/book/book.pdf#page=111'
    },
    'dfs and similar': {
        cpa: 'https://cp-algorithms.com/graph/depth-first-search.html',
        cses: 'https://cses.fi/problemset/list/#graph',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=dfs',
        book: 'https://cses.fi/book/book.pdf#page=113'
    },
    'binary search': {
        cpa: 'https://cp-algorithms.com/num_methods/binary_search.html',
        cses: 'https://cses.fi/problemset/task/1085',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=binary-search',
        book: 'https://cses.fi/book/book.pdf#page=33'
    },
    'math': {
        cpa: 'https://cp-algorithms.com/algebra/binary-exp.html',
        cses: 'https://cses.fi/problemset/list/#math',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=math',
        book: 'https://cses.fi/book/book.pdf#page=201'
    },
    'number theory': {
        cpa: 'https://cp-algorithms.com/algebra/prime-sieve-linear.html',
        cses: 'https://cses.fi/problemset/list/#math',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=number-theory',
        book: 'https://cses.fi/book/book.pdf#page=203'
    },
    'greedy': {
        cpa: 'https://cp-algorithms.com/schedules/schedule_one_machine.html',
        cses: 'https://cses.fi/problemset/list/#sorting',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=greedy',
        book: 'https://cses.fi/book/book.pdf#page=61'
    },
    'strings': {
        cpa: 'https://cp-algorithms.com/string/string-hashing.html',
        cses: 'https://cses.fi/problemset/list/#string',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=string',
        book: 'https://cses.fi/book/book.pdf#page=245'
    },
    'trees': {
        cpa: 'https://cp-algorithms.com/graph/lca.html',
        cses: 'https://cses.fi/problemset/list/#tree',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=tree',
        book: 'https://cses.fi/book/book.pdf#page=137'
    },
    'data structures': {
        cpa: 'https://cp-algorithms.com/data_structures/segment_tree.html',
        cses: 'https://cses.fi/problemset/list/#range',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=data-structure',
        book: 'https://cses.fi/book/book.pdf#page=83'
    },
    'bitmasks': {
        cpa: 'https://cp-algorithms.com/algebra/bit-manipulation.html',
        cses: 'https://cses.fi/problemset/task/2181',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=bitmask',
        book: 'https://cses.fi/book/book.pdf#page=101'
    },
    'two pointers': {
        cpa: 'https://cp-algorithms.com/two_pointers/two_pointers.html',
        cses: 'https://cses.fi/problemset/task/1640',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=two-pointers',
        book: 'https://cses.fi/book/book.pdf#page=79'
    },
    'dsu': {
        cpa: 'https://cp-algorithms.com/data_structures/disjoint_set_union.html',
        cses: 'https://cses.fi/problemset/task/1676',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=dsu',
        book: 'https://cses.fi/book/book.pdf#page=149'
    },
    'shortest paths': {
        cpa: 'https://cp-algorithms.com/graph/dijkstra.html',
        cses: 'https://cses.fi/problemset/task/1671',
        atcoder: 'https://kenkoooo.com/atcoder/#/table/?tag=shortest-path',
        book: 'https://cses.fi/book/book.pdf#page=123'
    }
};

function renderResources(weakTags) {
    const resDiv = document.getElementById('resources');
    resDiv.innerHTML = '<h2>Resources for Weak Tags</h2>';
    
    if (!weakTags || weakTags.length === 0) {
        resDiv.innerHTML += '<p style="color: #a8a8b3;">No tag data available.</p>';
        return;
    }

    weakTags.forEach(tag => {
        const key = tag.toLowerCase();
        const mapping = TAG_RESOURCES[key] || {};
        
        const cpaUrl = mapping.cpa || `https://cp-algorithms.com/`;
        const csesUrl = mapping.cses || `https://cses.fi/problemset/`;
        const atcoderUrl = mapping.atcoder || `https://kenkoooo.com/atcoder/#/table/`;
        const bookUrl = mapping.book || `https://cses.fi/book/book.pdf`;

        resDiv.innerHTML += `
            <div class="resource-group">
                <h3>Weak Tag: <span class="tag-title">${tag}</span></h3>
                <div class="resource-cards">
                    <a class="resource-card cpa" href="${cpaUrl}" target="_blank">
                        <span class="res-icon">📘</span>
                        <div>
                            <strong>CP-Algorithms</strong>
                            <div class="res-sub">Theory & Implementations</div>
                        </div>
                    </a>
                    <a class="resource-card book" href="${bookUrl}" target="_blank">
                        <span class="res-icon">📖</span>
                        <div>
                            <strong>CP Handbook</strong>
                            <div class="res-sub">Antti Laaksonen's Guide</div>
                        </div>
                    </a>
                    <a class="resource-card cses" href="${csesUrl}" target="_blank">
                        <span class="res-icon">📝</span>
                        <div>
                            <strong>CSES Practice</strong>
                            <div class="res-sub">Standard Problem Set</div>
                        </div>
                    </a>
                    <a class="resource-card atcoder" href="${atcoderUrl}" target="_blank">
                        <span class="res-icon">🏷️</span>
                        <div>
                            <strong>AtCoder Problems</strong>
                            <div class="res-sub">Filtered Tasks</div>
                        </div>
                    </a>
                </div>
            </div>
        `;
    });
}

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
    if(window.myChart) window.myChart.destroy();
    window.myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{ label: 'Rating', data: ratings, borderColor: '#e94560', tension: 0.3 }]
        }
    });
    
    const subRes = await fetch(`https://codeforces.com/api/user.status?handle=${handle}&count=500`);
    const subData = await subRes.json();
    const submissions = subData.result;
    // Heatmap
const dayCounts = {};
submissions.forEach(s => {
    const date = new Date(s.creationTimeSeconds * 1000);
    const key = date.toISOString().split('T')[0];
    dayCounts[key] = (dayCounts[key] || 0) + 1;
});

const heatmapDiv = document.getElementById('heatmap');
heatmapDiv.innerHTML = '<h2>Submission Heatmap</h2>';

const grid = document.createElement('div');
grid.style.cssText = 'display:flex; flex-wrap:wrap; gap:3px; max-width:800px;';

for(let i = 364; i >= 0; i--){
    const date = new Date();
    date.setDate(date.getDate() - i);
    const key = date.toISOString().split('T')[0];
    const count = dayCounts[key] || 0;

    const cell = document.createElement('div');
    cell.style.cssText = `width:14px; height:14px; border-radius:2px;`;
    cell.title = `${key}: ${count} submissions`;

    if(count === 0) cell.style.background = '#ebedf0';
    else if(count <= 2) cell.style.background = '#9be9a8';
    else if(count <= 5) cell.style.background = '#40c463';
    else if(count <= 10) cell.style.background = '#30a14e';
    else cell.style.background = '#216e39';

    grid.appendChild(cell);
}

heatmapDiv.appendChild(grid);
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
    renderResources(weakTags);
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

    // User comparison
    const handle2 = document.getElementById('handle2').value;
    if(handle2){
    const user2Res = await fetch(`https://codeforces.com/api/user.info?handles=${handle2}`);
    const user2Data = await user2Res.json();
    const user2 = user2Data.result[0];
    
    const sub2Res = await fetch(`https://codeforces.com/api/user.status?handle=${handle2}&count=500`);
    const sub2Data = await sub2Res.json();
    const solved2 = sub2Data.result.filter(s => s.verdict === 'OK').length;
    const solved1 = submissions.filter(s => s.verdict === 'OK').length;
    
    const compareDiv = document.getElementById('compare');
    compareDiv.innerHTML = `
        <h2>Comparison</h2>
        <table>
            <tr><th></th><th>${handle}</th><th>${handle2}</th></tr>
            <tr><td>Rating</td><td>${user.rating}</td><td>${user2.rating}</td></tr>
            <tr><td>Max Rating</td><td>${user.maxRating}</td><td>${user2.maxRating}</td></tr>
            <tr><td>Problems Solved</td><td>${solved1}</td><td>${solved2}</td></tr>
        </table>
    `;
}


    document.getElementById('loader').style.display = 'none';
    
}