export function upload(url = 'http://localhost:4000/api/photos/', file) {
    try{
        const formData = new FormData()
    formData.append('image', file)
    return fetch(url, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'multipart/form-data',
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
    }catch(e){
        console.log(e);
    }
    
}

export async function get(url = 'http://localhost:4000/api/photos/') {
     let data;
    try{
        return data = fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json, charset=utf-8',
                'Accept': 'application/json, text/plain, */*'
            },
            credentials: 'include'
        })
        .then(res => res.json())
        .then(data =>  data)
    }catch(e){
        console.log(e);
    }
}
