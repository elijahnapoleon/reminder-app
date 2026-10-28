async function fetchGithubEvents(user){
    const response = await fetch(`https://api.github.com/users/${user}/events?per_page=1`,{
        headers: {
            "User-Agent" : "node.js"
        }
    });

    if(!response.ok){
        throw new Error(response.status);
    }

    return response.json();
};



export {fetchGithubEvents};