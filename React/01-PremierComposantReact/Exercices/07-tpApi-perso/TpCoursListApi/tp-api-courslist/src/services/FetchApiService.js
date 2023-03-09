const __BASE_URL = 'http://localhost:7777/api';

const __HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
}

export const getCoursListApi = (async () => {
    const jsonResponse = await fetch(__BASE_URL + '/cours', {
        method: 'GET',
        headers: __HEADERS
    })
    const content = await jsonResponse.json()
    return content;
})

export const getCoursApi = (async (id) => {
    //console.log("Api : " +id);
    const jsonResponse = await fetch(__BASE_URL + '/cours/' + id, {
        method: 'GET',
        headers: __HEADERS
    })
    const content = await jsonResponse.json()
    return content;
})

export const postCoursApi = (async (cours) => {    
    const jsonResponse = await fetch(__BASE_URL + '/cours', {
        method: 'POST',
        headers: __HEADERS,
        body: JSON.stringify({
            name: cours.name,
            price:cours.price,
            difficulty:cours.difficulty,
            category:cours.category
        })
    })
    const content = await jsonResponse.json()
    return content;
})

export const updateCoursApi = (async (cours) => {
    const rawResponse = await fetch(__BASE_URL + '/cours/' + cours.id, {
        method: 'PUT',
        headers: __HEADERS,
        body: JSON.stringify({
            name: cours.name,
            price: cours.price,
            difficulty: cours.difficulty,
            category: cours.category,
            created: new Date(cours.created)
        })
    });
    const content = await rawResponse.json();

    //console.log("UPDATE Response : " + content);
    return content;
});

export const deleteCoursApi = (async (coursId) => {
    const rawResponse = await fetch(__BASE_URL + '/cours/' + coursId, {
        method: 'DELETE',
        headers: __HEADERS
    });
    const content = await rawResponse.json();

    // console.log("DELETE Response : ");
    // console.log(content);
    return content;
});