const postData = async (url, data) => {
    const res = await fetch(url, {
        method:"POST",
        headers: {
            'Content-type' : 'application/json'//заголовки 
        },
        body: data
    });

    return await res.json();
};


const getResource = async (url, data) => { //я делаю запрос. дожидаюсь окончания. и трансформирую в норм JS обьект который сможеи использовать
    const res = await fetch(url);

    if (!res.ok){// если в моем запросе что то не так пошло 
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);//выкидываю ошибку в ручную
    }
    return await res.json();
};


export {postData};
export {getResource};